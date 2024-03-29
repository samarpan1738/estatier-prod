import React, { useCallback, useEffect } from "react";

import { Form, useFormikContext } from "formik";
import StepperGroup from "../StepperGroup/StepperGroup";
import TooltipImg from "@src/img/tooltip.svg";
import Tooltip from "../Tooltip/Tooltip";

// import { subgroupsCollection } from "../../../utils/PostProperty/PropertyDataStructure_final";
import { useMediaQuery } from "@material-ui/core";

// Utils
import checkConditions from "@src/utils/PostProperty/checker";
import { useNextGroup, usePrevGroup } from "@src/utils/PostProperty/groupChanger";

// Styles
import "./formikStepper.css";
import ValidationSchemaGenerator from "@src/utils/PostProperty/ValidationSchemaGenerator";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Divider,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import GROUP_QUERY_MAP, { DeleteFullProperty_MUTATION, PostEnquiry_MUTATION } from "@src/queries";
import request from "graphql-request";
import { selectIsLoggedIn, selectUserId } from "@src/features/user/userSlice";
import {
    resetForm as resetFormState,
    setTooltip,
    selectTooltip,
    selectPropId,
    setPropId,
    selectCurrentGroupIndex,
    setQuestionId,
    selectFormData,
    pushGroupsToDelete,
    popGroupsToDelete,
    selectGroupsToDelete,
} from "@src/features/postProperty/postPropertySlice";
import { setProperty } from "@src/features/singleProp/singlePropSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoArrowBack, IoArrowForward } from "react-icons/all";
import PreviewProperty from "../../SingleProperty/PropPage/PropPage";
import MapStepperGroup from "../MapStepperGroup/MapStepperGroup";
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

function FormikStepper({
    groups,
    conditions,
    setValidationSchema,
    stepperCnt,
    subgroupsCollection,
    showTooltip,
    isPostEnquiry,
    setSteps,
    steps
}) {
    const nextGroup = useNextGroup();
    const prevGroup = usePrevGroup();
    const dispatch = useDispatch();
    // * Selecting values
    const currentGroupIndex = useSelector(selectCurrentGroupIndex);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user_id = useSelector(selectUserId);
    const property_id = useSelector(selectPropId);
    const tooltip = useSelector(selectTooltip);
    const formData = useSelector(selectFormData);
    const groupsToDelete = useSelector(selectGroupsToDelete);
    // * Modal stuff
    const { isOpen, onOpen, onClose } = useDisclosure();
    let { values, isValid, isValidating, validateForm, resetForm, setFieldTouched } = useFormikContext();
    const matches = useMediaQuery("(min-width:600px)");
    // console.log("Groups to Delete ", groupsToDelete);
    // * Creating and setting the Validation Schema for current group
    useEffect(() => {
        ValidationSchemaGenerator(
            currentGroupIndex,
            groups,
            conditions,
            values,
            setValidationSchema,
            checkConditions,
            subgroupsCollection
        );
        // console.log("Formik stepper mounted");
        return () => {
            // console.log("Formik stepper unmounted");
        };
    }, [currentGroupIndex]);

    const createGroupQuestionsApiCall = (groupName) => {
        console.log(groupName);
        if (GROUP_QUERY_MAP[groupName] && isLoggedIn) {
            const { create } = GROUP_QUERY_MAP[groupName].query;
            let data = {};
            switch (groupName) {
                case "Property Type":
                    // fields.forEach((field) => {
                    // 	data[field] = values[field];
                    // });
                    data = {};
                    data.user_group = values["user_group"];
                    data.pro_trans_type = values["pro_trans_type"];
                    data.pro_category = values["pro_category"];
                    data.pro_type = values["pro_type"];
                    data.pro_post_user = user_id;
                    data.property_post_date = Date.now().toString();
                    data.pro_status = "0";

                    request("https://estatier.herokuapp.com/graphql", create, data)
                        .then((res) => {
                            console.log(res);
                            if (groupName === "Property Type") {
                                dispatch(setPropId(res.PostProperty._id));
                            }
                        })
                        .catch((err) => {
                            // console.log(err.message.split(":")[0]);
                            console.log(err);
                        });

                    break;
                default:
                    function sendAllAnswers(group, parent = null, level = 0) {
                        data = {};
                        const { questions } = group;
                        questions.forEach(
                            ({ content, ansType, unit, key, renderConditions, skipConditions, subgroups, options }) => {
                                console.log(content, values[key]);
                                if (
                                    (skipConditions && checkConditions(values, conditions[skipConditions], ansType)) ||
                                    (renderConditions &&
                                        !checkConditions(values, conditions[renderConditions], ansType))
                                ) {
                                    console.log(renderConditions);
                                    console.log(skipConditions);
                                } else {
                                    data = {};
                                    data.user_id = user_id;
                                    data.property = property_id;
                                    if (parent) data.parent_question = parent;
                                    data.level = level.toString();
                                    data.question = content;
                                    data.answer = values[key].toString();
                                    data.units = "null";
                                    if (unit) {
                                        data.units = unit;
                                    }

                                    data.brisk_grid = key;
                                    data.question_input_type = ansType ? ansType : null;
                                    data.date = Date.now().toString();
                                    // console.log(data);
                                    request("https://estatier.herokuapp.com/graphql", create, data)
                                        .then((res) => {
                                            console.log(res);
                                            const parent_question_id = res[Object.keys(res)[0]]._id;
                                            // Store in state
                                            dispatch(
                                                setQuestionId({
                                                    group_name: groupName,
                                                    question_id: parent_question_id,
                                                    brisk_grid: key,
                                                    ans: values[key],
                                                })
                                            );
                                            // check question suubgroups

                                            if (subgroups) {
                                                subgroups.forEach((subgroup) => {
                                                    sendAllAnswers(
                                                        subgroupsCollection[subgroup],
                                                        parent_question_id,
                                                        level + 1
                                                    );
                                                });
                                            }
                                            // check option's subgroups
                                            if (options) {
                                                options.forEach(({ displayText, subgroups }) => {
                                                    if (displayText === values[key] && subgroups)
                                                        subgroups.forEach((subgroup) => {
                                                            sendAllAnswers(
                                                                subgroupsCollection[subgroup],
                                                                parent_question_id,
                                                                level + 1
                                                            );
                                                        });
                                                });
                                            }
                                        })
                                        .catch((err) => {
                                            // console.log(err.message.split(":")[0]);
                                            console.log(err);
                                        });
                                }
                            }
                        );
                    }
                    sendAllAnswers(groups[currentGroupIndex]);
            }
        }
    };
    const updateGroupQuestionsApiCall = (groupName) => {
        console.log(`update ${groupName} questions`);
        if (GROUP_QUERY_MAP[groupName] && isLoggedIn) {
            const { update } = GROUP_QUERY_MAP[groupName].query;
            let data = {};
            switch (groupName) {
                case "Property Type":
                    // fields.forEach((field) => {
                    // 	data[field] = values[field];
                    // });
                    data = {};
                    data.user_group = values["user_group"];
                    data.pro_trans_type = values["pro_trans_type"];
                    data.pro_category = values["pro_category"];
                    data.pro_type = values["pro_type"];
                    data.pro_post_user = user_id;
                    data.property_post_date = Date.now().toString();
                    data.pro_status = "0";

                    request("https://estatier.herokuapp.com/graphql", update, data)
                        .then((res) => {
                            console.log(res);
                            if (groupName === "Property Type") {
                                dispatch(setPropId(res.PostProperty._id));
                            }
                        })
                        .catch((err) => {
                            // console.log(err.message.split(":")[0]);
                            console.log(err);
                        });

                    break;
                default:
                    function sendAllAnswers(group, parent = null, level = 0) {
                        data = {};
                        const { questions } = group;
                        questions.forEach(
                            ({ content, ansType, unit, key, renderConditions, skipConditions, subgroups, options }) => {
                                console.log(values[key]);
                                if (
                                    (skipConditions && checkConditions(values, conditions[skipConditions], ansType)) ||
                                    (renderConditions &&
                                        !checkConditions(values, conditions[renderConditions], ansType)) ||
                                    (formData[groupName][key] && formData[groupName][key].ans == values[key])
                                ) {
                                    // console.log(renderConditions);
                                    // console.log(skipConditions);
                                    if (formData[groupName][key])
                                        console.log(
                                            formData[groupName][key].ans,
                                            values[key],
                                            formData[groupName][key].ans == values[key]
                                        );
                                    console.log("Don't update answers");
                                } else {
                                    // Delete all groups in groupsToDelete
                                    data = { propertyid: property_id };
                                    for (let i = groupsToDelete.length - 1; i >= 0; --i) {
                                        const groupName = groupsToDelete[i];
                                        const { _delete } = GROUP_QUERY_MAP[groupName].query;
                                        console.log(`Sending delete request for ${groupName}`);
                                        request("https://estatier.herokuapp.com/graphql", _delete, data)
                                            .then((res) => {
                                                console.log(`successfully Deleted ${groupName}'s questions`, res);
                                            })
                                            .catch((err) => {
                                                console.error(`Couldn't delete ${groupName}'s questions`, err);
                                            });
                                        dispatch(popGroupsToDelete());
                                    }
                                    console.log("Update answers");
                                    // Update values
                                    data = {};
                                    data._id = formData[groupName][key].qid;
                                    if (parent) data.parent_question = parent;
                                    data.level = level.toString();
                                    data.question = content;
                                    data.answer = values[key].toString();
                                    data.units = "null";
                                    if (unit) {
                                        data.units = unit;
                                    }

                                    data.brisk_grid = key;
                                    data.question_input_type = ansType ? ansType : null;
                                    // console.log(data);
                                    request("https://estatier.herokuapp.com/graphql", update, data)
                                        .then((res) => {
                                            console.log(res);
                                            const parent_question_id = res[Object.keys(res)[0]]._id;
                                            console.log("Updated Question Id --> ", parent_question_id);
                                            // check question suubgroups

                                            if (subgroups) {
                                                subgroups.forEach((subgroup) => {
                                                    sendAllAnswers(
                                                        subgroupsCollection[subgroup],
                                                        parent_question_id,
                                                        level + 1
                                                    );
                                                });
                                            }
                                            // check option's subgroups
                                            if (options) {
                                                options.forEach(({ displayText, subgroups }) => {
                                                    if (displayText === values[key] && subgroups)
                                                        subgroups.forEach((subgroup) => {
                                                            sendAllAnswers(
                                                                subgroupsCollection[subgroup],
                                                                parent_question_id,
                                                                level + 1
                                                            );
                                                        });
                                                });
                                            }
                                        })
                                        .catch((err) => {
                                            // console.log(err.message.split(":")[0]);
                                            console.log(err);
                                        });
                                }
                            }
                        );
                    }
                    sendAllAnswers(groups[currentGroupIndex]);
            }
        }
    };
    const handleNext = () => {
        const groupName = groups[currentGroupIndex].name;
        if (!formData[groupName]) createGroupQuestionsApiCall(groupName);
        else updateGroupQuestionsApiCall(groupName);

        dispatch(popGroupsToDelete(groupName));

        nextGroup(
            validateForm,
            values,
            currentGroupIndex,
            setFieldTouched,
            stepperCnt,
            groups,
            conditions,
            setSteps
        );
    };
    const handlePrev = () => {
        // Not working :(
        validateForm();
        dispatch(pushGroupsToDelete(groups[currentGroupIndex].name));
        prevGroup(
            stepperCnt,
            groups,
            setSteps,
            steps
        );
    };
    // * Reset Form Handler
    const _resetForm = useCallback(() => {
        resetForm();
        setSteps([{ label: groups[0].name, groupIndex: 0 }]);
        console.log(property_id);
        if (property_id) {
            const data = { propertyid: property_id };
            request("https://estatier.herokuapp.com/graphql", DeleteFullProperty_MUTATION, data)
                .then((res) => {
                    console.log(`successfully Deleted entire Property`, res);
                })
                .catch((err) => {
                    console.error(`Couldn't delete entire property`, err);
                });
        } else {
            console.log("Property not created yet");
        }
        dispatch(resetFormState());
    }, [property_id]);

    const previewPropertyToggle = (e) => {
        // createGroupQuestionsApiCall(groups[currentGroupIndex].name);
        dispatch(setProperty(values));
        onOpen(e);
    };
    const postEnquiryApiCall = () => {
        // Make post enquiry api call
        const data = {};
        console.log(values);
        data.pro_post_user = user_id;
        data.user_group = values["user_group"];
        data.pro_trans_type = values["pro_trans_type"];
        data.pro_category = values["pro_category"];
        data.pro_type = values["pro_type"];
        data.questions = ["Price Range", "Location Radius", "Agent Allowed"];
        data.answers = [
            `₹${values["price_range_from"]}-${values["price_range_to"]}`,
            values["loc_radius"] + " Km",
            values["agent_allowed"],
        ];
        data.enquiry_status = "0";
        data.property_enquiry_date = Date.now().toString();
        request("https://estatier.herokuapp.com/graphql", PostEnquiry_MUTATION, data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                // console.log(err.message.split(":")[0]);
                console.log(err);
            });
    };

    return (
        <div className="form-content">
            {/* Preview Property modal */}
            <Modal isOpen={isOpen} onClose={onClose} width="100vw">
                <ModalOverlay />
                <ModalContent
                    width="max-content"
                    maxWidth="100vw"
                    minWidth="1260px"
                    maxHeight="95vh"
                    minHeight="95vh"
                    top="-40px"
                >
                    <ModalHeader className="preview-modal-header">
                        <span>Property Preview</span>
                        <Button colorScheme="green" className="reviewToRolloutBtn">
                            <span>Review to Rollout</span> <IoArrowForward fontSize="20px" />
                        </Button>
                    </ModalHeader>
                    <Divider />
                    <ModalCloseButton />
                    <ModalBody width="1260px" overflow="auto">
                        <PreviewProperty />
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* FORM */}
            <div id="left-post">
                <Form autoComplete="off">
                    {groups[currentGroupIndex].name === "Mark Location" ? (
                        <MapStepperGroup group={groups[currentGroupIndex]} conditions={conditions} />
                    ) : (
                        <StepperGroup group={groups[currentGroupIndex]} conditions={conditions} />
                    )}
                    {/* {currentGroupIndex === groups.length - 1 && <button type="submit">Submit</button>} */}
                </Form>
                <div className="form-control-btns">
                    <Button onClick={_resetForm} id="reset-form-btn">
                        Reset
                    </Button>

                    <div>
                        {currentGroupIndex > 0 && (
                            <Button
                                onClick={handlePrev}
                                disabled={isValidating}
                                // leftIcon={<i className="form-prev-btn-icon arrow left"></i>}
                                className="form-prev-btn"
                            >
                                <IoArrowBack fontSize="25px" />
                                <span>Back</span>
                            </Button>
                        )}

                        {!(isPostEnquiry && groups[currentGroupIndex].name === "Property Details") &&
                            groups[currentGroupIndex].name !== "Contact Preferences" && (
                                <Button
                                    isLoading={isValidating}
                                    disabled={!isValid || isValidating}
                                    onClick={handleNext}
                                    className="form-next-btn"
                                >
                                    Next
                                </Button>
                            )}
                        {!isPostEnquiry && groups[currentGroupIndex].name === "Contact Preferences" && (
                            <Button onClick={previewPropertyToggle} colorScheme="purple" marginRight="28px">
                                Preview
                            </Button>
                        )}
                        {isPostEnquiry && groups[currentGroupIndex].name === "Property Details" && (
                            <Button onClick={postEnquiryApiCall} colorScheme="purple" marginRight="28px">
                                Post Enquiry
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* TOOLTIP */}
            {matches && !showTooltip && (
                <div id="right-post">
                    <Tooltip content={tooltip} />
                    <img src={TooltipImg} alt="" />
                </div>
            )}
        </div>
    );
}

export default FormikStepper;

import { gql } from "graphql-request";

// Create Group Questions
const CREATE_PROP_POST_MUTATION = gql`
    mutation CreatePost(
        $pro_post_user: ID
        $user_group: String
        $pro_trans_type: String
        $pro_category: String
        $pro_type: String
        $pro_status: String
        $property_post_date: String
    ) {
        PostProperty(
            proInput: {
                pro_post_user: $pro_post_user
                user_group: $user_group
                pro_trans_type: $pro_trans_type
                pro_category: $pro_category
                pro_type: $pro_type
                pro_status: $pro_status
                property_post_date: $property_post_date
            }
        ) {
            _id
        }
    }
`;
const PostPropAreaGroupA_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropAreaGroupA(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            user_id
            property
            parent_question
            level
            question
            answer
            units
            brisk_grid
            question_input_type
            date
            updatedAt
            createdAt
        }
    }
`;
const PostPropParkingGroupB_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropParkingGroupB(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropPropertyAgeGroupC_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropPropertyAgeGroupC(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropDescriptionGroupD_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropDescriptionGroupD(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropPricingGroupE_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropPricingGroupE(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropAgentGroupF_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropAgentGroupF(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropAvailableForGroupG_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropAvailableForGroupG(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropLocationGroupH_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropLocationGroupH(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropAddressGroupI_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropAddressGroupI(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;
const PostPropPropertImageGroupJ_MUTATION = gql`
    mutation CreatePost(
        $user_id: ID
        $property: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
        $date: String
    ) {
        PostPropPropertImageGroupJ(
            proInput: {
                user_id: $user_id
                property: $property
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
                date: $date
            }
        ) {
            _id
            property
        }
    }
`;

// Update Group Questions
const PostPropAreaGroupAUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropAreaGroupAUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropParkingGroupBUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropParkingGroupBUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropPropertyAgeGroupCUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropPropertyAgeGroupCUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropDescriptionGroupDUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropDescriptionGroupDUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropPricingGroupEUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropPricingGroupEUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropAgentGroupFUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropAgentGroupFUpdate(
            proInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropAvailableForGroupGUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropAvailableForGroupGUpdate(
            UpdateproInput: {
                _id: $_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropLocationGroupHUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropLocationGroupHUpdate(
            proInput: {
                _id: $user_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropAddressGroupIUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropAddressGroupIUpdate(
            proInput: {
                _id: $user_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;
const PostPropPropertImageGroupJUpdate_MUTATION = gql`
    mutation UpdateGroupQuestions(
        $_id: ID
        $parent_question: String
        $level: String
        $question: String
        $answer: String
        $units: String
        $brisk_grid: String
        $question_input_type: String
    ) {
        PostPropPropertImageGroupJUpdate(
            proInput: {
                _id: $user_id
                parent_question: $parent_question
                level: $level
                question: $question
                answer: $answer
                units: $units
                brisk_grid: $brisk_grid
                question_input_type: $question_input_type
            }
        ) {
            _id
        }
    }
`;

// Delete

const DeleteAreaGroupA_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteAreaGroupA(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteParkingGroupB_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteParkingGroupB(propertyid: $propertyid) {
            message
        }
    }
`;
const DeletePropertyAgeGroupC_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeletePropertyAgeGroupC(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteDescriptionGroupD_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteDescriptionGroupD(propertyid: $propertyid) {
            message
        }
    }
`;
const DeletePricingGroupE_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeletePricingGroupE(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteAgentGroupF_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteAgentGroupF(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteAvailableForGroupG_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteAvailableForGroupG(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteLocationGroupH_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteLocationGroupH(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteAddressGroupI_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeleteAddressGroupI(propertyid: $propertyid) {
            message
        }
    }
`;
const DeletePropertImageGroupJ_MUTATION = gql`
    mutation DeleteGroupQuestions($propertyid: ID!) {
        DeletePropertImageGroupJ(propertyid: $propertyid) {
            message
        }
    }
`;
export const DeleteFullProperty_MUTATION = gql`
    mutation DeleteFullProperty($propertyid: ID!) {
        DeleteFullProperty(propertyid: $propertyid) {
            message
        }
    }
`;
const DeleteProperty_MUTATION = gql`
    mutation DeleteProperty($propertyid: ID!) {
        DeleteProperty(propertyid: $propertyid) {
            message
        }
    }
`;
// General
export const SIGNUP_MUTATION = gql`
    mutation Register(
        $email: String!
        $password: String!
        $mobileNo: String
        $whatsappNo: String
        $name: String
        $image: String
        $avtaar: String
        $tagline: String
        $about_me: String
        $a_name: String
        $a_image: String
        $a_avtaar: String
        $a_tagline: String
        $a_about_me: String
        $role: String
        $referrer: String
        $club_name: String
        $club_year: String
        $campaign_name: String
        $first_login_method: String
        $is_deleted: String
    ) {
        createUser(
            userInput: {
                email: $email
                password: $password
                mobileNo: $mobileNo
                whatsappNo: $whatsappNo
                name: $name
                image: $image
                avtaar: $avtaar
                tagline: $tagline
                about_me: $about_me
                a_name: $a_name
                a_image: $a_image
                a_avtaar: $a_avtaar
                a_tagline: $a_tagline
                a_about_me: $a_about_me
                role: $role
                referrer: $referrer
                club_name: $club_name
                club_year: $club_year
                campaign_name: $campaign_name
                first_login_method: $first_login_method
                is_deleted: $is_deleted
            }
        ) {
            _id
            email
            password
            mobileNo
            whatsappNo
            name
            image
            avtaar
            tagline
            about_me
            a_name
            a_image
            a_avtaar
            a_tagline
            a_about_me
            role
            referrer
            club_name
            club_year
            campaign_name
            first_login_method
            is_deleted
            createdAt
            updatedAt
        }
    }
`;
export const LOGIN_QUERY = gql`
    query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            userID
            token
            tokenExpiration
        }
    }
`;
export const GET_USER_DETAILS_QUERY = gql`
    query GetUserDetails($_id: ID!) {
        getUserDetails(_id: $_id) {
            _id
            email
            password
            mobileNo
            whatsappNo
            name
            image
            avtaar
            tagline
            about_me
            a_name
            a_image
            a_avtaar
            a_tagline
            a_about_me
            role
            referrer
            club_name
            club_year
            campaign_name
            first_login_method
            is_deleted
            createdAt
            updatedAt
        }
    }
`;

const GROUP_QUERY_MAP = {
    "Property Type": {
        query: { create: CREATE_PROP_POST_MUTATION },
    },
    // * For all Area Description questions
    "Area Description": {
        query: {
            create: PostPropAreaGroupA_MUTATION,
            update: PostPropAreaGroupAUpdate_MUTATION,
            _delete: DeleteAreaGroupA_MUTATION,
        },
    },
    Parking: {
        query: {
            create: PostPropParkingGroupB_MUTATION,
            update: PostPropParkingGroupBUpdate_MUTATION,
            _delete: DeleteParkingGroupB_MUTATION,
        },
    },
    "Property Age": {
        query: {
            create: PostPropPropertyAgeGroupC_MUTATION,
            update: PostPropPropertyAgeGroupCUpdate_MUTATION,
            _delete: DeletePropertyAgeGroupC_MUTATION,
        },
    },
    "Property Description": {
        query: {
            create: PostPropDescriptionGroupD_MUTATION,
            update: PostPropDescriptionGroupDUpdate_MUTATION,
            _delete: DeleteDescriptionGroupD_MUTATION,
        },
    },
    "Price Details": {
        query: {
            create: PostPropPricingGroupE_MUTATION,
            update: PostPropPricingGroupEUpdate_MUTATION,
            _delete: DeletePricingGroupE_MUTATION,
        },
    },
    "Agent Details": {
        query: {
            create: PostPropAgentGroupF_MUTATION,
            update: PostPropAgentGroupFUpdate_MUTATION,
            _delete: DeleteAgentGroupF_MUTATION,
        },
    },
    Availability: {
        query: {
            create: PostPropAvailableForGroupG_MUTATION,
            update: PostPropAvailableForGroupGUpdate_MUTATION,
            _delete: DeleteAvailableForGroupG_MUTATION,
        },
    },
    "Mark Location": {
        query: {
            create: PostPropLocationGroupH_MUTATION,
            update: PostPropLocationGroupHUpdate_MUTATION,
            _delete: DeleteLocationGroupH_MUTATION,
        },
    },
    "Property Address": {
        query: {
            create: PostPropAddressGroupI_MUTATION,
            update: PostPropAddressGroupIUpdate_MUTATION,
            _delete: DeleteAddressGroupI_MUTATION,
        },
    },

    // "Contact Preferences":{query:Pos}
    // "Image Upload": { query: PostPropPropertImageGroupJ_MUTATION },
};
export default GROUP_QUERY_MAP;

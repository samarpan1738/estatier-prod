import React, { useRef, useState } from "react";

// Components
import MoreFilters from "../MoreFilters/MoreFilters";
import FilterField from "../FilterField/FilterField";
import MobileFilter from "../MobileFilter/MobileFilter";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Button,
} from "@chakra-ui/react";

// Utils
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Data
import { filterData, filterState as state } from "./data";

// SCSS
import "./Filters.scss";
import { BiChevronDown, BiDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../features/search/searchSlice";

// TODO: Changing filters should dynamically change the query params in URL and send a new request

function Filters() {
    const filterRef = useRef(null);
    const [filterState, setFilterState] = useState(state);
    const matches = useMediaQuery("(max-width:576px)");
    const dispatch = useDispatch();
    function toggleOptions(e, optionsRef) {
        // console.log(e);
        if (filterRef.current) filterRef.current.classList.toggle("reveal-options");

        if (filterRef.current === optionsRef.current) {
            filterRef.current = null;
            return;
        }
        filterRef.current = optionsRef.current;
        filterRef.current.classList.toggle("reveal-options");
    }
    console.log(filterState);
    // const handleSelect = (op) => {
    //     console.log("select --------------->");
    //     setFilterState((fState) => {
    //         const copy = { ...fState };
    //         copy[op] = !copy[op];
    //         return copy;
    //     });
    // };
    // const handleNestedSelect = (parent, child) => {
    //     setFilterState((fState) => {
    //         const copy = { ...fState };
    //         copy[parent][child] = !copy[parent][child];
    //         return copy;
    //     });
    // };

    const handleSelect = (title, op) => {
        // console.log("OPtion selected", title, op);
        setFilterState((fState) => {
            const copy = { ...fState };
            copy[op] = !copy[op];
            return copy;
        });
    };
    const generateQueryParams = () => {
        let queryParams = "?";
        for (const x in filterState) {
            // x --> filterState[x]
            // console.log(`${x} --> ${filterState[x]}`);
            if (filterState[x].toString() === "[object Object]") {
                for (let y in filterState[x]) {
                    // y --> x[y]
                    // console.log("x[y] --> ", x[y]);
                    queryParams += `${y}=`;
                    filterState[x][y].forEach((yy, idx) => {
                        queryParams += `${yy}`;
                        if (idx != filterState[x][y].length - 1) queryParams += `,`;
                    });
                    queryParams += `&`;
                }
            } else {
                queryParams += `${x}=${filterState[x]},`;
            }
        }
        return queryParams;
    };
    const menuGroupChange = (val, key) => {
        console.log(`${key} --> ${val}`);
        // setFilterState((fState) => {
        //     let copy = { ...fState };
        //     copy[key] = val;
        //     return copy;
        // });
        dispatch(setFilters({ key, val }));
        window.history.pushState({}, "", generateQueryParams());
        // console.log(generateQueryParams());
    };
    const nestedMenuGroupChange = (val, subkey, key) => {
        console.log(`${key} --> ${val}`);
        // setFilterState((fState) => {
        //     let copy = { ...fState };
        //     copy[key][subkey] = val;
        //     return copy;
        // });
        dispatch(setFilters({ key, subkey, val }));
        window.history.pushState({}, "", generateQueryParams());
        // console.log(generateQueryParams());
    };
    const handleNestedSelect = (title, sub_title, op) => {
        // console.log("OPtion selected", title, sub_title, op);
        // window.history.pushState({}, "", `?${title}=${op}`);
    };
    return (
        <div className="filters">
            {matches ? (
                <MobileFilter />
            ) : (
                <>
                    {filterData.map(({ moreFilters, title, className, options }, idx) => {
                        const FilterComp = moreFilters ? MoreFilters : FilterField;
                        return (
                            // <FilterComp
                            //     className={className}
                            //     toggleOptions={toggleOptions}
                            //     title={title}
                            //     options={options}
                            //     filterState={filterState}
                            //     setFilterState={setFilterState}
                            // />
                            <Menu closeOnSelect={false} key={title + "_" + idx}>
                                <MenuButton marginX={3} marginY={2} as={Button} rightIcon={<BiChevronDown />}>
                                    <div className="filter_title">{title}</div>
                                    <div className="filter_value">{!moreFilters ? filterState[title] : ""}</div>
                                </MenuButton>
                                {!moreFilters && (
                                    <MenuList>
                                        <MenuOptionGroup
                                            defaultValue={options[0]}
                                            title={title}
                                            type="radio"
                                            onChange={(e) => menuGroupChange(e, title)}
                                        >
                                            {options.map((op) => (
                                                <MenuItemOption value={op}>{op}</MenuItemOption>
                                            ))}
                                        </MenuOptionGroup>
                                    </MenuList>
                                )}
                                {moreFilters && (
                                    <MenuList maxHeight="62vh" overflowY="auto">
                                        {options.map(({ title: sub_title, options }, idx_o) => (
                                            <>
                                                <MenuOptionGroup
                                                    title={sub_title}
                                                    type="checkbox"
                                                    key={`${sub_title}_${idx_o}`}
                                                    onChange={(e) => nestedMenuGroupChange(e, sub_title, title)}
                                                >
                                                    {options.map((op, idx_mio) => (
                                                        <MenuItemOption value={op} key={`${sub_title}_${idx_mio}`}>
                                                            {op}
                                                        </MenuItemOption>
                                                    ))}
                                                </MenuOptionGroup>
                                                <MenuDivider />
                                            </>
                                        ))}
                                    </MenuList>
                                )}
                            </Menu>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Filters;

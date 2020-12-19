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

function Filters() {
	const filterRef = useRef(null);
	const [filterState, setFilterState] = useState(state);
	const matches = useMediaQuery("(max-width:576px)");

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

	return (
		<div className="filters">
			{matches ? (
				<MobileFilter />
			) : (
				<>
					{filterData.map(({ moreFilters, title, className, options }) => {
						const FilterComp = moreFilters ? MoreFilters : FilterField;
						return (
							// <FilterComp
							// 	className={className}
							// 	toggleOptions={toggleOptions}
							// 	title={title}
							// 	options={options}
							// 	filterState={filterState}
							// 	setFilterState={setFilterState}
							// />
							<Menu closeOnSelect={false}>
								<MenuButton
									marginX={3}
									marginY={2}
									as={Button}
									rightIcon={<BiChevronDown />}
								>
									{title}
								</MenuButton>
								{!moreFilters && (
									<MenuList>
										<MenuOptionGroup
											defaultValue={options[0]}
											title={title}
											type="radio"
										>
											{options.map((op) => (
												<MenuItemOption value={op}>{op}</MenuItemOption>
											))}
										</MenuOptionGroup>
									</MenuList>
								)}
								{moreFilters && (
									<MenuList maxHeight="72vh" overflowY="auto">
										{options.map(({ title, options }) => (
											<>
												<MenuOptionGroup title={title} type="checkbox">
													{options.map((op) => (
														<MenuItemOption value={op}>{op}</MenuItemOption>
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

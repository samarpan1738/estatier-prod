import React from "react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import "./propTabs.css";
import PropDetails from "../PropDetails/PropDetails";
import AgentDetails from "../AgentDetails/AgentDetails";
import TagsWrap from "../TagsWrap/TagsWrap";
import InfoBlock from "../InfoBlock/InfoBlock";
import BedIcon from "../../../img/bed.svg";
import BathIcon from "../../../img/bath.svg";
import { FaHandshake, FaListUl } from "react-icons/all";
import { useMediaQuery } from "@material-ui/core";
function PropTabs({ propData }) {
	const { area_desc_room_config, area_desc_bath_cnt } = propData;
	const bedroomCnt = parseInt(area_desc_room_config);
	const bathCnt = parseInt(area_desc_bath_cnt);
	const data = [
		{
			title: "Rental Value",
			value: "₹ 35,000",
		},
		{
			title: "Booking Amount",
			value: "₹ 70,000",
		},
		{
			title: "Facilities",
			value:
				"Power Back Up, Lift, Reserved Parking, Air Conditioned, Visitor Parking, Cafeteria/Food Court, Conference Room",
		},
		{
			title: "Furnishing",
			value: "Furnished",
		},
		{
			title: "Address",
			value: "Ansal Plaza Vaishali, Sector 1 Vaishali, Ghaziabad, Delhi NCR ",
		},
		{
			title: "Age of Construction",
			value: "Less than 5 years",
		},
		{
			title: "Facing",
			value: "East",
		},
		{
			title: "Lifts",
			value: "4",
		},
		{
			title: "Landmarks",
			value: "Vaishali Metro station",
		},
	];
	const bathData = [];
	const bedData = [];
	for (let i = 1; i <= bedroomCnt; ++i) {
		bedData.push([
			{
				title: `Bedroom ${i} Area`,
				value: propData[`bhk${i}_cfg_size`],
			},
			{
				title: `Bedroom ${i} Flooring`,
				value: propData[`bhk${i}_cfg_flooring`],
			},
		]);
	}
	for (let i = 1; i <= bathCnt; ++i) {
		bathData.push([
			{
				title: `Bathroom ${i} Area`,
				value: propData[`bath${i}_cfg_size`],
			},
			{
				title: `Bathroom ${i} Flooring`,
				value: propData[`bath${i}_cfg_flooring`],
			},
		]);
	}
	const matches = useMediaQuery("(min-width:600px)");
	return (
		<Tabs variant="soft-rounded">
			<TabList backgroundColor="#F4F4F4" p="4" pl="4">
				<Tab>
					<FaListUl color="#9575cd" className="tab-icon" />
					{matches && "Overview"}
				</Tab>
				<Tab>
					<img src={BedIcon} alt="" className="tab-icon" />
					{matches && "Bedrooms"}
				</Tab>
				<Tab>
					<img src={BathIcon} alt="" className="tab-icon" />
					{matches && "Bathrooms"}
				</Tab>
				<Tab>
					<FaHandshake color="#9575cd" className="tab-icon" />
					{matches && "Agent Details"}
				</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<PropDetails src={"https://bit.ly/36fIMXv"} propData={propData} />
				</TabPanel>
				<TabPanel>
					<InfoBlock className="bedroom-cfg-wrap">
						<h3 className="block-heading">Bedrooms</h3>
						<div className="block-content">
							<p className="block-desc">
								{bedroomCnt} bedroom
								{bedroomCnt > 1 ? "s" : ""}
							</p>
							<div className="info-rows">
								{bedData.map((cols) => (
									<div>
										<div className="info-row">
											{cols.map((col) => (
												<div className="info-col">
													<div className="info-row-title">{col.title}</div>
													<div className="info-row-value">{col.value}</div>
												</div>
											))}
											<button className="view-images-btn">View images</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</InfoBlock>
				</TabPanel>

				{/* Bathrooms */}
				<TabPanel>
					<InfoBlock className="bedroom-cfg-wrap">
						<h3 className="block-heading">Bathrooms</h3>
						<div className="block-content">
							<p className="block-desc">{bathCnt} Bathrooms</p>
							<div className="info-rows">
								{bathData.map((cols) => (
									<div>
										<div className="info-row">
											{cols.map((col) => (
												<div className="info-col">
													<div className="info-row-title">{col.title}</div>
													<div className="info-row-value">{col.value}</div>
												</div>
											))}
											<button className="view-images-btn">View images</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</InfoBlock>
				</TabPanel>
				<TabPanel>
					<AgentDetails />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default PropTabs;

// TODO: Add acknowledgement group
// TODO: Add image group acc. to prev info (Dropdown)
// TODO: To escape schema validation, remove the ansType property from the question

export const groups = [
	{
		name: "User Type",
		questions: [
			{
				content: "Who are you?",
				ansType: "radio",
				key: "user_type",
				options: [
					{ displayText: "Owner" },
					{ displayText: "Agent" },
					{ displayText: "Builder" },
				],
			},
		],
	},
	{
		name: "Transaction Type",
		questions: [
			{
				content: "What are you planning?",
				ansType: "radio",
				key: "transaction_type",
				options: [
					{ displayText: "Rental" },
					{ displayText: "BuySell" },
					{ displayText: "Lease" },
					{ displayText: "Paying Guest", renderConditions: "$userType_oa" },
				],
			},
		],
	},
	{
		name: "Property Category",
		questions: [
			{
				content: "Select a category",
				key: "prop_cat",
				ansType: "radio",
				options: [
					{ displayText: "Residential", skipConditions: "$prop_cat_builder" },
					{
						displayText: "Residential Project",
						skipConditions: "$prop_cat_pg",
					},
					{ displayText: "Commercial", skipConditions: "$prop_cat_builder" },
					{
						displayText: "Commercial Project",
						renderConditions: "$ut_builder",
					},
					{ displayText: "Office Space", skipConditions: "$prop_cat_builder" },
					{ displayText: "Industrial", skipConditions: "$prop_cat_builder" },
					{ displayText: "Agricultural", skipConditions: "$prop_cat_builder" },
					{
						displayText: "PG",
						renderConditions: "$prop_cat_pg",
					},
				],
			},
		],
	},
	// TODO: Property Type
	// * Residential & Residential Project
	{
		name: "Property Type",
		renderConditions: "$resi_resiProj",
		questions: [
			{
				content: "What type of property your're looking for?",
				ansType: "radio",
				key: "prop_type_name",
				options: [
					{ displayText: "Bungalow" },
					{ displayText: "Villa" },
					{ displayText: "Independent House" },
					{ displayText: "Simplex" },
					{ displayText: "Duplex" },
					{ displayText: "Triplex" },
					{ displayText: "Row House" },
					{ displayText: "Town House" },
					{ displayText: "Semi Detached House" },
					{ displayText: "Apartment" },
					{ displayText: "Flat" },
					{ displayText: "Studio Apartment" },
					{ displayText: "Builder Floor" },
					{ displayText: "Penthouse" },
					{ displayText: "Residential Land", renderConditions: "$5" },
					// { displayText: "Residential Plot", renderConditions: "$5" },
					// {
					// 	displayText: "Residential Plot in a Project",
					// 	renderConditions: "$5",
					// },
					{ displayText: "Farm House", skipConditions: "$oa_resiProj" },
					{
						displayText: "River/Water Facing House",
						skipConditions: "$oa_resiProj",
					},
					{ displayText: "Hill-Side House", skipConditions: "$oa_resiProj" },
					{
						displayText: "Jungle Attached House",
						skipConditions: "$oa_resiProj",
					},
				],
			},
		],
	},
	// * Commercial and Commercial Project
	{
		name: "Property Type",
		renderConditions: "$commr_commrProj",
		questions: [
			{
				content: "What type of property your're looking for?",
				key: "prop_type_name",
				ansType: "radio",
				options: [
					{ displayText: "Shop (Multiple Shutters)" },
					{ displayText: "Shop for Brand Stores" },
					{ displayText: "Building for Institutions/ Banks" },
					{ displayText: "Floors in Building for Institutions/ Banks" },
					{ displayText: "Building for Hostels" },
					{ displayText: "Floors in Building for Hostels" },
					{ displayText: "Godown/ Storage" },
					{ displayText: "Cold Storage" },
					{
						displayText: "Commercial Land",
						renderConditions: "$comm_prop_type_buy_sell",
					},
				],
			},
		],
	},
	// * Office Space
	{
		name: "Property Type",
		renderConditions: "$officeSpace",
		questions: [
			{
				content: "What type of property your're looking for?",
				key: "prop_type_name",
				ansType: "radio",
				options: [
					{ displayText: "Office Space" },
					{
						displayText: "Office Space (Time-Share)",
						renderConditions: "$prop_type_os_rent",
					},
					{
						displayText: "Office Space (SEZ)",
						renderConditions: "$prop_type_os_rent",
					},
				],
			},
		],
	},
	// * Industrial
	{
		name: "Property Type",
		renderConditions: "$industrial",
		questions: [
			{
				content: "What type of property your're looking for?",
				key: "prop_type_name",
				ansType: "radio",
				options: [
					{ displayText: "Industrial Land" },
					{ displayText: "Factory Building" },
				],
			},
		],
	},
	// * Agricultural
	{
		name: "Property Type",
		renderConditions: "$agricultural",
		questions: [
			{
				content: "What type of property your're looking for?",
				key: "prop_type_name",
				ansType: "radio",
				options: [
					{ displayText: "Single Crop" },
					{ displayText: "Multiple Crops" },
					{ displayText: "Non Cultivated" },
					{ displayText: "Horticultural Land" },
					{ displayText: "Farm (House and Land)" },
				],
			},
		],
	},
	// TODO: Area Description
	// * not_agro_pg_indus
	{
		name: "Area Description",
		renderConditions: "$not_agro_pg_indus",
		questions: [
			{
				content: "Area Range",
				// renderConditions: "$prop_1",
				renderConditions: "$area_range",
				subgroups: ["area_range"],
				key: "area_desc_area_range",
			},
			{
				content: "Constructed Area Range",
				subgroups: ["ca_range"],
				renderConditions: "$ca_range",
				// renderConditions: "$prop_1",
				key: "area_desc_ca_range",
			},
			{
				content: "Space Type",
				key: "os_area_desc_space_type",
				renderConditions: "$office_space_share",
				ansType: "checkbox",
				options: [
					{ displayText: "Office Private" },
					{ displayText: "Dedicated Desk" },
					{ displayText: "Shared Desk" },
					{ displayText: "Covered space for Team" },
					{ displayText: "Conference Room " },
					{ displayText: "Event Space " },
				],
			},
			{
				content: "Super built-up Area",
				ansType: "number",
				renderConditions: "$sbupa_bua",
				unit: "sqft",
				key: "area_desc_sba",
			},
			{
				content: "Built-up Area",
				ansType: "number",
				renderConditions: "$sbupa_bua",
				unit: "sqft",
				key: "area_desc_bua",
			},
			{
				content: "Carpet Area",
				ansType: "number",
				renderConditions: "$carpet_area",
				unit: "sqft",
				key: "area_desc_carpet_area",
			},
			{
				content: "Area",
				ansType: "number",
				// renderConditions: "$prop_sqft_area",
				// renderConditions: "$oa_resi_hh",
				renderConditions: "$area_sqft",
				unit: "sqft",
				key: "area_desc_area",
			},
			{
				content: "Constructed Area",
				ansType: "number",
				renderConditions: "$const_area",
				unit: "sqft",
				key: "area_desc_ca",
			},
			{
				content: "Number of units",
				ansType: "number",
				renderConditions: "$no_of_units",
				key: "area_desc_unit_cnt",
			},
			{
				content: "Super built-up Area Min Max",
				renderConditions: "$sbua_bua_mm",
				subgroups: ["min_max_sba"],
				key: "area_desc_sbuamm",
				// ansType: "number",
			},
			{
				content: "Built-up Area Min Max",
				renderConditions: "$sbua_bua_mm",
				subgroups: ["min_max_ba"],
				key: "area_desc_buamm",
				// ansType: "number",
			},
			{
				content: "Carpet Area Min Max",
				renderConditions: "$ca_mm",
				subgroups: ["min_max_ca"],
				key: "area_desc_camm",
				// ansType: "number",
			},
			{
				content: "Floor Area",
				ansType: "number",
				renderConditions: "$floor_area",
				unit: "sqft",
				key: "area_desc_floorarea",
			},
			// * Floor Area range //
			{
				content: "Floor Area",
				renderConditions: "$floor_area_range",
				subgroups: ["min_max_fa"],
			},

			{
				content: "Room Configuration",
				ansType: "radio",
				renderConditions: "$room_bath_config",
				key: "area_desc_room_config",
				options: [
					{ displayText: "1 BHK", subgroups: ["bhk1_cfg"] },
					{ displayText: "1.5 BHK", subgroups: ["bhk1_cfg", "bhk2_cfg"] },
					{
						displayText: "2 BHK",
						subgroups: ["bhk1_cfg", "bhk2_cfg", "bhk3_cfg"],
					},
					{
						displayText: "2.5 BHK",
						subgroups: ["bhk1_cfg", "bhk2_cfg", "bhk3_cfg", "bhk4_cfg"],
					},
					{
						displayText: "3 BHK",
						subgroups: [
							"bhk1_cfg",
							"bhk2_cfg",
							"bhk3_cfg",
							"bhk4_cfg",
							"bhk5_cfg",
						],
					},
					{
						displayText: "3.5 BHK",
						subgroups: [
							"bhk1_cfg",
							"bhk2_cfg",
							"bhk3_cfg",
							"bhk4_cfg",
							"bhk5_cfg",
							"bhk6_cfg",
						],
					},
					{
						displayText: "4 BHK",
						subgroups: [
							"bhk1_cfg",
							"bhk2_cfg",
							"bhk3_cfg",
							"bhk4_cfg",
							"bhk5_cfg",
							"bhk6_cfg",
							"bhk7_cfg",
						],
					},
					{
						displayText: "4.5 BHK",
						subgroups: [
							"bhk1_cfg",
							"bhk2_cfg",
							"bhk3_cfg",
							"bhk4_cfg",
							"bhk5_cfg",
							"bhk6_cfg",
							"bhk7_cfg",
							"bhk8_cfg",
						],
					},
					{
						displayText: "5+ BHK",
						subgroups: [
							"bhk1_cfg",
							"bhk2_cfg",
							"bhk3_cfg",
							"bhk4_cfg",
							"bhk5_cfg",
							"bhk6_cfg",
							"bhk7_cfg",
							"bhk8_cfg",
							"bhk9_cfg",
						],
					},
				],
			},
			{
				content: "Number of Baths",
				ansType: "radio",
				renderConditions: "$room_bath_config",
				key: "area_desc_bath_cnt",
				options: [
					{ displayText: "1", subgroups: ["bath1_cfg"] },
					{
						displayText: "2",
						subgroups: ["bath1_cfg", "bath2_cfg"],
					},

					{
						displayText: "3",
						subgroups: ["bath1_cfg", "bath2_cfg", "bath3_cfg"],
					},

					{
						displayText: "4",
						subgroups: ["bath1_cfg", "bath2_cfg", "bath3_cfg", "bath4_cfg"],
					},

					{
						displayText: "5+",
						subgroups: [
							"bath1_cfg",
							"bath2_cfg",
							"bath3_cfg",
							"bath4_cfg",
							"bath5_cfg",
						],
					},
				],
			},
		],
	},
	// * agro_area
	{
		name: "Area Description",
		renderConditions: "$agro_area",
		questions: [
			{
				content: "Area",
				ansType: "number",
				unit: "acres",
				key: "agro_area_desc_area",
			},
			{
				content: "Road Facing",
				ansType: "radio",
				key: "agro_area_desc_road_facing",
				options: [
					{
						displayText: "Yes",
					},
					{
						displayText: "No",
					},
				],
			},
		],
	},
	// * pg_area
	{
		name: "Area Description",
		renderConditions: "$pg_area",
		questions: [
			{
				content: "Number of Rooms Available (single sharing)",
				ansType: "number",
				key: "pg_area_desc_ss_room_cnt",
			},
			{
				content: "Number of Rooms Available (twin/ more sharing)",
				ansType: "number",
				key: "pg_area_desc_ms_room_cnt",
			},
		],
	},
	// * industrial_area
	{
		name: "Area Description",
		renderConditions: "$industrial_area",
		questions: [
			{
				content: "Total area",
				ansType: "number",
				unit: "sqft",
				key: "industrial_area_desc_ta",
			},
			{
				content: "Covered/ Built area",
				ansType: "number",
				unit: "sqft",
				key: "industrial_area_desc_cba",
			},
		],
	},

	// TODO: Parking
	// #1
	// {
	// 	name: "Parking",
	// 	skipConditions: "$parking",
	// 	questions: [
	// 		{
	// 			content: "Parking Available",
	// 			ansType: "radio",
	// 			key: "parking_avail_status",
	// 			options: [{ displayText: "Yes" }, { displayText: "No" }],
	// 		},
	// 		{
	// 			content: "Number of parkings available",
	// 			ansType: "number",
	// 			renderConditions: "$parking_avail",
	// 			key: "parking_avail_cnt",
	// 		},
	// 	],
	// },
	// #2
	{
		name: "Parking",
		// skipConditions: "$parking",
		renderConditions: "$park_1",
		questions: [
			{
				content: "Number of allocated parkings",
				ansType: "number",
				key: "hh_parking_allocated_cnt",
			},
			{
				content: "Number of covered parkings",
				ansType: "number",
				key: "hh_parking_covered_cnt",
			},
			// {
			// 	content: "Visitors Parking Available",
			// 	ansType: "radio",
			// 	key: "hh_parking_vis_avail_status",
			// 	options: [{ displayText: "Yes" }, { displayText: "No" }],
			// },
		],
	},
	// #3
	{
		name: "Parking",
		renderConditions: "$parking_resi_proj",
		questions: [
			{
				content: "Number of allocated parkings per unit",
				ansType: "number",
				key: "resi_proj_parking_appu_cnt",
			},
			{
				content: "Number of covered parkings per unit",
				ansType: "number",
				key: "resi_proj_parking_cppu_cnt",
			},
			{
				content: "Additional Parkings Available",
				ansType: "radio",
				key: "resi_proj_parking_ap_avail_status",
				options: [{ displayText: "Yes" }, { displayText: "No" }],
			},
		],
	},
	// TODO: Property Age
	{
		skipConditions: "$prop_age_skip",
		name: "Property Age",
		questions: [
			{
				content: "Property Age",
				ansType: "radio",
				key: "prop_age",
				options: [
					{ displayText: "Under Construction" },
					{ displayText: "Ready to Move" },
					{ displayText: "1 to 3 Yrs" },
					{ displayText: "4 to 5 Yrs" },
					{ displayText: "6 to 9 Yrs" },
					{ displayText: "10/ 10+ Yrs" },
				],
			},
		],
	},
	// TODO: Property Description
	{
		name: "Property Description",
		questions: [
			{
				content: "Describe the property (min 50 chars / max 400 chars)",
				ansType: "textarea",
				key: "prop_desc",
			},
		],
	},
	// TODO: Price Details
	{
		name: "Price Details",
		questions: [
			{
				content: "Rate per sqft",
				ansType: "number",
				key: "price_details_rpsqft",
			},
			{
				content: "Negotiable",
				ansType: "radio",
				key: "price_details_negotiable",
				options: [{ displayText: "Yes" }, { displayText: "No" }],
			},
		],
	},
	// TODO: Agent Details
	{
		name: "Agent Details",
		renderConditions: "$user_agent",
		questions: [
			{
				content: "Agent Description",
				ansType: "text",
				key: "agent_details_desc",
			},
			{
				content: "Services included",
				ansType: "text",
				key: "agent_details_srv_incl",
			},
			{
				content: "Service Charge/ Rate",
				ansType: "number",
				key: "agent_details_srv_charge",
			},
		],
	},
	{
		name: "Agent Details",
		skipConditions: "$user_agent",
		questions: [
			{
				content: "Agent Allowed",
				ansType: "radio",
				key: "agent_details_allowed",
				options: [{ displayText: "Yes" }, { displayText: "No" }],
			},
		],
	},
	// TODO: Availability
	{
		name: "Availability",
		questions: [
			{
				content: "Available for",
				ansType: "checkbox",
				key: "availability_for",
				options: [
					{ displayText: "Family" },
					{ displayText: "Single Man" },
					{ displayText: "Single Woman" },
					{ displayText: "Students" },
					{ displayText: "Professionals" },
					{ displayText: "Any" },
				],
			},
			{
				content: "Agreement Type",
				ansType: "radio",
				key: "availability_ag_type",
				renderConditions: "$agreement_type",
				options: [{ displayText: "Company Agreement" }, { displayText: "Any" }],
			},
		],
	},
	// TODO: Mark Location
	{
		name: "Mark Location",
		questions: [
			{
				content: "State",
				ansType: "dropdown",
				key: "mark_loc_state",
				options: [
					{
						displayText: "Maharashtra",
					},
					{
						displayText: "Delhi",
					},
				],
			},
			{
				content: "City/ Town/ Village ",
				ansType: "text",
				key: "mark_loc_ctv",
			},
			{
				content: "Township/ Nagar/ Colony/ Locality",
				ansType: "text",
				key: "mark_loc_tncl",
			},
			{ content: "Landmark", ansType: "text", key: "mark_loc_landmark" },
			{ content: "Road Name", ansType: "text", key: "mark_loc_road_name" },
			{
				content: "Mark the property/ nearest landmark location on the map",
				ansType: "text",
				key: "mark_loc_map",
			},
		],
	},
	// TODO: Property Address
	{
		name: "Property Address",
		questions: [
			{
				content: "Plot/ House No",
				ansType: "text",
				key: "prop_addr_house_no",
			},
			{
				content: "Township/ Nagar/ Colony/ Locality",
				ansType: "text",
				key: "prop_addr_house_tncl",
			},
			{
				content: "Road Name",
				ansType: "text",
				key: "prop_addr_house_road_name",
			},
			{
				content: "Near (Lanmark Name)",
				ansType: "text",
				key: "prop_addr_landmark",
			},
			{
				content: "City/ Town/ Village",
				ansType: "text",
				key: "prop_addr_ctv",
			},
			{
				content: "State",
				ansType: "text",
				key: "prop_addr_state",
			},
			{
				content: "Pincode",
				ansType: "text",
				key: "prop_addr_pin",
			},
			{
				content: "Visible to others",
				ansType: "radio",
				key: "prop_addr_vis_other",
				options: [
					{
						displayText: "Yes",
					},
					{
						displayText: "No",
					},
				],
			},
		],
	},
	// TODO: Image Upload
	{
		name: "Image Upload",
		questions: [
			{
				content: "Upload Image",
				customOptions: "true",
			},
		],
	},
	// TODO: Contact Publisher
	{
		name: "Contact Publisher",
		questions: [
			{
				content: "Contact on",
				ansType: "checkbox",
				key: "contact_pub_contact_on",
				options: [
					{ displayText: "Email" },
					{ displayText: "Phone" },
					{ displayText: "Message" },
					{ displayText: "WhatsApp" },
					{ displayText: "Chat" },
					{ displayText: "Any" },
				],
			},
			{
				content: "Prefered Call Days",
				ansType: "checkbox",
				key: "contact_pub_contact_days",
				options: [
					{ displayText: "Monday" },
					{ displayText: "Tuesday" },
					{ displayText: "Wednesday" },
					{ displayText: "Thursday" },
					{ displayText: "Friday" },
					{ displayText: "Saturday" },
					{ displayText: "Sunday" },
					{ displayText: "Any" },
				],
			},
			{
				content: "Prefered Call Timings",
				subgroups: ["call_timings_range"],
				// key: "contact_pub_contact_on",
			},
		],
	},
];

export const conditions = {
	$oa_resiProj: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{
				prop_cat: "Residential Project",
			},
		],
	},
	$office_space_share: {
		$and: [
			{ prop_cat: "Office Space" },
			{
				$or: [
					{ prop_type_name: "Office Space (Time-Share)" },
					{ prop_type_name: "Office Space (SEZ)" },
				],
			},
		],
	},
	$not_agro_pg_indus: {
		$and: [
			{ prop_cat: { $ne: "Agricultural" } },
			{ prop_cat: { $ne: "PG" } },
			{ prop_cat: { $ne: "Industrial" } },
		],
	},
	$prop_type_os_rent: {
		transaction_type: "Rental",
	},
	$comm_prop_type_buy_sell: {
		$or: [
			{
				transaction_type: "BuySell",
			},
			{
				transaction_type: "Lease",
			},
		],
	},
	$prop_cat_pg: {
		transaction_type: "Paying Guest",
	},
	$ut_builder: { user_type: "Builder" },
	$prop_cat_builder: {
		$or: [{ user_type: "Builder" }, { $pre: "$prop_cat_pg" }],
	},

	// *============ Repeating Conditions
	$userType_oa: {
		$or: [{ user_type: "Owner" }, { user_type: "Agent" }],
	},
	$prop_cat_resi_resiProj: {
		$or: [{ prop_cat: "Residential" }, { prop_cat: "Residential Project" }],
	},
	$prop_type_home_apart: {
		$or: [
			{ prop_type_name: "Bungalow" },
			{ prop_type_name: "Villa" },
			{ prop_type_name: "Independent House" },
			{ prop_type_name: "Simplex" },
			{ prop_type_name: "Duplex" },
			{ prop_type_name: "Triplex" },
			{ prop_type_name: "Row House" },
			{ prop_type_name: "Town House" },
			{ prop_type_name: "Semi Detached House" },
			{ prop_type_name: "#Apartment" },
			{ prop_type_name: "Apartment" },
			{ prop_type_name: "Flat" },
			{ prop_type_name: "Studio Apartment" },
			{ prop_type_name: "Builder Floor" },
			{ prop_type_name: "Penthouse" },
			// {
			// 	prop_type_name: { $ne: "Residential Land" },
			// },
			// {
			// 	prop_type_name: { $ne: "Residential Plot" },
			// },
			// {
			// 	prop_type_name: { $ne: "Residential Plot in a Project" },
			// },
			// {
			// 	prop_type_name: { $ne: "Farm House" },
			// },
			// {
			// 	prop_type_name: { $ne: "River/Water Facing House" },
			// },
			// {
			// 	prop_type_name: { $ne: "Hill-Side House" },
			// },
			// {
			// 	prop_type_name: { $ne: "Jungle Attached House" },
			// },
			// {
			// 	prop_type_name: { $ne: "Industrial Land" },
			// },
			// {
			// 	prop_type_name: { $ne: "Factory Building" },
			// },
			// {
			// 	prop_type_name: { $ne: "Office Space (Time-Share)" },
			// },
			// {
			// 	prop_type_name: { $ne: "Office Space (SEZ)" },
			// },
		],
	},
	$holiday_homes: {
		$or: [
			{
				prop_type_name: "Farm House",
			},
			{
				prop_type_name: "River/Water Facing House",
			},
			{
				prop_type_name: "Hill-Side House",
			},
			{
				prop_type_name: "Jungle Attached House",
			},
		],
	},
	$transc_BSRL: {
		$or: [
			{ transaction_type: "Rental" },
			{ transaction_type: "BuySell" },
			{ transaction_type: "Lease" },
		],
	},
	$comm_shop: {
		$or: [
			{
				prop_type_name: "Shop (Single Shutter)",
			},
			{
				prop_type_name: "Shop (Multiple Shutters)",
			},
			{
				prop_type_name: "Shop for Brand Stores",
			},

			{
				prop_type_name: "Building for Institutions/ Banks",
			},
			{
				prop_type_name: "Floors in Building for Institutions/ Banks",
			},
			{
				prop_type_name: "Building for Hostels",
			},
			{
				prop_type_name: "Floors in Building for Hostels",
			},
			{
				prop_type_name: "Godown/ Storage",
			},
			{
				prop_type_name: "Cold Storage",
			},
		],
	},
	// *===========================

	$residential_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{
				$pre: "$prop_cat_resi_resiProj",
			},
		],
	},
	$3: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{ prop_cat: "Residential" },
		],
	},
	$5: {
		$or: [{ transaction_type: "BuySell" }, { transaction_type: "Lease" }],
	},
	$parking: {
		$or: [
			{
				prop_type_name: "Residential Land",
			},
			{
				prop_cat: "Commercial Project",
			},
			{
				prop_cat: "Commercial",
			},
			{
				prop_cat: "Agricultural",
			},
		],
	},
	$officeSpace: {
		prop_cat: "Office Space",
	},
	$resi_resiProj: {
		$pre: "$prop_cat_resi_resiProj",
	},
	$commr_commrProj: {
		$or: [{ prop_cat: "Commercial" }, { prop_cat: "Commercial Project" }],
	},
	$industrial: {
		prop_cat: "Industrial",
	},

	$agricultural: {
		prop_cat: "Agricultural",
	},
	$prop_age_op_skip: {
		prop_cat: "Residential",
	},
	$prop_age_skip: {
		$or: [
			{ prop_cat: "Agricultural" },
			{ prop_cat: "Industrial" },
			{
				prop_type_name: "Residential Land",
			},
			{
				prop_type_name: "Residential Plot",
			},
			{
				prop_type_name: "Residential Plot in a Project",
			},
			// { "prop_type_name": "Industrial Land" },
			// { "prop_type_name": "Factory Building" },
		],
	},
	$user_agent: {
		user_type: "Agent",
	},
	$parking_avail: {
		parking_avail_status: "Yes",
	},
	$parking_resi_proj: {
		$and: [
			{
				prop_cat: "Residential Project",
			},
			{
				// * Home/Apartment

				// $pre: "$prop_type_home_apart",
				$pre: "$prop_type_home_apart",
			},
		],
	},
	$park_1: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{ $pre: "$transc_BSRL" },

			{
				$pre: "$prop_cat_resi_resiProj",
			},
			{
				$or: [{ $pre: "$holiday_homes" }, { $pre: "$prop_type_home_apart" }],
			},
		],
		// $or: [
		// 	{
		// 		$and: [
		// 			{
		// 				$pre: "$userType_oa",
		// 			},
		// 			{ $pre: "$transc_BSRL" },
		// 			{
		// 				prop_cat: "Residential",
		// 			},
		// 			{
		// 				$or: [{ $pre: "$prop_type_home_apart" }],
		// 			},
		// 		],
		// 	},
		// 	{
		// 		$and: [
		// 			{
		// 				$pre: "$userType_oa",
		// 			},
		// 			{ $pre: "$transc_BSRL" },

		// 			{
		// 				$pre: "$prop_cat_resi_resiProj",
		// 			},
		// 			{
		// 				$or: [{ $pre: "$holiday_homes" }],
		// 			},
		// 		],
		// 	},
		// ],
	},
	$agro_area: {
		prop_cat: "Agricultural",
	},
	$not_agro_pg: {
		$and: [
			{ prop_cat: { $ne: "Agricultural" } },
			{ prop_cat: { $ne: "PG" } },
			{ prop_cat: { $ne: "Industrial" } },
			{ prop_cat: { $ne: "Office Space" } },
		],
	},
	$industrial_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{ prop_cat: "Industrial" },
		],
	},
	$ca_mm: {
		$and: [
			{ user_type: "Builder" },
			{ $pre: "$transc_BSRL" },
			{
				$or: [{ prop_cat: "Residential Project" }],
			},
			{
				$or: [
					{
						$pre: "$prop_type_home_apart",
					},
				],
			},
		],
	},
	$sbua_bua_mm: {
		$and: [
			{ user_type: "Builder" },
			{ $pre: "$transc_BSRL" },
			{
				$or: [
					{ prop_cat: "Residential Project" },
					{ prop_cat: "Commercial Project" },
				],
			},
			{
				$or: [
					{
						$pre: "$comm_shop",
					},
					{
						$pre: "$prop_type_home_apart",
					},
				],
			},
		],
	},
	$no_of_units: {
		$and: [
			{ user_type: "Builder" },
			{ $pre: "$transc_BSRL" },
			{
				$or: [
					{ prop_cat: "Residential Project" },
					{ prop_cat: "Commercial Project" },
				],
			},
			{
				$or: [
					{
						prop_type_name: "Commercial Land",
					},
					{
						prop_type_name: "Residential Land",
					},
					{ $pre: "$holiday_homes" },
				],
			},
		],
	},

	$floor_area: {
		$and: [
			{ $pre: "$userType_oa" },
			{ $pre: "$transc_BSRL" },
			{
				$or: [{ prop_cat: "Commercial" }, { prop_cat: "Office Space" }],
			},
			{
				$or: [{ prop_type_name: "Office Space" }, { $pre: "$comm_shop" }],
			},
		],
	},
	$floor_area_range: {
		$and: [
			{ prop_cat: "Commercial Project" },
			{ $pre: "$transc_BSRL" },

			{
				$or: [{ $pre: "$comm_shop" }],
			},
		],
	},
	$pg_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{ prop_cat: "PG" },
		],
	},
	$agreement_type: {
		$or: [{ transaction_type: "Rental" }, { transaction_type: "Lease" }],
	},
	$room_bath_config: {
		$and: [
			{ $pre: "$prop_cat_resi_resiProj" },
			{ $pre: "$prop_type_home_apart" },
		],
	},
	$bath_config: {
		$pre: "$prop_cat_resi_resiProj",
	},
	$prop_sqft_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{
				$or: [{}],
			},
		],
	},
	$office_space_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{ transaction_type: "Rental" },
			{ prop_cat: "Office Space" },
			{
				$or: [
					{
						prop_type_name: "Office Space (SEZ)",
					},
					{
						prop_type_name: "Office Space (Time-Share)",
					},
				],
			},
		],
	},
	$resi_home_apartment: {
		$and: [
			{
				$or: [
					{
						prop_cat: "Residential",
					},
				],
			},
			{
				// * Home/Apartment
				$and: [
					{
						prop_type_name: { $ne: "Residential Land" },
					},
					{
						prop_type_name: { $ne: "Residential Plot" },
					},
					{
						prop_type_name: { $ne: "Residential Plot in a Project" },
					},
					{
						prop_type_name: { $ne: "Farm House" },
					},
					{
						prop_type_name: { $ne: "River/Water Facing House" },
					},
					{
						prop_type_name: { $ne: "Hill-Side House" },
					},
					{
						prop_type_name: { $ne: "Jungle Attached House" },
					},
				],
			},
		],
	},
	$resi_proj_home_apartment: {
		$and: [
			{
				$or: [
					{
						prop_cat: "Residential Project",
					},
				],
			},
			{
				// * Home/Apartment
				$and: [
					{
						prop_type_name: { $ne: "Residential Land" },
					},
					{
						prop_type_name: { $ne: "Residential Plot" },
					},
					{
						prop_type_name: { $ne: "Residential Plot in a Project" },
					},
					{
						prop_type_name: { $ne: "Farm House" },
					},
					{
						prop_type_name: { $ne: "River/Water Facing House" },
					},
					{
						prop_type_name: { $ne: "Hill-Side House" },
					},
					{
						prop_type_name: { $ne: "Jungle Attached House" },
					},
				],
			},
		],
	},
	$template: {
		$and: [
			// * User Type
			{
				$or: [
					{ user_type: "Owner" },
					{ user_type: "Agent" },
					{ user_type: "Builder" },
				],
			},
			// * Transaction Type
			{
				$or: [
					{ transaction_type: "Rental" },
					{ transaction_type: "Buy Sell" },
					{ transaction_type: "Lease" },
					{ transaction_type: "Paying Guest" },
				],
			},
			// * Prop Categpry

			{
				$or: [
					{ prop_cat: "Residential" },
					{ prop_cat: "Residential Project" },
					{ prop_cat: "Commercial" },
					{ prop_cat: "Commercial Project" },
					{ prop_cat: "Office Space" },
					{ prop_cat: "Industrial" },
					{ prop_cat: "Agricultural" },
					{ prop_cat: "PG" },
				],
			},
			// * Prop Type Name
			{ $or: [{}, {}, {}] },
		],
	},

	$area_sqft: {
		$and: [
			// * User Type
			{
				$pre: "$userType_oa",
			},
			// * Transaction Type
			{
				$pre: "$transc_BSRL",
			},
			// * Prop Categpry

			{
				$or: [{ $pre: "$prop_cat_resi_resiProj" }, { prop_cat: "Commercial" }],
			},
			// * Prop Type Name
			{
				$or: [
					{
						prop_type_name: "Residential Land",
					},
					{
						prop_type_name: "Commercial Land",
					},
					{
						$pre: "$holiday_homes",
					},
				],
			},
		],
	},
	$oa_resi_resiProj_houseApart: {
		$and: [
			// * User Type
			{
				$pre: "$userType_oa",
			},
			// * Transaction Type
			{
				$or: [
					{ transaction_type: "Rental" },
					{ transaction_type: "Buy Sell" },
					{ transaction_type: "Lease" },
				],
			},
			// * Prop Categpry

			{
				$pre: "$prop_cat_resi_resiProj",
			},
			// * Prop Type Name
			{
				$and: [
					{
						prop_type_name: { $ne: "Residential Land" },
					},
					{
						prop_type_name: { $ne: "Residential Plot" },
					},
					{
						prop_type_name: { $ne: "Residential Plot in a Project" },
					},
					{
						prop_type_name: { $ne: "Farm House" },
					},
					{
						prop_type_name: { $ne: "River/Water Facing House" },
					},
					{
						prop_type_name: { $ne: "Hill-Side House" },
					},
					{
						prop_type_name: { $ne: "Jungle Attached House" },
					},
				],
			},
		],
	},

	// TODO: For SBUP and BUA
	$sbupa_bua: {
		$and: [
			// * User Type
			{
				$pre: "$userType_oa",
			},
			{
				$pre: "$transc_BSRL",
			},
			//  * Category
			{
				$or: [
					{
						prop_cat: "Residential",
					},
					{
						prop_cat: "Residential Project",
					},
					{
						prop_cat: "Commercial",
					},
					{
						prop_cat: "Office Space",
					},
				],
			},
			// * Type name --> Home/Apartment
			{
				$or: [
					{ $pre: "$prop_type_home_apart" },
					{ prop_type_name: "Office Space" },
					{ $pre: "$comm_shop" },
				],
			},
		],
	},

	//  TODO: For Carpet Area
	$carpet_area: {
		$and: [
			// * User Type
			{
				$pre: "$userType_oa",
			},
			//  * Category
			{
				$or: [
					{
						prop_cat: "Residential",
					},
					{
						prop_cat: "Residential Project",
					},
				],
			},
			// * Type name --> Home/Apartment
			{
				$pre: "$prop_type_home_apart",
			},
		],
	},
	$area_range: {
		$and: [
			{
				user_type: "Builder",
			},
			{
				$or: [
					{ transaction_type: "Rental" },
					{ transaction_type: "BuySell" },
					{ transaction_type: "Lease" },
				],
			},
			{
				$or: [
					{ prop_cat: "Residential Project" },
					{ prop_cat: "Commercial Project" },
				],
			},
			{
				$or: [
					{ prop_type_name: "Residential Land" },
					{ prop_type_name: "Commercial Land" },
					{ $pre: "$holiday_homes" },
				],
			},
		],
	},
	$ca_range: {
		$and: [
			{
				user_type: "Builder",
			},
			{
				$pre: "$transc_BSRL",
			},
			{
				$or: [{ prop_cat: "Residential Project" }],
			},
			{
				$or: [{ $pre: "$holiday_homes" }],
			},
		],
	},

	$const_area: {
		$and: [
			{
				$pre: "$userType_oa",
			},
			{
				$pre: "$transc_BSRL",
			},
			{
				prop_cat: "Residential",
			},
			{
				$pre: "$holiday_homes",
			},
		],
	},
};

export const subgroupsCollection = {
	// TODO: BHK
	bhk1_cfg: {
		name: "Bedroom 1 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk1_cfg_size",
			},

			{
				content: "Flooring",
				ansType: "dropdown",
				key: "bhk1_cfg_flooring",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk2_cfg: {
		name: "Bedroom 2 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk2_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk2_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk3_cfg: {
		name: "Bedroom 3 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk3_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk3_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk4_cfg: {
		name: "Bedroom 4 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk4_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk4_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk5_cfg: {
		name: "Bedroom 5 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk5_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk5_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk6_cfg: {
		name: "Bedroom 6 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk6_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk6_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk7_cfg: {
		name: "Bedroom 7 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk7_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk7_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk8_cfg: {
		name: "Bedroom 8 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk8_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk8_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bhk9_cfg: {
		name: "Bedroom 9 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bhk9_cfg_size",
			},

			{
				content: "Flooring",
				key: "bhk9_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	// TODO: Bath
	bath1_cfg: {
		name: "Bath 1 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bath1_cfg_size",
			},

			{
				content: "Flooring",
				key: "bath1_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bath2_cfg: {
		name: "Bath 2 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bath2_cfg_size",
			},

			{
				content: "Flooring",
				key: "bath2_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bath3_cfg: {
		name: "Bath 3 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bath3_cfg_size",
			},

			{
				content: "Flooring",
				key: "bath3_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bath4_cfg: {
		name: "Bath 4 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bath4_cfg_size",
			},

			{
				content: "Flooring",
				key: "bath4_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	bath5_cfg: {
		name: "Bath 5 Configuration",
		questions: [
			{
				unit: "sqft",
				content: "Size",
				ansType: "number",
				key: "bath5_cfg_size",
				unit: "sqft",
			},

			{
				content: "Flooring",
				key: "bath5_cfg_flooring",
				ansType: "dropdown",
				options: [
					{ displayText: "Wooden" },
					{ displayText: "Marble" },
					{ displayText: "Granite" },
				],
			},
		],
	},
	// TODO: Min max SBA,BA,CA
	min_max_sba: {
		questions: [
			{
				content: "Min",
				ansType: "number",
				key: "area_desc_sbuamm_min",
			},

			{
				content: "Max",
				ansType: "number",
				key: "area_desc_sbuamm_max",
			},
		],
	},
	min_max_ba: {
		questions: [
			{
				content: "Min",
				ansType: "number",
				key: "area_desc_bamm_min",
			},

			{
				content: "Max",
				ansType: "number",
				key: "area_desc_bamm_max",
			},
		],
	},
	min_max_fa: {
		questions: [
			{
				content: "Min",
				ansType: "number",
				key: "area_desc_fa_min",
			},

			{
				content: "Max",
				ansType: "number",
				key: "area_desc_fa_max",
			},
		],
	},
	min_max_ca: {
		questions: [
			{
				content: "Min",
				ansType: "number",
				key: "area_desc_camm_min",
			},

			{
				content: "Max",
				ansType: "number",
				key: "area_desc_camm_max",
			},
		],
	},
	// TODO: area_range
	area_range: {
		questions: [
			{
				content: "From",
				ansType: "number",
				key: "area_desc_area_from",
				unit: "sqft",
			},
			{
				content: "To",
				ansType: "number",
				key: "area_desc_area_to",
				unit: "sqft",
			},
		],
	},
	// TODO: constructed_area_range
	ca_range: {
		questions: [
			{
				content: "From",
				ansType: "number",
				key: "area_desc_ca_from",
				unit: "sqft",
			},
			{
				content: "To",
				ansType: "number",
				key: "area_desc_ca_to",
				unit: "sqft",
			},
		],
	},
	call_timings_range: {
		questions: [
			{
				content: "From",
				ansType: "time",
				key: "contact_pub_time_from",
			},
			{
				content: "To",
				ansType: "time",
				key: "contact_pub_time_to",
			},
		],
	},
};

export const stepperLabels = [
	"User Type",
	"Transaction Type",
	"Property Category",
	"Property Type",
	"Area Description",
	"Parking",
	"Property Age",
	"Property Description",
	"Price Details",
	"Agent Details",
	"Availability",
	"Mark Location",
	"Property Address",
	"Image Upload",
	"Contact Publisher",
	// "Finish",
];

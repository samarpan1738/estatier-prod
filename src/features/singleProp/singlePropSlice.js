import { createSlice } from "@reduxjs/toolkit";

export const singlePropSlice = createSlice({
	name: "singleProp",
	initialState: {
		user_group: "Owner",
		pro_trans_type: "Rental",
		pro_category: "Residential",
		pro_type: "Bungalow",
		os_area_desc_space_type: ["Office Private"],
		area_desc_sba: 100,
		area_desc_bua: 100,
		area_desc_carpet_area: 100,
		area_desc_area: "",
		area_desc_ca: "",
		area_desc_unit_cnt: "",
		area_desc_floorarea: "",
		area_desc_room_config: "1 BHK",
		area_desc_bath_cnt: "1",
		agro_area_desc_area: "",
		agro_area_desc_road_facing: "Yes",
		pg_area_desc_ss_room_cnt: "",
		pg_area_desc_ms_room_cnt: "",
		industrial_area_desc_ta: "",
		industrial_area_desc_cba: "",
		hh_parking_allocated_cnt: 2,
		hh_parking_covered_cnt: 2,
		resi_proj_parking_appu_cnt: "",
		resi_proj_parking_cppu_cnt: "",
		resi_proj_parking_ap_avail_status: "Yes",
		prop_age: "1 to 3 Yrs",
		prop_desc: "Very good locality at an affordable price.",
		price_details_rpsqft: 12,
		price_details_negotiable: "Yes",
		agent_details_desc: "",
		agent_details_srv_incl: "",
		agent_details_srv_charge: "",
		agent_details_allowed: "Yes",
		availability_for: ["Family"],
		availability_ag_type: "Company Agreement",
		mark_loc_state: "Maharashtra",
		mark_loc_ctv: "Mumbai",
		mark_loc_tncl: "Powai",
		mark_loc_landmark: "Powai Lake",
		mark_loc_road_name: "Powai Road",
		mark_loc_map: "Hiranandani",
		prop_addr_house_no: "139",
		prop_addr_house_tncl: "Powai",
		prop_addr_house_road_name: "Powai Road",
		prop_addr_landmark: "HiraNandani",
		prop_addr_ctv: "Mumbai",
		prop_addr_state: "Maharashtra",
		prop_addr_pin: "400076",
		prop_addr_vis_other: "Yes",
		contact_pub_contact_on: ["Email"],
		contact_pub_contact_days: ["Monday"],
		bhk1_cfg_size: 10,
		bhk1_cfg_flooring: "Wooden",
		bhk2_cfg_size: "",
		bhk2_cfg_flooring: "Wooden",
		bhk3_cfg_size: "",
		bhk3_cfg_flooring: "Wooden",
		bhk4_cfg_size: "",
		bhk4_cfg_flooring: "Wooden",
		bhk5_cfg_size: "",
		bhk5_cfg_flooring: "Wooden",
		bhk6_cfg_size: "",
		bhk6_cfg_flooring: "Wooden",
		bhk7_cfg_size: "",
		bhk7_cfg_flooring: "Wooden",
		bhk8_cfg_size: "",
		bhk8_cfg_flooring: "Wooden",
		bhk9_cfg_size: "",
		bhk9_cfg_flooring: "Wooden",
		bath1_cfg_size: 10,
		bath1_cfg_flooring: "Wooden",
		bath2_cfg_size: "",
		bath2_cfg_flooring: "Wooden",
		bath3_cfg_size: "",
		bath3_cfg_flooring: "Wooden",
		bath4_cfg_size: "",
		bath4_cfg_flooring: "Wooden",
		bath5_cfg_size: "",
		bath5_cfg_flooring: "Wooden",
		area_desc_sbuamm_min: "",
		area_desc_sbuamm_max: "",
		area_desc_bamm_min: "",
		area_desc_bamm_max: "",
		area_desc_fa_min: "",
		area_desc_fa_max: "",
		area_desc_camm_min: "",
		area_desc_camm_max: "",
		area_desc_area_from: "",
		area_desc_area_to: "",
		area_desc_ca_from: "",
		area_desc_ca_to: "",
		contact_pub_time_from: "01:57",
		contact_pub_time_to: "14:57",
		images: [
			{
				label: "BHK #1",
				file_id: "articulationPtBridge_dt6ypu",
				name: "articulationPtBridge",
			},
			{
				label: "BHK #1",
				file_id: "articulationPtBridge_dt6ypu",
				name: "articulationPtBridge",
			},
			{
				label: "BHK #1",
				file_id: "articulationPtBridge_dt6ypu",
				name: "articulationPtBridge",
			},
			{
				label: "BHK #1",
				file_id: "articulationPtBridge_dt6ypu",
				name: "articulationPtBridge",
			},
		],
		articulationPtBridge_dt6ypu: "BHK #4",
	},
	reducers: {
		setProperty: (state, action) => {
			state = action.payload;
			return state;
		},
	},
});
// * Actions
export const { setProperty } = singlePropSlice.actions;

// * Selectors

export const selectProperty = (state) => state.singleProp;

export default singlePropSlice.reducer;

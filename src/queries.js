import { gql } from "graphql-request";

// Post Property
export const CREATE_PROP_POST_MUTATION = gql`
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
export const PostPropAreaGroupA_MUTATION = gql`
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
export const PostPropParkingGroupB_MUTATION = gql`
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
		}
	}
`;
export const PostPropPropertyAgeGroupC_MUTATION = gql`
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
		}
	}
`;
export const PostPropDescriptionGroupD_MUTATION = gql`
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
		}
	}
`;
export const PostPropPricingGroupE_MUTATION = gql`
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
		}
	}
`;
export const PostPropAgentGroupF_MUTATION = gql`
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
		}
	}
`;
export const PostPropAvailableForGroupG_MUTATION = gql`
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
		}
	}
`;
export const PostPropLocationGroupH_MUTATION = gql`
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
		}
	}
`;
export const PostPropAddressGroupI_MUTATION = gql`
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
		}
	}
`;
export const PostPropPropertImageGroupJ_MUTATION = gql`
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
		query: CREATE_PROP_POST_MUTATION,
		// fields: [
		// 	"pro_post_user",
		// 	"user_group",
		// 	"pro_trans_type",
		// 	"pro_category",
		// 	"pro_type",
		// 	"pro_status",
		// 	"property_post_date",
		// ],
	},
	// * For all Area Description questions
	"Area Description": {
		query: PostPropAreaGroupA_MUTATION,
		// fields: [
		// 	"user_id",
		// 	"property",
		// 	"parent_question",
		// 	"level",
		// 	"question",
		// 	"answer",
		// 	"units",
		// 	"brisk_grid",
		// 	"question_input_type",
		// 	"date",
		// ],
	},
	Parking: {
		query: PostPropParkingGroupB_MUTATION,
	},
	"Property Age": { query: PostPropPropertyAgeGroupC_MUTATION },
	"Property Description": { query: PostPropDescriptionGroupD_MUTATION },
	"Price Details": { query: PostPropPricingGroupE_MUTATION },
	"Agent Details": { query: PostPropAgentGroupF_MUTATION },
	Availability: { query: PostPropAvailableForGroupG_MUTATION },
	"Mark Location": { query: PostPropLocationGroupH_MUTATION },
	"Property Address": { query: PostPropAddressGroupI_MUTATION },
	// "Image Upload": { query: PostPropPropertImageGroupJ_MUTATION },
};
export default GROUP_QUERY_MAP;

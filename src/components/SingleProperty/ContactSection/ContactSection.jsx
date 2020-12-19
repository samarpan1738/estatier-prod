import React, { useState } from "react";
import "./contactSection.css";
import { Button } from "@chakra-ui/react";
import { MdCall, MdMessage } from "react-icons/all";
function ContactSection() {
	const [liked, setLiked] = useState(false);
	const toggleLike = () => {
		setLiked((curr) => !curr);
	};
	return (
		<div className="contact-section">
			<Button
				className="contact-btn call"
				color="white"
				onClick={() => window.alert("ds")}
			>
				<MdCall className="icon" />
				Contact owner
			</Button>
			<Button className="contact-btn msg" onClick={() => window.alert("ds")}>
				<MdMessage className="icon" />
				Message Owner
			</Button>
			{/* <Button variantColor="#553c9a" className="contact-btn">
				<BsBookHalf className="icon" />
				Book Site Visit
			</Button> */}
			{/* <button className="contact-owner">Contact owner</button> */}
			{/* <button className="book-site-visit">Book Site Visit</button> */}
			{/* <div className="like-icon">
				{liked ? (
					<AiFillHeart size="1.75em" color="#553C9A" onClick={toggleLike} />
				) : (
					<AiOutlineHeart size="1.75em" color="#553C9A" onClick={toggleLike} />
				)}
			</div> */}
		</div>
	);
}

export default ContactSection;

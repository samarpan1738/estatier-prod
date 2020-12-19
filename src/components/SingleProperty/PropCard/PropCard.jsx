import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "./propCard.module.css";
import { AiOutlineCheck } from "react-icons/ai";
function PropCard() {
	return (
		<div className={styles.prop_card}>
			<div className={styles.prop_card_wrapper}>
				<div className={styles.prop_card_img}>
					<img src="https://bit.ly/36hdbER" alt="" />
				</div>
				<div className={styles.prop_card_content}>
					<p className={styles.card_title}>
						<span>Office Space</span>
					</p>
					<p className={styles.card_price}>
						<span>₹20,000</span>
					</p>
					<p className={styles.card_area}>550 sqft</p>
					<p className={styles.locality}>
						<span className={styles.locality_label}>Locality: </span>
						<span className={styles.locality_value}>Vaishali</span>
					</p>
					<p className={styles.card_usp}>
						<AiOutlineCheck className={styles.check_icon} color="#60C940" />
						<div>USP</div>
					</p>
					<p className={styles.card_agent}>
						<span className={styles.agent_label}>Agent:</span>
						<span className={styles.agent_name}>Lalit Jatav</span>
					</p>
					<p className={styles.card_postedOn}>
						Posted: <span>Sep 12,'20</span>
					</p>
					<Button className={styles.card_btn}>Book Site Visit</Button>
				</div>
			</div>
		</div>
	);
}

export default PropCard;

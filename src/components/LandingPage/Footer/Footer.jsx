import React from "react";
import Section from "../Section/Section";
import "./footer.css";
import FooterLinkList from "./FooterLinkList";
export default function Footer() {
	return (
		<Section className="footer-container">
			<div id="left-footer">
				<div id="footer-body">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut expedita vitae numquam, aut at
					praesentium eligendi, ipsam vel temporibus autem, commodi excepturi doloribus? Excepturi maiores labore
					officiis odio facilis incidunt libero recusandae! Alias sed odio placeat velit non sequi accusamus
					nesciunt eligendi similique dolorum, quos atque, at ea nam!
				</div>
			</div>
			<div id="right-footer">
				<FooterLinkList
					title={"Myestate"}
					links={[
						"About us",
						"Behind our new look",
						"Our Brand Book",
						"Careers",
						"Trends & info",
						"Blog",
						"Contact us",
					]}
				/>
				<FooterLinkList
					title={"For owners & tenants"}
					links={[
						"List your property",
						"Rent predictor",
						"Refer an owner",
						"Refer a tenant",
						"Online Rent Agreement Generator",
						"Coupon codes",
					]}
				/>
				<FooterLinkList title={"More information"} links={["Help center", "Privacy policy", "Terms of Use"]} />
			</div>
		</Section>
	);
}

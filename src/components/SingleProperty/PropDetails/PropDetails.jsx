import React, { useState } from "react";

// Components
import Lightbox from "react-image-lightbox";
import ContactSection from "../ContactSection/ContactSection";
import InfoBlock from "../InfoBlock/InfoBlock";
import PropInfoCol from "../PropInfoCol/PropInfoCol";

// Styles
import "react-image-lightbox/style.css";
import "./propDetails.css";
import TagsWrap from "../TagsWrap/TagsWrap";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function PropDetails({ src, propData }) {
  const {
    pro_trans_type,
    images: post_images,
    prop_desc,
    area_desc_sba,
    price_details_rpsqft,
    prop_addr_house_no,
    prop_addr_house_tncl,
    prop_addr_house_road_name,
    prop_addr_landmark,
    prop_addr_ctv,
    prop_addr_state,
    prop_addr_pin,
    prop_age,
  } = propData;
  console.log(post_images);
  const [toggleLightbox, setToggleLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    "//placekitten.com/1500/500",
    "//placekitten.com/4000/3000",
    "//placekitten.com/800/1200",
    "//placekitten.com/1500/1500",
  ];
  const data = [
    {
      title: "Rental Value",
      value: "₹ " + parseInt(area_desc_sba) * parseInt(price_details_rpsqft),
    },
    // {
    // 	title: "Booking Amount",
    // 	value: "₹ 70,000",
    // },
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
      value: "Ansal Plaza Vaishali, Sector 1 Vaishali, Ghaziabad, Delhi NCR",
      value: `House No ${prop_addr_house_no}, ${prop_addr_house_road_name}, ${prop_addr_house_tncl}, ${prop_addr_ctv}, ${prop_addr_state} - 	${prop_addr_pin}`,
    },
    {
      title: "Age of Construction",
      value: prop_age,
    },
    {
      title: "Road Facing",
      value: "Yes",
    },
    {
      title: "Landmarks",
      value: prop_addr_landmark,
    },
  ];
  const propInfo = [
    {
      key: "area_desc_bua",
      title: "Built Up area",

      unit: "sqft",
    },
    {
      key: "area_desc_sba",
      title: "Super Built Up area",

      unit: "sqft",
    },
    {
      key: "",
      title: "Super Built Up area",
      value: "770 - 880 sqft",
      unit: "sqft",
    },
    {
      key: "area_desc_carpet_area",
      title: "Carpet area",
      unit: "sqft",
    },
    {
      key: "",
      title: "Carpet area",
      value: "770 - 880 sqft",
      unit: "sqft",
    },
    { key: "", title: "Area", value: "500 sqft", unit: "sqft" },
    { key: "", title: "Area", value: "500 acres", unit: "sqft" },
    {
      key: "area_desc_area_range",
      title: "Area",
      value: "500 - 600 sqft",
      unit: "sqft",
    },
    { key: "", title: "Constructed Area", value: "500 sqft", unit: "sqft" },
    {
      key: "",
      title: "Constructed Area",
      value: "770 - 880 sqft",
      unit: "sqft",
    },
    {
      key: "area_desc_floorarea",
      title: "Floor Area",
      unit: "sqft",
    },
    { key: "", title: "Floor Area", value: "770 - 880 sqft", unit: "sqft" },
    {
      key: "industrial_area_desc_ta",
      title: "Total Area",
      unit: "sqft",
    },
    { key: "", title: "Road facing", value: "Yes" },
    {
      key: "pg_area_desc_ss_room_cnt",
      title: "Single Sharing Rooms",
    },
    {
      key: "pg_area_desc_ms_room_cnt",
      title: "Twin/more Sharing Rooms",
    },
    { key: "area_desc_room_config", title: "BHK" },
    { key: "area_desc_bath_cnt", title: "Bath" },
    { key: "area_desc_unit_cnt", title: "Number of units" },
    { key: "hh_parking_covered_cnt", title: "Covered Parking" },
    { key: "hh_parking_allocated_cnt", title: "Allocated Parking" },
    { key: "prop_age", title: "Age" },
  ];

  return (
    <>
      {toggleLightbox && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setToggleLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex) => (photoIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex) => (photoIndex + 1) % images.length)
          }
        />
      )}
      <div className="prop-overview">
        <div className="prop-overview-left">
          <div
            className="prop-image-block"
            onClick={() => setToggleLightbox((curr) => !curr)}
          >
            <img
              src={
                post_images.length > 0
                  ? "https://res.cloudinary.com/dtfgdh3jd/image/upload/v1608356885/" +
                    post_images[0].file_id
                  : "https://via.placeholder.com/500x400"
              }
              alt="Property Image"
            />
            {post_images.length > 0 && (
              <p className="pic-count">
                {post_images.length} photo{post_images.length > 1 ? "s" : ""}
              </p>
            )}
            <p className="transaction-type">For {pro_trans_type}</p>
          </div>
          {post_images.length > 0 && (
            <div className="thumbnails-wrap">
              {post_images.slice(1).map(({ file_id }, idx) => {
                return (
                  <div className="thumbnail">
                    <img
                      src={
                        "https://res.cloudinary.com/dtfgdh3jd/image/upload/v1608356885/" +
                        file_id
                      }
                    />

                    {idx === post_images.length - 2 && (
                      <div
                        className="see-more-btn"
                        onClick={() => setToggleLightbox((curr) => !curr)}
                      >
                        <AiOutlineAppstoreAdd />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="prop-overview-right">
          <div className="prop-info-block">
            {propInfo.map(
              ({ key, title, value, unit }) =>
                propData[key] && (
                  <PropInfoCol
                    key={key}
                    title={title}
                    value={propData[key] + " " + (unit ? unit : "")}
                  />
                )
            )}
          </div>
          <ContactSection />
        </div>
        <TagsWrap />
      </div>

      <InfoBlock className="prop-desc" heading="Description">
        <h3 className="block-heading">Description</h3>
        <div className="block-content">
          <p className="block-desc">{prop_desc}</p>
          <div className="info-rows">
            {data.map(({ value, title }) => (
              <div>
                <div className="info-row">
                  <div className="info-row-title">{title}</div>
                  <div className="info-row-value">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </InfoBlock>
    </>
  );
}

export default PropDetails;

import React from "react";
import Carousel from "../../General/Carousel/Carousel";
import BannerPostItem from "./BannerPostItem";
import HomeIcon from "@material-ui/icons/Home";
import BusinessIcon from "@material-ui/icons/Business";
import { ReactComponent as PlotIcon } from "../../img/land-parcels.svg";
import { ReactComponent as ProjectIcon } from "../../img/settings.svg";

export default function BannerPost({ openEnquiryModal }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <Carousel className="banner-post-container" settings={settings}>
            <BannerPostItem Icon={HomeIcon} type="Residential" openEnquiryModal={openEnquiryModal} />
            <BannerPostItem Icon={BusinessIcon} type="Commercial" openEnquiryModal={openEnquiryModal} />
            <BannerPostItem Icon={PlotIcon} type="Plot" openEnquiryModal={openEnquiryModal} />
            <BannerPostItem Icon={ProjectIcon} type="Project" openEnquiryModal={openEnquiryModal} />
        </Carousel>
    );
}

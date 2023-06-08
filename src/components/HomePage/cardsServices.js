import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

const CardsServices = () => {
    return (
        <section className="flex-center flex-col md:flex-row">
            <StaticImage
                style={{ margin: "20px 12px", borderRadius: "5px" }}
                quality={100}
                loading="eager"
                placeholder="none"
                alt="dorabianie kluczy"
                src="../../assets/11.jpg"
            />
            <StaticImage
                style={{ margin: "20px 12px", borderRadius: "5px" }}
                quality={100}
                loading="eager"
                placeholder="none"
                alt="dorabianie kluczy"
                src="../../assets/12.jpg"
            />
            <StaticImage
                style={{ margin: "20px 12px", borderRadius: "5px" }}
                quality={100}
                loading="eager"
                placeholder="none"
                alt="dorabianie kluczy"
                src="../../assets/13.jpg"
            />
        </section>
    );
};

export default CardsServices;

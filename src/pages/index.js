import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

import { CardsServices } from "../components/HomePage/index";

const Home = () => {
    return (
        <div className="mx-auto w-full text-center bg-fixed">
            <StaticImage
                style={{ margin: "10px 20px" }}
                draggable="false"
                quality={100}
                loading="eager"
                placeholder="none"
                alt="logo kluczezamkiklamki"
                src="../assets/heroLogo.jpg"
            />

            <Layout>
                <CardsServices />
            </Layout>
        </div>
    );
};

export const Head = () => (
    <Seo
        title="Dorabianie Kluczy"
        description="Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach"
    />
);

export default Home;

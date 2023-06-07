import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import Header from "../components/nav";
// import {
//     HeroSection,
//     CardsSection,
//     EtapsSection,
//     HappySection,
//     VideoSection,
//     ImgSection,
//     OpinieSection,
// } from "../components/HomePage/index";

const Home = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Layout>
            <StaticImage
                draggable="false"
                quality={100}
                alt="logo kluczezamkiklamki"
                src="../assets/heroLogo.jpg"
            />
            <div className="py-2 bg-[#A50A0A]">
                <Header
                    siteTitle={data.site.siteMetadata?.title || `Dorabianie Kluczy`}
                />
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Dorabianie Kluczy"
        description="Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach"
    />
);

export default Home;

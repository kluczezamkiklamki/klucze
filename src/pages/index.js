import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

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
    return (
        <Layout>
           <h1>Hi</h1>
        </Layout>
    );
};

export const Head = () => <Seo title="" description="Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach" />;

export default Home;

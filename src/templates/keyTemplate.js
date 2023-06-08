import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import "../styles/template.css";

const CardTemplate = ({
    pageContext: { slug },
    data: { datoCmsKey, allDatoCmsKey },
}) => {
    return (
        <Layout>
            <div className="flex flex-col lg:flex-row overflow-hidden w-full z-10">
                <section class="container px-3 mx-auto lg:w-4/5">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-start lg:text-left">
                            <div class="flex flex-col items-center md:items-center">
                                <div className="md:px-12">
                                    <GatsbyImage
                                        image={getImage(datoCmsKey.img)}
                                        alt={datoCmsKey.imgtitle}
                                        title={datoCmsKey.imgtitle}
                                    />
                                    <div className="flex items-start justify-end mx-3 space-x-4 my-4"></div>
                                </div>
                                <div class="pl-4 px-12">
                                    <div class="block mt-1 -tracking-wide rounded-lg py-3 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold capitalize pb-2 mb-5">
                                            {datoCmsKey.title}
                                        </h1>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <div
                                                id="descriptionHtml"
                                                dangerouslySetInnerHTML={{
                                                    __html: datoCmsKey.desc,
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="mt-2 my-12 mx-auto lg:w-1/5">
                    <div className="grid grid-cols-1 gap-8 sm:gap-12">
                        {allDatoCmsKey.edges.map(({ node }) => (
                            <Link
                                to={`/` + node.slug}
                                className="flex mx-6 flex-row items-center px-3 justify-start m-0 gap-4 lg:gap-6 text-start"
                            >
                                <div className="group w-32 h-32 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(node.img)}
                                        alt={node.imgtitle}
                                        title={node.imgtitle}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="hoverLink active:text-gray-900 capitalize transition duration-100">
                                        {node.imgtitle}
                                    </h2>
                                    <p className="text-[12px] bg-emerald-600 w-20 text-center text-white px-2 rounded-xl">
                                        Zobacz
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsKey } }) => (
    <Seo title={datoCmsKey.title} />
);

export default CardTemplate;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsKey(slug: { eq: $slug }) {
            desc
            title
            imgtitle
            slug
            img {
                gatsbyImageData
            }
        }
        allDatoCmsKey {
            edges {
                node {
                    imgtitle
                    slug
                    img {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

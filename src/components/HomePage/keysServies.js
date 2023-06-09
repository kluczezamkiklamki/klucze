import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const KeysServices = () => {
    const data = useStaticQuery(
        graphql`
            {
                allDatoCmsKey(sort: { position: ASC }) {
                    edges {
                        node {
                            slug
                            img {
                                gatsbyImageData(
                                    placeholder: NONE
                                    width: 300
                                    height: 300
                                )
                            }
                            id
                            imgtitle
                        }
                    }
                }
            }
        `
    );
    return (
        <section className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {data.allDatoCmsKey.edges.map(({ node }) => (
                    <Link
                        key={node.id}
                        to={`/` + node.slug}
                        aria-label="KLUCZE PŁASKIE"
                        title="KLUCZE PŁASKIE"
                        className="md:hover:scale-105 md:duration-150 md:transition-all"
                    >
                        <h2 className="text-lg font-semibold">
                            {node.imgtitle}
                        </h2>
                        <GatsbyImage
                            image={getImage(node.img)}
                            alt={node.imgtitle}
                            title={node.imgtitle}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default KeysServices;

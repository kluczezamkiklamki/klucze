import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";

const Cennik = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsKey {
                    edges {
                        node {
                            imgtitle
                            price
                            slug
                        }
                    }
                }
            }
        `
    );
    return (
        <Layout>
            <h1 className="text-2xl font-bold px-3 py-6">
                Cennik dorabiania kluczy - Ostrów Wielkopolski
            </h1>

            {data.allDatoCmsKey.edges.map(({ node }) => (
                <div className="flex-between my-1 py-2 font-bold bg-gray-100 px-4 rounded-sm max-w-2xl mx-auto">
                    <div className="flex-center">
                    <p className="mr-2">{node.imgtitle}</p>
                    <Link className="text-sm text-red-700" to={`/` + node.slug}>Zobacz</Link>
                    </div>
                    <p>{node.price}</p>
                </div>
            ))}
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Cennik dorabiania kluczy - Ostrów Wielkopolski"
        description="Zobacz najlepsze oferty spływów kajakowych na rzece Tanew. Sprawdź dostępne trasy, terminy i ceny. Zaplanuj aktywny wypoczynek na wodzie z rodziną i przyjaciółmi"
    />
);

export default Cennik;

import React from "react";
import Footer from "./footer";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./nav";

const Layout = ({ children }) => {
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
        <>
            <Header
                siteTitle={data.site.siteMetadata?.title || `Dorabianie Kluczy`}
            />
            <main className="w-full overflow-hidden main text-center">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;

import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Header from "./nav";
import Footer from "./footer";

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
            
            <main className="w-full overflow-hidden main text-center">{children}</main>
            <div className='h-[200vh]' />
            <Footer />
        </>
    );
};

export default Layout;

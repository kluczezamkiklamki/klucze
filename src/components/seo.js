import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, title, children }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;

    return (
        <>
            <title>{defaultTitle ? `${title} ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title || `Dorabianie Kluczy`} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.author || `Dorabianie Kluczy`}
            />
            <meta name="twitter:title" content={title || `Dorabianie Kluczy`} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="google-site-verification"
                content="CW8izdgT6-5xILuRn-PGmFRAFTtKLsS63ZQgqjE0jyY"
            />
            {children}
        </>
    );
}

export default Seo;

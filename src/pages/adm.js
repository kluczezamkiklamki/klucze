import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

const Admin = () => {
    return (
        <Layout>
            <div className="py-24">
                <h1 className="text-2xl font-bold px-3 py-6">
                    Panel Administracyjny
                </h1>
                <Link
                    to="https://kluczeklamkizamki.admin.datocms.com/editor"
                    aria-label="kontakt"
                    title="kontakt"
                    className="bg-green-700 md:hover:bg-green-800 text-white font-medium px-3 py-1 text-sm rounded-md"
                >
                    Panel CMS
                </Link>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="" />;

export default Admin;

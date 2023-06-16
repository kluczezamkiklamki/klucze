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
                <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 mt-12">
                    <Link
                        to="https://kluczeklamkizamki.admin.datocms.com/editor"
                        aria-label="kontakt"
                        title="kontakt"
                        className="bg-green-700 w-52 md:w-max md:hover:bg-green-800 text-white font-medium px-3 md:mr-3 py-1 text-sm rounded-md"
                    >
                        Panel CMS
                    </Link>
                    <Link
                        to="https://n125.domenomania.pl:2083/cpsess0822705061/frontend/jupiter/index.html"
                        aria-label="kontakt"
                        title="kontakt"
                        className="bg-green-700 w-52 md:w-max md:hover:bg-green-800 text-white font-medium px-3 md:mr-3 py-1 text-sm rounded-md"
                    >
                        cPanel
                    </Link>
                    <Link
                        to="https://n125.domenomania.pl:2096/cpsess4300477971/3rdparty/roundcube/index.php?_task=mail&_mbox=INBOX"
                        aria-label="kontakt"
                        title="kontakt"
                        className="bg-green-700 w-52 md:w-max md:hover:bg-green-800 text-white font-medium px-3 py-1 text-sm rounded-md"
                    >
                        Email
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="" />;

export default Admin;

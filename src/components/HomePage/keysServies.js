import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const KeysServices = () => {
    return (
        <section className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Link
                    to="/"
                    aria-label="KLUCZE PŁASKIE"
                    title="KLUCZE PŁASKIE"
                    className="md:hover:scale-105 md:duration-150 md:transition-all"
                >
                    <h2 className="font-semibold text-lg">KLUCZE PŁASKIE</h2>
                    <StaticImage
                        style={{ margin: "20px 12px", borderRadius: "5px" }}
                        quality={100}
                        loading="eager"
                        placeholder="none"
                        alt="dorabianie kluczy"
                        src="../../assets/keys/1.jpg"
                    />
                </Link>
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/keys/2.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/keys/3.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/keys/4.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/keys/5.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/keys/6.jpg"
                />
            </div>
        </section>
    );
};

export default KeysServices;

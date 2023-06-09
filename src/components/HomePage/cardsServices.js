import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const CardsServices = () => {
    return (
        <section className="pt-6">
            <h1 className="text-2xl font-bold px-3">Dorabianie Kluczy - Ostrów Wielkopolski</h1>
            <div className="flex-center flex-col md:flex-row">
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    height={250}
                    width={330}
                    placeholder="none"
                    title="Dorabianie Kluczy"
                    alt="Dorabianie Kluczy"
                    src="../../assets/Dorabianie.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    height={250}
                    width={330}
                    placeholder="none"
                    title="Dorabianie Kluczy"
                    alt="dorabianie kluczy"
                    src="../../assets/Kluczy.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    height={250}
                    width={330}
                    placeholder="none"
                    title="Dorabianie Kluczy Ostrów Wielkopolski"
                    alt="dorabianie kluczy"
                    src="../../assets/dorabianie-kluczy.jpg"
                />
            </div>
        </section>
    );
};

export default CardsServices;

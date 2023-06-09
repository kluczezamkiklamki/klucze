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
                    alt="dorabianie kluczy"
                    src="../../assets/11.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    height={250}
                    width={330}
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/12.jpg"
                />
                <StaticImage
                    style={{ margin: "20px 12px", borderRadius: "5px" }}
                    quality={100}
                    loading="eager"
                    height={250}
                    width={330}
                    placeholder="none"
                    alt="dorabianie kluczy"
                    src="../../assets/13.jpg"
                />
            </div>
        </section>
    );
};

export default CardsServices;

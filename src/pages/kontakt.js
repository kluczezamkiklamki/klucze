import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";

const Kontakt = () => {
    const [showMap, setMap] = useState(false);
    const handleMap = () => setMap(true);
    return (
        <Layout>
            <h1 className="text-2xl font-bold px-3 py-6">
                Kontakt - Dorabianie Kluczy - Ostrów Wielkopolski
            </h1>
            <div className="space-y-2 font-bold text-lg mb-6">
                <div className="px-3 py-6 w-max mx-auto text-xl">
                    <h2 className="text-green-700 font-bold">
                        Godziny Otwarcia:
                    </h2>
                    <p className="text-green-700">
                        poniedziałek - piątek 10:00 - 17:00
                    </p>
                    <p className="text-green-700">w soboty 10:00 - 13:00</p>
                </div>
                <p>ul. Wolności 26</p>
                <p>63-400 Ostrów Wielkopolski</p>
                <p>
                    w punkcie fotograficznym{" "}
                    <Link
                        to="http://www.fotoprezenty.fotohorosiewicz.com/"
                        title="Fotohorosiewicz"
                        target="_blank"
                        aria-label="Fotohorosiewicz"
                        className="underline"
                    >
                        Fotohorosiewicz
                    </Link>
                </p>
                <Link
                    className="flex-center"
                    to="tel:502331002"
                    aria-label="Zadzwoń"
                    title="Zadzwoń"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path
                            d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                            stroke-width="0"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p>502-331-002</p>
                </Link>
                <Link
                    to="mailto:biuro@kluczezamkiklamki.pl"
                    aria-label="mail"
                    title="Mail"
                    className="flex-center"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path
                            d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                            stroke-width="0"
                            fill="currentColor"
                        ></path>
                        <path
                            d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                            stroke-width="0"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <p>biuro@kluczezamkiklamki.pl</p>
                </Link>
            </div>
            <div className="flex-center flex-col lg:flex-row">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1349.8218635590617!2d17.810383706794774!3d51.64913924861617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab57bd923852f%3A0xfaed1e7e82c189d3!2sDorabianie%20kluczy%20Ostr%C3%B3w%20Wlkp.%20-%20przy%20urz%C4%99dzie%20pracy!5e0!3m2!1spl!2sus!4v1686300222187!5m2!1spl!2sus"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    className="w-full h-96"
                    loading="eager"
                    title="mapa placówki"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="relative w-full">
                    <div
                        className={
                            !showMap
                                ? "absolute inset-0 bg-blue-900/30 w-full h-full flex-center text-center lg:hidden"
                                : "hidden"
                        }
                    >
                        <button
                            aria-label="włacz mape"
                            title="włacz mape"
                            onClick={handleMap}
                        >
                            <p className="text-white font-medium bg-gray-800/90 py-8 px-4 rounded-full text-sm">
                                Zobacz <br /> Street View
                            </p>
                        </button>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1686300297569!6m8!1m7!1sn50IW6wYCML7hLZgLUG-hw!2m2!1d51.64885909595055!2d17.81090320963496!3f269.5438011604637!4f0.934858793237467!5f0.4000000000000002"
                        className="w-full h-96"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="eager"
                        title="gdzie szukac kluczy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Kontakt Dorabianie Kluczy - Ostrów Wielkopolski"
        description="Potrzebujesz dorabiania kluczy w Ostrowie Wielkopolskim? Skorzystaj z naszych usług! Profesjonalne dorabianie kluczy na miejscu. Sprawdź naszą ofertę"
    />
);

export default Kontakt;

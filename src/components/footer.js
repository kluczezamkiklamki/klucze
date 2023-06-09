import React from "react";
import { Link } from "gatsby";

const Footer = () => (
    <footer className="mt-12 pt-12 bg-gray-800 text-white text-center mx-auto">
        <p className="text-lg font-semibold">Dorabianie Kluczy</p>
        <Link
            to="https://goo.gl/maps/8KYxdVNPRYLDDkuUA"
            target="_blank"
            title="jak dojechać"
            className="text-green-600 font-medium text-sm flex-center mb-2  w-max mx-auto"
        >
            <p className="mr-1">Jak Dojechać</p>{" "}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-external-link"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
            </svg>
        </Link>
        <p>ul. Wolności 26</p>
        <p>63-400 Ostrów Wielkopolski</p>
        <p>
            w punkcie fotograficznym{" "}
            <Link
                to="http://www.fotoprezenty.fotohorosiewicz.com/"
                title="Fotohorosiewicz"
                target="_blank"
                aria-label="Fotohorosiewicz"
                className="underline font-medium"
            >
                Fotohorosiewicz
            </Link>
        </p>
        <Link
            className="flex-center w-max mx-auto"
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
            className="flex-center w-max mx-auto"
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
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
        <div className="mt-6 border-t border-gray-500 w-4/5 mx-auto text-sm">
            <p className="text-gray-200 py-4">
                ©2023 kluczezamkiklamki.pl —{" "}
                <Link to="https://seovileo.pl/" target="_blank" title="seovileo" aria-label="seovileo">seovileo.pl</Link>
            </p>
        </div>
    </footer>
);

export default Footer;

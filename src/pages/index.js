import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

import { CardsServices, KeysServices } from "../components/HomePage/index";
import { Link } from "gatsby";

const Home = () => {
    return (
        <div className="mx-auto w-full text-center bg-fixed">
            <StaticImage
                style={{ margin: "10px 20px" }}
                draggable="false"
                quality={100}
                loading="eager"
                placeholder="none"
                alt="logo kluczezamkiklamki"
                src="../assets/heroLogo1.jpg"
            />

            <Layout>
                <CardsServices />
                <div className="px-2 py-2 max-w-4xl mx-auto">
                    <h3 className="font-bold py-6">
                        Witamy na naszej stronie, poświęconej kluczom w każdej
                        postaci
                    </h3>
                    <p className="">
                        Jesteśmy firmą świadczącą kompleksowe usługi z zakresu
                        naprawy zamków i dorabiania różnego rodzaju kluczy.
                        Każda usługa dostosowana jest do indywidualnych potrzeb
                        naszych klientów. Nasz profesjonalny zespół z
                        wieloletnim doświadczeniem zapewnia szybkie i skuteczne
                        sprostanie nawet najtrudniejszym wyzwaniom. Jako że
                        nasza firma działa również w zakresie pojazdów,
                        niezależnie od marki, modelu czy typu samochodu,
                        jesteśmy w stanie dorobić kluczyk samochodowy, który
                        spełni wszystkie Twoje oczekiwania.
                    </p>
                    <h2 className="text-lg font-medium py-4">
                        Poznaj naszą ofertę, ceny narzędzi dostępu, która
                        obejmuje:
                    </h2>
                </div>
                <KeysServices />
                <div className="px-2 py-2 max-w-4xl mx-auto text-start">
                    <h2 className="text-lg font-bold py-6">
                        Szybkie dorabianie kluczy
                    </h2>
                    <p>
                        Oferujemy ekspresowe dorabianie kluczy, które pozwoli Ci
                        cieszyć się swobodą. Nasza firma posiada doświadczenie w
                        branży, dlatego możesz nam zaufać. Nie trać czasu na
                        szukanie innych rozwiązań - skorzystaj z naszych usług i
                        ciesz się pełną funkcjonalnością swojego klucza dostępu.
                        Skorzystaj z najlepszego rozwiązania i zabezpiecz się z
                        Nami. Zaufaj ekspertom, którzy zapewnią Ci wsparcie w
                        atrakcyjnej cenie. Nie trać czasu na szukanie innych
                        opcji, sprawdź i skorzystaj z naszego serwisu. Zadzwoń
                        już teraz.
                    </p>
                    <h2 className="text-lg font-bold py-6">
                        Dlaczego warto skorzystać z naszych usług?
                    </h2>
                    <ul>
                        <li className="list-disc ml-6 my-3">
                            Profesjonalizm i doświadczenie - Nasz zespół składa
                            się z wykwalifikowanych specjalistów, którzy
                            gwarantują najwyższą jakość. Z pasją i
                            zaangażowaniem podchodzą do powierzonego zadania.
                        </li>
                        <li className="list-disc ml-6 my-3">
                            Szybkość i efektywność - Posiadamy nowoczesny
                            sprzęt, dlatego jesteśmy w stanie wykonać swoją
                            pracę szybko i skutecznie. Według opinii klientów
                            działamy ekspresowo. Zapewniamy szerokie wsparcie
                            techniczne.
                        </li>
                        <li className="list-disc ml-6 my-3">
                            Dostępność i elastyczność - Godziny otwarcia
                            dostosowujemy do Twoich potrzeb, zapewniając
                            kompleksową obsługę w najbardziej dogodnym dla
                            Ciebie czasie każdego dnia.
                        </li>
                        <li className="list-disc ml-6 my-3">
                            Konkurencyjne ceny - Oferujemy atrakcyjne ceny,
                            które są dostosowane do Twojego budżetu.
                        </li>
                        <li className="list-disc ml-6 my-3">
                            Profesjonalizm i doświadczenie - Nasz zespół składa
                            się z wykwalifikowanych specjalistów, którzy
                            gwarantują najwyższą jakość. Z pasją i
                            zaangażowaniem podchodzą do powierzonego zadania.
                        </li>
                        <li className="list-disc ml-6 my-3">
                            Zaufanie i satysfakcja klienta - Dlatego cieszymy
                            się pozytywnymi opiniami naszych zadowolonych
                            klientów. Pomożemy rozwiązać każdy problem, a każdą
                            osobę traktujemy indywidualnie.
                        </li>
                    </ul>
                    <p>
                        Jeśli szukasz profesjonalistów w tej dziedzinie, to
                        jesteś we właściwym miejscu!
                    </p>
                    <h3 className="text-lg font-bold py-6">
                        Nasza lokalizacja:
                    </h3>
                    <p>
                        Znajdujemy się w mieście Ostrów Wielkopolski w punkcie
                        fotograficznym{" "}
                        <Link
                            to="http://www.fotoprezenty.fotohorosiewicz.com/"
                            title="Fotohorosiewicz"
                            target="_blank"
                            aria-label="Fotohorosiewicz"
                            className="underline font-medium py-1 px-1"
                        >
                            Fotohorosiewicz
                        </Link>{" "}
                        w samym centrum miasta. Niewiele jest takich firm w
                        lokalizacji, stąd łatwo nas znaleźć.
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1349.8218635590617!2d17.810383706794774!3d51.64913924861617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab57bd923852f%3A0xfaed1e7e82c189d3!2sDorabianie%20kluczy%20Ostr%C3%B3w%20Wlkp.%20-%20przy%20urz%C4%99dzie%20pracy!5e0!3m2!1spl!2sus!4v1686300222187!5m2!1spl!2sus"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        className="w-full h-96 mt-6"
                        loading="lazy"
                        title="mapa placówki"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Layout>
        </div>
    );
};

export const Head = () => (
    <Seo
        title="Dorabianie Kluczy - Ostrów Wielkopolski"
        description="Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach"
    />
);

export default Home;

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
                src="../assets/kluczezamkiklamki.jpg"
            />

            <Layout>
                <CardsServices />
                <div className="px-2 py-2 max-w-4xl mx-auto">
                    <h2 className="font-bold py-6">
                        Witamy na naszej stronie, poświęconej kluczom w każdej
                        postaci
                    </h2>
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
                    <h2 className="text-lg font-bold py-6">
                        Nasza lokalizacja:
                    </h2>
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
                    <div>
                        <h2 className="text-lg font-bold py-6">
                            <strong>Dorabianie Kluczy - Ostrów Wielkopolski</strong>: Wyjątkowa
                            usługa dla Twoich potrzeb
                        </h2>
                        <p>
                            Dorabianie kluczy jest jednym z najważniejszych
                            aspektów utrzymania naszych domów, biur i samochodów
                            w bezpiecznym stanie. Gdy zgubimy klucz lub
                            potrzebujemy dodatkowych egzemplarzy dla naszej
                            rodziny, warto skorzystać z profesjonalnej usługi
                            dorabiania kluczy. Jeśli mieszkasz w Ostrów
                            Wielkopolski lub jego okolicach, masz szczęście,
                            ponieważ istnieje wiele miejsc, które oferują taką
                            usługę. W tym artykule przyjrzymy się bliżej temu,
                            jak znaleźć najlepsze usługi dorabiania kluczy w
                            Ostrów Wielkopolski i jakie korzyści możesz zyskać,
                            korzystając z takiej usługi.
                        </p>
                        <h2 className="text-lg font-bold py-6">Profesjonalizm i doświadczenie</h2>
                        <p>
                            <strong>Dorabianie kluczy</strong> to nie tylko kwestia stworzenia
                            fizycznego egzemplarza klucza. To proces, który
                            wymaga precyzji, doświadczenia i odpowiednich
                            narzędzi. Dlatego ważne jest, aby znaleźć rzetelnego
                            specjalistę, który zapewni nie tylko jakość, ale
                            także bezpieczeństwo naszych zamków i drzwi.
                        </p>
                        <p>
                            W Ostrów Wielkopolski istnieje wiele firm i sklepów,
                            które oferują usługi dorabiania kluczy. Kluczowym
                            czynnikiem jest jednak znalezienie eksperta, który
                            połączy umiejętności techniczne z doskonałym
                            zrozumieniem potrzeb klienta. Profesjonalny
                            dorabiacz kluczy nie tylko zapewni Ci nowe
                            egzemplarze kluczy, ale także udzieli porad
                            dotyczących bezpieczeństwa Twojego domu lub biura.
                        </p>
                        <h2 className="text-lg font-bold py-6">Czynniki do rozważenia</h2>
                        <p>
                            Wybierając usługę dorabiania kluczy w Ostrów
                            Wielkopolski, warto zwrócić uwagę na kilka
                            czynników. Po pierwsze, poszukaj opinii i referencji
                            od innych klientów. Często najlepszą rekomendacją
                            jest zadowolony klient, który doświadczył wysokiej
                            jakości usług. Po drugie, sprawdź, czy wybrana firma
                            korzysta z najnowszych technologii i narzędzi do
                            dorabiania kluczy. Rozwój technologii wpływa na
                            bezpieczeństwo naszych zamków, dlatego ważne jest,
                            aby dorabianie kluczy odbywało się z użyciem
                            nowoczesnych metod i narzędzi.
                        </p>
                        <p>
                            Jednym z kluczowych aspektów usługi dorabiania
                            kluczy jest szybkość realizacji zamówienia. Gdy
                            potrzebujesz dodatkowych kluczy pilnie, ważne jest,
                            aby usługa była dostępna i wykonana w krótkim
                            czasie. W Ostrów Wielkopolski znajdziesz ekspertów,
                            którzy oferują szybkie i skuteczne dorabianie
                            kluczy. Dzięki temu nie musisz martwić się o utratę
                            dostępu do swojego domu czy biura.
                        </p>
                        <h2 className="text-lg font-bold py-6">Indywidualne podejście i doradztwo</h2>
                        <p>
                            Niezależnie od rodzaju klucza, który musisz dorobić,
                            profesjonalne usługi dorabiania kluczy w Ostrów
                            Wielkopolski powinny spełniać Twoje oczekiwania. Bez
                            względu na to, czy potrzebujesz klucza do drzwi,
                            samochodu czy sejfu, ekspert z odpowiednim
                            doświadczeniem zapewni Ci klucze, które będą
                            idealnie pasować i działać z Twoimi zamkami.
                        </p>
                        <p>
                            Dodatkowo, dobry dorabiacz kluczy będzie w stanie
                            doradzić Ci w kwestii bezpieczeństwa. Oferując
                            usługę dorabiania kluczy, ekspert może również
                            zainstalować bardziej zaawansowane zamki, które
                            zapewnią większe bezpieczeństwo Twojego domu lub
                            biura. Będzie to szczególnie ważne, jeśli mieszkasz
                            w Ostrów Wielkopolski, gdzie dbanie o bezpieczeństwo
                            swojego mienia jest kluczowym aspektem.
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export const Head = () => (
    <Seo
        title="Dorabianie Kluczy - Ostrów Wielkopolski"
        description="Potrzebujesz dorabiania kluczy w Ostrowie Wielkopolskim? Skorzystaj z naszych usług! Profesjonalne dorabianie kluczy na miejscu. Sprawdź naszą ofertę"
    />
);

export default Home;

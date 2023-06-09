import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Cennik = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allDatoCmsKey {
                    edges {
                        node {
                            imgtitle
                            price
                            slug
                        }
                    }
                }
            }
        `
    );
    return (
        <Layout>
            <h1 className="text-2xl font-bold px-3 py-6">
                Cena dorabiania kluczy - Ostrów Wielkopolski
            </h1>
            <p>Usługi wykonujemy ekspresowo</p>
            {data.allDatoCmsKey.edges.map(({ node }, index) => (
                <Link
                    to={`/` + node.slug}
                    title={node.imgtitle}
                    className={`flex-between my-1 py-2 font-bold px-4 rounded-sm max-w-2xl mx-auto ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-blue-100"
                    }`}
                >
                    <div className="flex-center">
                        <p className="mr-2">{node.imgtitle}</p>
                        <div className="text-sm text-red-700 flex-center ml-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M5 12l4 4"></path>
                                <path d="M5 12l4 -4"></path>
                            </svg>
                            <p>Więcej</p>
                        </div>
                    </div>
                    <p className="text-green-700">{node.price}</p>
                </Link>
            ))}

            <StaticImage width={670} quality={100} src="../assets/klucze.jpg" />

            <div className="text-start max-w-2xl mx-auto px-2">
                <h2 className="text-lg font-bold py-6">
                    Wysoka jakość usług dorabiania kluczy w Ostrów Wielkopolski
                </h2>
                <p>
                    Jeśli szukasz profesjonalnych usług dorabiania kluczy w
                    Ostrów Wielkopolski, to trafiłeś we właściwe miejsce! Nasza
                    firma oferuje wysoką jakość, szybkość i precyzję w
                    wykonywaniu kopii kluczy różnego rodzaju. Niezależnie od
                    tego, czy potrzebujesz dorobić klucz do mieszkania,
                    samochodu czy biura, możemy Ci pomóc.
                </p>
                <h2 className="text-lg font-bold py-6">
                    Szeroki wybór kluczy i fachowe dorabianie
                </h2>
                <p>
                    Posiadamy bogaty wybór kluczy do różnych zamków, w tym
                    klucze płaskie, klucze samochodowe, klucze zabezpieczeń,
                    klucze do mebli i wiele innych. Nasz wykwalifikowany zespół
                    fachowców jest dobrze zaznajomiony z różnymi rodzajami
                    zamków i kluczy, dlatego możemy zagwarantować, że otrzymasz
                    klucz, który doskonale pasuje do Twojego zamka.
                </p>
                <h2 className="text-lg font-bold py-6">
                    Szybkie i skuteczne dorabianie kluczy
                </h2>
                <p>
                    W naszej firmie priorytetem jest zapewnienie szybkiego i
                    skutecznego dorabiania kluczy. Dzięki nowoczesnemu sprzętowi
                    i profesjonalnemu podejściu naszych pracowników, jesteśmy w
                    stanie wykonać kopię Twojego klucza w krótkim czasie.
                    Oferujemy usługę natychmiastowego dorabiania kluczy, dzięki
                    czemu nie musisz czekać długie godziny na swoją nową kopię.
                </p>
                <h2 className="text-lg font-bold py-6">
                    Konkurencyjne ceny i satysfakcja klienta
                </h2>
                <p>
                    Jesteśmy świadomi, że cena jest ważnym czynnikiem dla
                    naszych klientów. Dlatego oferujemy konkurencyjne ceny za
                    nasze usługi dorabiania kluczy. Jednocześnie niezależnie od
                    ceny, zapewniamy najwyższą jakość wykonania kopii kluczy
                    oraz pełne zadowolenie naszych klientów. Nasze pozytywne
                    opinie i rekomendacje świadczą o naszej niezawodności i
                    profesjonalizmie.
                </p>
                <h2 className="text-lg font-bold py-6">
                    Gwarancja poufności i bezpieczeństwa
                </h2>
                <p>
                    Zależy nam na bezpieczeństwie naszych klientów i ich mieniu.
                    Dlatego zapewniamy pełną poufność i dyskrecję w trakcie
                    wykonywania usługi dorabiania kluczy. Możesz być pewien, że
                    Twoje dane osobowe oraz informacje o zamkach są u nas
                    bezpieczne i nie będą wykorzystywane w żadny nieautoryzowany
                    sposób.
                </p>
                <h3 className="text-lg font-bold py-6">
                    Skontaktuj się z nami już dziś!
                </h3>
                <div>
                    <p>
                        Jeśli potrzebujesz dorobić klucz w Ostrów Wielkopolski,
                    </p>
                    <div className="py-2">
                        <Link
                            to="/kontakt"
                            aria-label="kontakt"
                            title="kontakt"
                            className="bg-green-700 text-white font-medium px-3 py-1 text-sm rounded-md"
                        >
                            Zadzwoń
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Cena dorabiania kluczy Ostrów Wielkopolski - Profesjonalne usługi"
        description="Szybkie i precyzyjne dorabianie kluczy w Ostrów Wielkopolski. Skorzystaj z naszych profesjonalnych usług. Oferujemy wysoką jakość, szeroki wybór kluczy i konkurencyjne ceny. Skontaktuj się z nami już dziś i ciesz się bezpieczeństwem i skutecznością naszych usług dorabiania kluczy."
    />
);

export default Cennik;

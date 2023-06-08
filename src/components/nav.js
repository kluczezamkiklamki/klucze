import React from "react";
import { Link } from "gatsby";

export default function Nav() {
    return (
        <nav className="bg-[#A50A0A] text-gray-100 py-3 rounded-sm sticky top-0 z-50">
            <ul className="flex-center space-x-7">
                <li>
                    <Link to="/" aria-label="Strona Główna" title="Strona Główna">Strona Główna</Link>
                </li>
                <li>
                    <Link to="/usługi" aria-label="Usługi" title="Usługi">Usługi</Link>
                </li>
                <li>
                    <Link to="/cennik" aria-label="Cennik" title="Cennik">Cennik</Link>
                </li>
                <li>
                    <Link to="/kontakt" aria-label="Kontakt" title="Kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}

//  Nav;

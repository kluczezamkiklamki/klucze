import React from "react";
import { Link } from "gatsby";

export default function Nav() {
    return (
        <nav className="bg-[#A50A0A] text-gray-100 py-3 rounded-sm sticky top-0 z-50">
            <ul className="flex-center space-x-4 text-sm font-medium">
                <li>
                    <Link to="/" aria-label="Strona Główna" title="Strona Główna" className="px-2 py-1">Strona Główna</Link>
                </li>
                <li>
                    <Link to="/cennik" aria-label="Cennik" title="Cennik" className="px-2 py-1">Cennik</Link>
                </li>
                <li>
                    <Link to="/kontakt" aria-label="Kontakt" title="Kontakt" className="px-2 py-1">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}

//  Nav;

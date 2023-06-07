import React from "react";
import { useState } from "react";
import { Link } from "gatsby";

export default function Nav() {
    return (
        <nav className="bg-[#A50A0A] text-gray-100 py-2 rounded-sm sticky top-0">
            <ul className="flex-center space-x-7">
                <li>
                    <Link>Strona Główna</Link>
                </li>
                <li>
                    <Link>Usługi</Link>
                </li>
                <li>
                    <Link>Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}

//  Nav;

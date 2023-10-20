'use client'
import * as React from 'react';
import Link from 'next/link';

export default function Menu() {
        
    return (
        <header className="h-28 w-screen px-4 lg:px-0 flex justify-between lg:justify-around items-center bg-[#F27E63] text-black">
            <h1 className="lg:text-3xl font-bold py-2 px-4
                            bg-green-800 text-gray-50 rounded border-2 border-gray-200">
                <Link href="/">Erica Okamura</Link>
            </h1>
            <nav className={`lg:flex gap-4`}>
                <ul className="h-[100svh] lg:h-auto w-full lg:w-auto absolute top-28 left-16 lg:static lg:top-0
                                    flex flex-col lg:flex-row bg-green-800 lg:bg-[#F27E63] gap-4 z-10">
                    <li className="mx-4 lg:mx-auto mt-4 lg:mt-auto">
                        <Link href="/sobre-mim" className="hover:underline text-gray-50 lg:text-gray-950">
                            Sobre mim
                        </Link>
                    </li>
                    <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                        <Link href="/formacao" className="hover:underline text-gray-50 lg:text-gray-950">
                            Formação Acadêmica
                        </Link>
                    </li>
                    <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                        <Link href="/experiencia" className="hover:underline text-gray-50 lg:text-gray-950">
                            Experiência profissional
                        </Link>
                    </li>
                    <li className="mx-4 lg:mx-auto mt-1 lg:mt-auto">
                        <Link href="/hobbies" className="hover:underline text-gray-50 lg:text-gray-950">
                            Hobbies
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

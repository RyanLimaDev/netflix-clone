import MobileMenu from "./MobileMenu"
import NavbarItem from "./NavbarItem"
import { useState, useCallback } from 'react'
import Image from "next/image"
import AccountMenu from "./AccountMenu"

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMobileMenu = useCallback( () => {
        setShowMobileMenu((current) => !current);
    } ,[])

    return(
        <nav className="w-full fixed z-40">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center 
            transition duration-500 bg-zinc-900 bg-opacity-90">
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo.png" />

                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Inicio"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Filmes"/>
                    <NavbarItem label="Mais Recentes"/>
                    <NavbarItem label="Minha Lista"/>
                </div>

                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center cursor-pointer gap-2 ml-8">
                    <p className="text-white text-sm">Buscar</p>
                    <BsChevronDown className="text-white transition"/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>

                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div>
                    <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src="/images/default-blue.png" width={100} height={100} alt="profile.png"/> 
                        </div>
                        <BsChevronDown className="text-white transition"/>
                        <AccountMenu/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
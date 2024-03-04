'use client'

import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import logoImage from '../app/favicon.ico'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import LanguageSelector from '@/components/i18n/LanguageSelector'
import { useState } from 'react'

const Header = () => {
    const strings = useAppSelector(selectTranslations)
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    const closeNavBar = () => {
        setIsNavbarOpen(false)
    }

    return (
        <Navbar fluid rounded theme={flowbiteTheme.navbar}>
            <Image src={logoImage} alt={'Website logo'} className={`w-12 h-12`} />
            <div className='flex md:order-2'>
                <LanguageSelector />
                <ThemeSwitcher className={`ml-4`} />
                <Navbar.Toggle onClick={toggleNavbar} />
            </div>
            <Navbar.Collapse hidden={!isNavbarOpen}>
                <Navbar.Link href='#' active onClick={closeNavBar}>
                    {strings['header.home']}
                </Navbar.Link>
                <Navbar.Link href='#myself' onClick={closeNavBar}>{strings['header.about']}</Navbar.Link>
                <Navbar.Link href='#studies' onClick={closeNavBar}>{strings['header.studies']}</Navbar.Link>
                <Navbar.Link href='#projects' onClick={closeNavBar}>{strings['header.projects']}</Navbar.Link>
                <Navbar.Link href='#technologies' onClick={closeNavBar}>{strings['header.technologies']}</Navbar.Link>
                <Navbar.Link href='#skills' onClick={closeNavBar}>{strings['header.skills']}</Navbar.Link>
                <Navbar.Link href='#contact' onClick={closeNavBar}>{strings['header.contact']}</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
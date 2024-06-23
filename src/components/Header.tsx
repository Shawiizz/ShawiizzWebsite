'use client'

import { Button, Navbar } from 'flowbite-react'
import Image from 'next/image'
import logoImage from '../app/favicon.ico'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'
import LanguageSelector from '@/components/i18n/LanguageSelector'
import { useState } from 'react'

const CVButton = ({ strings, className }: { strings: Record<StringKey, string>, className?: string }) => {
    return (
        <Button className={`${className ?? ''} whitespace-nowrap mr-4`} onClick={() => window.open('/cv.pdf', '_blank')}>
            <svg className={`mr-2 w-6 h-6`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6.00002V6.75002H18.75V6.00002H18ZM15.7172 2.32614L15.6111 1.58368L15.7172 2.32614ZM4.91959 3.86865L4.81353 3.12619H4.81353L4.91959 3.86865ZM5.07107 6.75002H18V5.25002H5.07107V6.75002ZM18.75 6.00002V4.30604H17.25V6.00002H18.75ZM15.6111 1.58368L4.81353 3.12619L5.02566 4.61111L15.8232 3.0686L15.6111 1.58368ZM4.81353 3.12619C3.91638 3.25435 3.25 4.0227 3.25 4.92895H4.75C4.75 4.76917 4.86749 4.63371 5.02566 4.61111L4.81353 3.12619ZM18.75 4.30604C18.75 2.63253 17.2678 1.34701 15.6111 1.58368L15.8232 3.0686C16.5763 2.96103 17.25 3.54535 17.25 4.30604H18.75ZM5.07107 5.25002C4.89375 5.25002 4.75 5.10627 4.75 4.92895H3.25C3.25 5.9347 4.06532 6.75002 5.07107 6.75002V5.25002Z" fill="#FFFFFF"/>
                <path d="M8 12H16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 15.5H13.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V14M4 6V5M4 6H17C18.6569 6 20 7.34315 20 9V10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {strings['header.cv']}
        </Button>
    )
}

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
            <span className={`xl:pr-[15rem]`}>
                <Image src={logoImage} alt={'Website logo'} className={`w-12 h-12`} />
            </span>
            <div className='flex md:order-2'>
                <CVButton strings={strings} className={`hidden md:inline-flex`} />
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
                <CVButton strings={strings} className={`md:hidden max-w-[8rem] mt-5`} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
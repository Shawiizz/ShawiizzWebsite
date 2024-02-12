'use client'

import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import logoImage from '../app/favicon.ico'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import LanguageSelector from '@/components/i18n/LanguageSelector'

const Header = () => {
    const strings = useAppSelector(selectTranslations)

    return (
        <Navbar fluid rounded theme={flowbiteTheme.navbar}>
            <Image src={logoImage} alt={'Website logo'} className={`w-12 h-12`} />
            <div className='flex md:order-2'>
                <LanguageSelector />
                <ThemeSwitcher className={`ml-4`} />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href='#' active>
                    {strings['header.home']}
                </Navbar.Link>
                <Navbar.Link href='#myself'>{strings['header.about']}</Navbar.Link>
                <Navbar.Link href='#studies'>{strings['header.studies']}</Navbar.Link>
                <Navbar.Link href='#projects'>{strings['header.projects']}</Navbar.Link>
                <Navbar.Link href='#technologies'>{strings['header.technologies']}</Navbar.Link>
                <Navbar.Link href='#skills'>{strings['header.skills']}</Navbar.Link>
                <Navbar.Link href='#contact'>{strings['header.contact']}</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
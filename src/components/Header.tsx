'use client'

import { Button, Flowbite, Navbar } from 'flowbite-react'
import Image from 'next/image'
import logoImage from '../app/favicon.ico'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Header = () => {
    const mode = useSelector(selectTheme)

    return (
        <Flowbite theme={{ theme: flowbiteTheme, mode }}>
            <Navbar fluid rounded>
                <Image src={logoImage} alt={'Website logo'} className={`w-12 h-12`} />
                <div className='flex md:order-2'>
                    <Button color={'blue'}>Language</Button>
                    <ThemeSwitcher className={`ml-4`}/>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href='#' active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href='#'>About</Navbar.Link>
                    <Navbar.Link href='#'>Studies</Navbar.Link>
                    <Navbar.Link href='#'>Projects</Navbar.Link>
                    <Navbar.Link href='#'>Skills</Navbar.Link>
                    <Navbar.Link href='#'>Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </Flowbite>
    )
}

export default Header
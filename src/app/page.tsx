'use client'

import { passionOne } from '@/app/fonts'
import Image from 'next/image'
import pcImage from '../../public/pc.svg'
import contactImage from '../../public/contact.png'
import schoolImage from '../../public/school.png'
import shawiizzIcon from '@/app/favicon.ico'
import { ProjectCard } from '@/components/home/ProjectCard'
import { projects } from '@/util/data/Projects'
import Link from 'next/link'
import { Flowbite, Pagination, Card, Accordion } from 'flowbite-react'
import React, { useState } from 'react'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import { skills } from '@/util/data/Skills'
import SkillCard from '@/components/home/SkillCard'
import ProjectView from '@/components/home/ProjectView'
import SkillAccordion from '@/components/home/SkillAccordion'
import AnimatedTitle from '@/components/home/AnimatedTitle'
import Footer from '@/components/Footer'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { getLocaleStringAsArgs } from '@/util/LocaleHelper'
import Technologies from '@/components/home/Technologies'

export default function Home() {
    const mode = useSelector(selectTheme)
    const strings = useAppSelector(selectTranslations)

    return (
        <Flowbite theme={{ theme: flowbiteTheme, mode }}>
            <main className='flex min-h-screen flex-col items-center justify-between'>
                <section className='flex flex-col justify-center items-center h-screen mb-20'>
                    <AnimatedTitle />
                    <h2 className={`text-center text-gray-600 dark:text-white md:text-4xl text-3xl font-normal tracking-[.561em] mt-7`}>{strings['home.subtitle']}</h2>
                    <Link href={`#myself`}
                          className={`box-border h-[5vw] w-[5vw] rotate-45 transition-[border-width] duration ease-[ease-in-out] absolute animate-[fadeIn_5s] border-solid border-black bottom-[10%] border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 dark:border-white`}>
                    </Link>
                </section>
                <section className={`flex justify-evenly items-center md:w-full w-[80%] md:pt-20 pb-20`} id={`myself`}>
                    <div className={`text-center`}>
                        <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(45deg,#ffd233_0%,#ff2bbf_100%)] dark:bg-[linear-gradient(45deg,#FBDA61_0%,#FF5ACD_100%)] font-semibold`}>{strings['home.section.1.title']}</h2>
                        <p className={`pt-5 tracking-[.054em] max-w-4xl text-gray-800 dark:text-white font-semibold text-[1.5rem] md:text-[1.7rem] leading-[1.2em]`}>{getLocaleStringAsArgs(strings['home.section.1.text'])[0]}{new Date().getFullYear() - 2004}{getLocaleStringAsArgs(strings['home.section.1.text'])[2]}</p>
                    </div>
                    <Image src={pcImage} alt={'Computer science'}
                           className={`hidden md:block w-[30vw] h-auto mr-12`} />
                </section>
                <section
                    className={`flex flex-row-reverse justify-evenly items-center md:w-full w-[80%] md:pt-20 md:pb-20`}
                    id={`studies`}>
                    <div className={`text-center`}>
                        <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} text-gradient bg-[linear-gradient(180deg,#377cef_0%,#fa4bc8_100%)] dark:bg-[linear-gradient(180deg,#A9C9FF_0%,#FFBBEC_100%)] font-semibold`}>{strings['home.section.2.title']}</h2>
                        <p className={`pt-5 tracking-[.054em] max-w-4xl text-gray-800 dark:text-white font-semibold text-[1.5rem] md:text-[1.7rem] leading-[1.2em]`}>{strings['home.section.2.text']}</p>
                    </div>
                    <Image src={schoolImage} alt={'School'} className={`hidden md:block w-[25vw] h-auto`} />
                </section>
                <section
                    className={`pt-20 pb-20 flex flex-col md:flex-row justify-center items-center md:items-stretch md:justify-around gap-12`}
                    id={`projects`}>
                    <ProjectView projects={projects.personal} title={strings['projects.solo']} />
                    <ProjectView projects={projects.team} title={strings['projects.team']}
                                 backgroundGradient={'teamGradient'} />
                </section>
                <section className={`flex justify-evenly items-center md:w-full w-[80%] md:pt-20 pb-20`} id={`technologies`}>
                    <div className={`flex flex-col justify-center items-center`}>
                        <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} techGradient font-semibold`}>{strings['home.section.tech.title']}</h2>
                        <p className={`pt-5 tracking-[.054em] text-gray-800 dark:text-white font-semibold text-[1.3rem] md:text-[1.5rem] leading-[1.2em] text-center max-w-screen-md`}>{strings['home.section.tech.text']}</p>
                        <div className={`flex flex-row flex-wrap gap-10 justify-center mt-20 ml-5 mr-5`}>
                            <Technologies />
                        </div>
                    </div>
                </section>
                <section className={`flex justify-evenly items-center md:w-full w-[80%] md:pt-20 pb-20`} id={`skills`}>
                    <div className={`flex flex-col justify-center items-center`}>
                        <h2 className={`text-[3.8em] md:text-[4.5em] ${passionOne.className} skillsGradient font-semibold`}>{strings['home.competences.title']}</h2>
                        <p className={`pt-5 tracking-[.054em] text-gray-800 dark:text-white font-semibold text-[1.3rem] md:text-[1.5rem] leading-[1.2em] text-center max-w-screen-md`}>{strings['home.competences.text']}</p>
                        <div className={`flex flex-row flex-wrap gap-10 justify-center mt-20 ml-5 mr-5`}>
                            <SkillAccordion />
                        </div>
                    </div>
                </section>
                <section
                    className={`flex text-center justify-around items-center ml-10 mr-10 md:pt-20 md:w-full w-80%`}
                    id={`contact`}>
                    <div className={`text-left dark:text-white`}>
                        <h2 className={`text-[4.5em] ${passionOne.className} contactGradient font-semibold mb-5`}>{strings['home.section.contact.title']}</h2>
                        <p className={`pb-5 text-2xl tracking-[.054em] font-bold`}>{strings['home.section.contact.text']}</p>
                        <p>{strings['home.section.contact.discord']} <Link
                            href={`https://discord.com/users/436832490263412736`}
                            className={`decoration-0 tracking-[.054em] font-extralight`}>shawiiz_z</Link>
                        </p>
                        <p>{strings['home.section.contact.mail']} <Link href={`mailto:shaweereso@gmail.com`}
                                                                        className={`decoration-0 tracking-[.054em] font-extralight`}>shaweereso@gmail.com</Link>
                        </p>
                        <h3 className={`text-3xl tracking-[.054em] font-bold mt-10`}>{getLocaleStringAsArgs(strings['home.section.contact.github'])[0]}
                            <Link
                                href={`https://github.com/Shawiizz`}
                                className={`decoration-dotted tracking-[.054em] font-extralight underline`}>{getLocaleStringAsArgs(strings['home.section.contact.github'])[1]}</Link>{getLocaleStringAsArgs(strings['home.section.contact.github'])[2]}
                        </h3>
                    </div>
                    <Image src={contactImage} alt={'Contact'}
                           className={`hidden md:block w-[30vw] h-auto mb-20`} />
                </section>
                <Footer />
            </main>
        </Flowbite>
    )
}

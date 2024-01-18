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
import { Flowbite, Pagination, Card } from 'flowbite-react'
import React, { useState } from 'react'
import { flowbiteTheme } from '@/util/FlowbiteTheme'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import { skills } from '@/util/data/Skills'
import SkillCard from '@/components/home/SkillCard'
import ProjectView from '@/components/home/ProjectView'

export default function Home() {
    const mode = useSelector(selectTheme)

    return (
        <Flowbite theme={{ theme: flowbiteTheme, mode }}>
            <main className='flex min-h-screen flex-col items-center justify-between'>
                <section className='flex flex-col justify-center items-center h-screen mb-20'>
                    <h1 className={`text-center text-white md:text-[5em] text-[4em] font-bold rounded leading-[1.2em] md:w-[27rem] w-[22rem] ${passionOne.className} bg-title-gradient`}>Shawiiz_z</h1>
                    <h2 className={`text-center text-white md:text-4xl text-3xl font-normal tracking-[.561em] mt-7`}>PORTFOLIO</h2>
                    <div className='arrow'></div>
                </section>
                <section className={`flex justify-evenly items-center md:w-full w-[80%] pt-20 pb-20`}>
                    <div className={`text-center`}>
                        <h2 className={`text-[4.5em] ${passionOne.className} myselfGradient font-semibold`}>Qui suis-je
                            ?</h2>
                        <p className={`pt-5 tracking-[.054em] max-w-4xl text-white font-semibold text-[1.7rem] leading-[1.2em]`}>Salut
                            ! Je m'appelle Maël, aussi connu sous le nom de Shawiiz_z, et j'ai 20 ans. J'adore les
                            nouvelles
                            technologies et la programmation, et j'apprends à coder par moi-même depuis quelques années.
                            J'ai déjà réalisé quelques projets personnels et aussi des projets en équipe. J'utilise
                            principalement les langages JavaScript, Java, HTML et CSS, et j'aime la communauté open
                            source
                            ainsi que développer des projets avec mes amis.</p>
                    </div>
                    <Image src={pcImage} alt={'Computer science'}
                           className={`hidden md:block w-[30vw] h-auto shadow mr-12`} />
                </section>
                <section className={`flex flex-row-reverse justify-evenly items-center md:w-full w-[80%] pt-20 pb-20`}>
                    <div className={`text-center`}>
                        <h2 className={`text-[4.5em] ${passionOne.className} parcoursGradient font-semibold`}>Mes
                            études</h2>
                        <p className={`pt-5 tracking-[.054em] max-w-4xl text-white font-semibold text-[1.7rem] leading-[1.2em]`}>J'ai
                            commencé à apprendre le code par moi-même en 2019, en faisant de la programmation en Java.
                            Quand
                            j'étais au lycée, j'ai prit la spécialité Système d'information et numérique de la filière
                            STI2D
                            pour en apprendre plus sur la programmation et les nouvelles technologies. Je suis
                            actuellement
                            en BUT Informatique à l'IUT Lyon 1 et je vais continuer dans cette voie, pour ensuite
                            travailler
                            dans l'informatique.</p>
                    </div>
                    <Image src={schoolImage} alt={'School'} className={`hidden md:block w-[25vw] h-auto shadow`} />
                </section>
                <section
                    className={`pt-20 pb-20 flex flex-col md:flex-row justify-center items-center md:justify-around gap-12`}>
                    <ProjectView projects={projects.personal} title={'Solo projects'} />
                    <ProjectView projects={projects.team} title={'Team projects'} backgroundGradient={'teamGradient'} />
                </section>
                <section className={`flex justify-evenly items-center md:w-full w-[80%] pt-20 pb-20`}>
                    <div className={`flex flex-col justify-center items-center`}>
                        <h2 className={`text-[4.5em] ${passionOne.className} skillsGradient font-semibold`}>Compétences</h2>
                        <p className={`pt-5 tracking-[.054em] text-white font-semibold text-[1.5rem] leading-[1.2em] text-center max-w-screen-md`}>Grâce
                            à ma formation en BUT Informatique à l'IUT Lyon 1, j'ai acquis diverses compétences, de la
                            programmation à la gestion de projets, en passant par l'administration de systèmes
                            complexes.</p>
                        <div className={`flex flex-row flex-wrap gap-10 justify-center mt-20 ml-5 mr-5`}>
                            {
                                skills.map((skill, index) => <SkillCard skill={skill} key={index} />)
                            }
                        </div>
                    </div>
                </section>
                <section className={`flex text-center justify-around items-center ml-10 mr-10 pt-20 md:w-full w-80%`}>
                    <div className={`text-left`}>
                        <h2 className={`text-[4.5em] ${passionOne.className} contactGradient font-semibold mb-5`}>Contact</h2>
                        <p className={`pb-5 text-2xl tracking-[.054em] font-bold`}>You can talk to me using:</p>
                        <p>Discord: <Link href={`https://discord.com/users/436832490263412736`}
                                          className={`decoration-0 tracking-[.054em] font-extralight`}>shawiiz_z</Link>
                        </p>
                        <p>Mail: <Link href={`mailto:shaweereso@gmail.com`}
                                       className={`decoration-0 tracking-[.054em] font-extralight`}>shaweereso@gmail.com</Link>
                        </p>
                        <h3 className={`text-3xl tracking-[.054em] font-bold mt-10`}>I also have a <Link
                            href={`https://github.com/Shawiizz`}
                            className={`decoration-dotted tracking-[.054em] font-extralight`}>GitHub</Link> profile.
                        </h3>
                    </div>
                    <Image src={contactImage} alt={'Contact'}
                           className={`hidden md:block w-[30vw] h-auto shadow mb-20`} />
                </section>
                <footer className={`flex justify-center items-center w-full h-[10vh] bg-black mt-20`}>
                    <Image src={shawiizzIcon} alt={'Shawiiz_z logo'} className={`w-[7vh] h-auto`} />
                    <p className={`text-center font-extralight`}>Shawiiz_z ©{new Date().getFullYear()} — Portfolio
                        Website</p>
                </footer>
            </main>
        </Flowbite>
    )
}

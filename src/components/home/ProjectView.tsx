import { Project } from '@/util/data/Projects'
import { ProjectCard } from '@/components/home/ProjectCard'
import { Flowbite, Pagination } from 'flowbite-react'
import React, { useState } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { flowbiteTheme } from '@/util/FlowbiteTheme'

export interface ProjectViewProps {
    projects: Project[]
    title: string
    backgroundGradient?: string
}

export default function ProjectView({ projects, title, backgroundGradient }: ProjectViewProps) {
    const strings = useAppSelector(selectTranslations)
    const [personalPage, setPersonalPage] = useState(1)

    const personalPageChange = (pageNumber: number) => {
        setPersonalPage(pageNumber)
    }

    return (
        <Flowbite theme={{ theme: { pagination: flowbiteTheme.pagination } }}>
            <div
                className={`border dark:border-none border-gray-300 dark:bg-gray-800 md:w-[45%] w-[90%] h-full rounded-2xl dark:drop-shadow-2xl flex flex-col items-center pb-6`}>
                <h2 className={`text-gray-800 dark:text-white text-center mt-8 tracking-[.213em] uppercase text-3xl font-bold`}>{title}</h2>
                <div
                    className={`flex flex-col w-full flex-wrap md:flex-row md:gap-8 md:items-stretch mt-8 justify-center`}>
                    {
                        projects.map((project, index) => {
                            if (index >= personalPage * 4 || index < (personalPage - 1) * 4) return null

                            return (
                                <ProjectCard key={index} {...project} />
                            )
                        })
                    }
                </div>
                <div className={`mb-2 mt-6 ${projects.length < 5 && 'hidden'}`}>
                    <Pagination currentPage={personalPage} totalPages={Math.ceil(projects.length / 4)}
                                onPageChange={personalPageChange}
                                previousLabel={strings['pagination.previous']}
                                nextLabel={strings['pagination.next']}
                                theme={flowbiteTheme.pagination}
                                showIcons />
                </div>
            </div>
        </Flowbite>
    )
}
import { Project, projects } from '@/util/data/Projects'
import { ProjectCard } from '@/components/home/ProjectCard'
import { Pagination } from 'flowbite-react'
import React, { useState } from 'react'

export interface ProjectViewProps {
    projects: Project[]
    title: string
    backgroundGradient?: string
}

export default function ProjectView({ projects, title, backgroundGradient }: ProjectViewProps) {
    const [personalPage, setPersonalPage] = useState(1)

    const personalPageChange = (pageNumber: number) => {
        setPersonalPage(pageNumber)
    }

    return (
        <div
            className={`${backgroundGradient ?? 'personalGradient'} md:w-[40%] w-[90%] h-full rounded-2xl drop-shadow-2xl flex flex-col items-center`}>
            <h2 className={`text-white text-center mt-8 tracking-[.213em] uppercase text-3xl font-bold`}>{title}</h2>
            <div className={`flex justify-around w-full pt-12 flex-wrap`}>
                {
                    projects.map((project, index) => {
                        if(index >= personalPage * 4 || index < (personalPage - 1) * 4) return null

                        return (
                            <ProjectCard key={index} {...project} />
                        )
                    })
                }
            </div>
            <div className={`mb-6 ${projects.length < 5 && 'hidden'}`}>
                <Pagination currentPage={personalPage} totalPages={Math.ceil(projects.length / 4)}
                            onPageChange={personalPageChange}
                            showIcons />
            </div>
        </div>
    )
}
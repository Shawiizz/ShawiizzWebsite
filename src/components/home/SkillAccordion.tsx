'use client'

import { Accordion, Flowbite } from 'flowbite-react'
import React from 'react'
import { skills } from '@/util/data/Skills'
import { Random } from '@/util/Random'
import { flowbiteTheme } from '@/util/FlowbiteTheme'

export default function SkillAccordion() {
    return (
        <Flowbite theme={{ theme: { accordion: flowbiteTheme.accordion } }}>
            <Accordion key={Random.string(12)}>
                {
                    skills.map((skill, index) => <Accordion.Panel key={index}>
                        <Accordion.Title>{skill.name}</Accordion.Title>
                        <Accordion.Content>
                            <ul className={`list-disc ml-3 transition-opacity duration-500 ease-in-out`}>
                                {
                                    skill.description.map((desc, index) => {
                                        return (
                                            <li key={index}
                                                className='font-semibold text-gray-700 dark:text-gray-300 text-left'>{desc}</li>
                                        )
                                    })
                                }
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>)
                }

            </Accordion>
        </Flowbite>
    )
}
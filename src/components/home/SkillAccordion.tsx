import { Accordion } from 'flowbite-react'
import React from 'react'
import { skills } from '@/util/data/Skills'

export default function SkillAccordion() {
    return (
        <Accordion>
            {
                skills.map((skill, index) => <Accordion.Panel>
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
    )
}
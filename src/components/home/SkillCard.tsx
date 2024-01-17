import { Card } from 'flowbite-react'
import React from 'react'
import { Skill } from '@/util/Skills'

export interface SkillCardProps {
    index: number
    skill: Skill
}

export default function SkillCard({ index, skill }: SkillCardProps) {
    const [isExpanded, setIsExpanded] = React.useState(false)

    const onArrowClick = () => {
        setIsExpanded(!isExpanded)


    }

    return (
        <Card key={index} className='max-w-sm'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {skill.name}
            </h5>
            <ul className={`list-disc ml-3 ${!isExpanded && 'hidden'} transition-opacity duration-500 ease-in-out`}>
                {
                    skill.description.map((desc, index) => {
                        return (
                            <li key={index}
                                className='font-normal text-gray-700 dark:text-gray-400 text-left'>{desc}</li>
                        )
                    })
                }
            </ul>
            <div className={`w-full flex justify-center items-center mt-5 cursor-pointer`}>
                <div className={`rounded-full p-3 bg-gray-700`} onClick={onArrowClick}>
                    <svg fill='#ffffff' height='25px' width='25px' version='1.1'
                         id='Layer_1'
                         xmlns='http://www.w3.org/2000/svg'
                         viewBox='0 0 330 330'
                         className={`pt-[.2rem] ${isExpanded && 'rotate-180'} transition-transform duration-500 ease-in-out transform`}>
                        <path id='XMLID_225_' d='M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z' />
                    </svg>
                </div>
            </div>

        </Card>
    )
}
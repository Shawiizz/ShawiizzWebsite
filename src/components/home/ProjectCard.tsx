import Image from 'next/image'
import { Project } from '@/util/data/Projects'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'
import { Button, Card, Tooltip } from 'flowbite-react'
import React from 'react'
import { selectTheme } from '@/features/theme/ThemeSlice'

export const ProjectCard = ({ name, description, link, technologies }: Project) => {
    const strings = useAppSelector(selectTranslations)
    const mode = useAppSelector(selectTheme)

    const [technologyVisible, setTechnologyVisible] = React.useState(false)

    const technologyClick = () => {
        setTechnologyVisible(!technologyVisible)
    }

    return (
        <Card
            className='max-w-sm dark:bg-gray-700 border border-gray-300 dark:border-none mr-4 ml-4 md:mr-0 md:ml-0'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {name}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-300'>
                {strings.hasOwnProperty(description) ? strings[description as StringKey] : description}
            </p>
            <div className={`flex flex-row gap-2`}>
                <Tooltip content={
                    <div className={`flex flex-col dark:bg-gray-900`}>
                        <p className={`font-bold text-center text-lg mt-2 mb-2`}>{strings['header.technologies']}</p>
                        <div className='my-1 h-px bg-gray-100 dark:bg-gray-600'></div>
                        <div className={`flex justify-start mt-4 flex-wrap gap-4`}>
                            {technologies?.map((tech, index) => {
                                    return (
                                        <a key={index} className={`flex flex-row gap-2 items-center`} href={tech.homepage}
                                           target={`_blank`}>
                                            <Image src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                                                   alt={tech.displayName} width={32} height={32} />
                                            <p>{tech.displayName}</p>
                                        </a>
                                    )
                                }
                            )}
                        </div>
                    </div>
                } className={`dark:bg-gray-900 pb-4 max-w-sm`}>
                    <Button color={`gray`} onClick={technologyClick}>
                        {strings['header.technologies']}
                    </Button>
                </Tooltip>
                <Button color={`blue`} href={link.href} target='_blank'>
                    {strings['button.sourcecode']}
                    <svg className='-mr-1 ml-2 h-5 w-5' fill='currentColor' viewBox='0 0 20 20'
                         xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>
                        <path
                            d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
                    </svg>
                </Button>
            </div>
        </Card>
    )
}
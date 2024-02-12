import { Pagination, Tabs } from 'flowbite-react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { technologies, TECHNOLOGIES_TYPES, technologyLevels, TechnologyTypeKeys } from '@/util/data/Technologies'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/features/theme/ThemeSlice'
import Image from 'next/image'

const Technologies = () => {
    const mode = useSelector(selectTheme)
    const strings = useAppSelector(selectTranslations)
    const [page, setPage] = useState(1)

    const pageChange = (pageNumber: number) => {
        setPage(pageNumber)
    }

    const tabChange = () => {
        setPage(1)
    }

    return (

        <Tabs aria-label='Tabs with underline' style='underline' onActiveTabChange={tabChange}>
            {Object.entries(TECHNOLOGIES_TYPES).map(([name, props], index) => (
                <Tabs.Item key={index} title={strings[props.displayName]} icon={props.icon}>
                    <div className={`flex flex-col`}>
                        {
                            technologies.filter(tech => tech.type.includes(name as TechnologyTypeKeys))
                                .sort((a, b) => technologyLevels[b.level].level - technologyLevels[a.level].level)
                                .slice((page - 1) * 4, page * 4)
                                .map((tech, index) => {
                                    return (
                                        <div key={index}
                                             className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
                                            <div className='flex items-center space-x-4'>
                                                <Image src={mode === 'dark' ? tech.icon.dark : tech.icon.white}
                                                       alt={tech.displayName}
                                                       width={48} height={48} className='w-12 h-12' />
                                                <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>{tech.displayName}</h2>
                                            </div>
                                            <div className='flex items-center space-x-4'>
                                                <p className='text-sm text-gray-500 dark:text-gray-400'>{strings['home.level']}
                                                    {strings[technologyLevels[tech.level].displayName]}</p>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                        <div
                            className={`mb-6 self-center mt-4 ${technologies.filter(tech => tech.type.includes(name as TechnologyTypeKeys)).length < 5 && 'hidden'}`}>
                            <Pagination currentPage={page}
                                        totalPages={Math.ceil(technologies.filter(tech => tech.type.includes(name as TechnologyTypeKeys)).length / 4)}
                                        onPageChange={pageChange}
                                        previousLabel={strings['pagination.previous']}
                                        nextLabel={strings['pagination.next']}
                                        showIcons />
                        </div>
                    </div>
                </Tabs.Item>
            ))}
        </Tabs>
    )
}


export default Technologies

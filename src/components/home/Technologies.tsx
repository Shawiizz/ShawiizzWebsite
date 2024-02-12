import { Tabs } from 'flowbite-react'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { technologies, TECHNOLOGIES_TYPES, technologyLevels, TechnologyTypeKeys } from '@/util/data/Technologies'

const Technologies = () => {
    const strings = useAppSelector(selectTranslations)

    return (
        <Tabs aria-label='Tabs with underline' style='underline'>
            {Object.entries(TECHNOLOGIES_TYPES).map(([name, props], index) => (
                <Tabs.Item key={index} title={strings[props.displayName]} icon={props.icon}>
                    {
                        technologies.filter(tech => tech.type.includes(name as TechnologyTypeKeys)).
                        sort((a, b) => technologyLevels[b.level].level - technologyLevels[a.level].level).
                        map((tech, index) => {
                            return (
                                <div key={index}
                                     className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
                                    <div className='flex items-center space-x-4'>
                                        <img src={`https://skillicons.dev/icons?i=${tech.icon}`} alt={tech.displayName}
                                             className='w-12 h-12' />
                                        <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200'>{tech.displayName}</h2>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <p className='text-sm text-gray-500 dark:text-gray-400'>{strings['home.level']}
                                            : {strings[technologyLevels[tech.level].displayName]}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Tabs.Item>
            ))}
        </Tabs>
    )
}


export default Technologies

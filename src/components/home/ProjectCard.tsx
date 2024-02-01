import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/util/data/Projects'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations, StringKey } from '@/features/i18n/TranslatorSlice'

export const ProjectCard = ({ name, description, link }: Project) => {
    const strings = useAppSelector(selectTranslations)

    return (
        <div className='card mb-10 cursor-pointer border border-white rounded-[10px] h-fit md:w-[40%] ml-4 mr-4 md:ml-0 md:mr-0 hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <h2 className={`text-white uppercase m-2.5 tracking-[.216em] text-base font-bold break-words`}>{name}</h2>
            <p className={`text-white break-words ml-2.5 font-normal mr-1 leading-[1.3em]`}>{strings.hasOwnProperty(description) ? strings[description as StringKey] : description}</p>
            <Link href={link.href}>
                <Image alt='ProjectCard image' src={link.image} className={`w-5 h-auto float-right mr-1 pb-1`}/>
            </Link>
        </div>
    )
}
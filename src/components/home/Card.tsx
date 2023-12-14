import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/util/Projects'

export const Card = ({ name, description, link }: Project) => {
    return (
        <div className='card mb-10'>
            <h2 className={`text-white uppercase m-2.5 tracking-[.216em] text-base font-bold break-words`}>{name}</h2>
            <p className={`text-white break-words ml-2.5 font-normal mr-1 leading-[1.3em]`}>{description}</p>
            <Link href={link.href}>
                <Image alt='Card image' src={link.image} className={`w-5 h-auto float-right mr-1 pb-1`}/>
            </Link>
        </div>
    )
}
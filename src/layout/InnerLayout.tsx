'use client'

import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { ReactNode, useEffect } from 'react'
import Header from '@/components/Header'

export function InnerLayout({ children }: { children: ReactNode }) {
    const strings = useAppSelector(selectTranslations)

    useEffect(() => {
        document.title = strings['metadata.title']
        document.querySelector('meta[name="description"]')?.setAttribute('content', strings['metadata.description'])
    }, [strings])

    return (
        <>
            <Header />
            {children}
        </>
    )
}
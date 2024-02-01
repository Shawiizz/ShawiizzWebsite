import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import { quicksand } from '@/app/fonts'
import Providers from '@/app/Provider'

export const metadata: Metadata = {
    title: 'Shawiiz_z\'s Portfolio',
    description: 'Welcome to my portfolio'
}

export default function RootLayout({
                                       children
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang='fr' className={`scroll-smooth`}>
        <body className={quicksand.className}>
        <div className={`fixed w-full h-screen dark:bg-[linear-gradient(black,#00001c)] -z-10`}></div>
        <Providers>
            <Header />
            {children}
        </Providers>
        </body>
        </html>
    )
}

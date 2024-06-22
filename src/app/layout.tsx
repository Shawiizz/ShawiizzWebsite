import './globals.css'
import { ReactNode } from 'react'
import { quicksand } from '@/app/fonts'
import Providers from '@/app/Provider'
import { InnerLayout } from '@/layout/InnerLayout'

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
            <InnerLayout>
                {children}
            </InnerLayout>
        </Providers>
        </body>
        </html>
    )
}

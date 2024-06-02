import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'
import { useEffect, useState } from 'react'

interface ModalLayoutProps {
    children: React.ReactNode
    onClose?: () => void
}

export const ModalLayout = ({ children, onClose }: ModalLayoutProps) => {
    const strings = useAppSelector(selectTranslations)
    const [closed, setClosed] = useState(false)

    useEffect(() => {
        // Disable scrolling when the component is mounted
        document.body.style.overflow = 'hidden'

        // Enable scrolling when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const defaultClose = () => {
        onClose?.()
        setClosed(true)
    }

    if (closed && !onClose) return (<></>)

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`} style={
            {background: 'rgba(0,0,0,0.85)'} // why is this not working in tailwindcss?
        }>
            <button className={`mt-4 text-white bg-red-600 px-6 py-2 text-md rounded-lg absolute top-0 right-0 mr-4 z-50`}
                    onClick={defaultClose}>{strings['button.close']}
            </button>
            {children}
        </div>
    )
}
import { passionOne } from '@/app/fonts'
import React, { useEffect } from 'react'
import { useAppSelector } from '@/util/redux/Hooks'
import { selectTranslations } from '@/features/i18n/TranslatorSlice'

export default function AnimatedTitle() {
    const strings = useAppSelector(selectTranslations)
    const [titleValue, setTitleValue] = React.useState<string>('')
    const [animationFinished, setAnimationFinished] = React.useState<boolean>(true)

    useEffect(() => {
        let animationEnabled = true

        async function textAnimation(text: string, wait: number = 5000, write: number = 200, erase: number = 100) {
            for (let i = 0; i < text.length; i++) {
                setTitleValue(text.substring(0, i + 1))
                await new Promise((resolve) => setTimeout(resolve, write))
            }
            await new Promise((resolve) => setTimeout(resolve, wait))
            for (let i = text.length; i > 0; i--) {
                setTitleValue(text.substring(0, i - 1))
                await new Promise((resolve) => setTimeout(resolve, erase))
            }
        }

        async function executeTextAnimations() {
            if(!animationEnabled) return

            if(!animationFinished) {
                await new Promise((resolve) => setTimeout(resolve, 1000))
                await executeTextAnimations()
                return
            }

            setAnimationFinished(false)
            await textAnimation("Shawiiz_z");
            await textAnimation(strings['home.title.animation.1'], 500, 100, 50);
            await textAnimation(strings['home.title.animation.2'], 200, 100, 50);
            await textAnimation(strings['home.title.animation.3'], 200, 100, 50);
            await textAnimation(strings['home.title.animation.4'], 500, 100, 50);
            await textAnimation(":)", 200, 100, 100);

            setAnimationFinished(true)
            await executeTextAnimations()
        }

        executeTextAnimations().catch(console.error)

        return () => {
            setTitleValue('')
            animationEnabled = false
        }
    }, [strings])

    return (
        <h1 className={`text-center text-white md:text-[5em] text-[4em] font-bold rounded leading-[1.2em] md:w-[26rem] w-[22rem] ${passionOne.className} bg-title-gradient`}>&nbsp;{titleValue}&nbsp;</h1>
    )
}
import { passionOne } from '@/app/fonts'
import React, { useEffect } from 'react'

export default function AnimatedTitle() {
    const [titleValue, setTitleValue] = React.useState<string>('')

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

            await textAnimation("Shawiiz_z");
            await textAnimation("Welcome", 500, 100, 50);
            await textAnimation("to", 200, 100, 50);
            await textAnimation("my", 200, 100, 50);
            await textAnimation("website", 500, 100, 50);
            await textAnimation(":)", 200, 100, 100);

            await executeTextAnimations()
        }

        executeTextAnimations().catch(console.error)

        return () => {
            setTitleValue('')
            animationEnabled = false
        }
    }, [])

    return (
        <h1 className={`text-center text-white md:text-[5em] text-[4em] font-bold rounded leading-[1.2em] md:w-[26rem] w-[22rem] ${passionOne.className} bg-title-gradient`}>&nbsp;{titleValue}&nbsp;</h1>
    )
}
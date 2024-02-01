import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { LocaleState, selectTranslations, setLocale } from '@/features/i18n/TranslatorSlice'
import { getFlag, getLocales, locales } from '@/i18n/Language'
import { Dropdown } from 'flowbite-react'
import { useAppSelector } from '@/util/redux/Hooks'

const LanguageSelector = () => {
    const strings = useAppSelector(selectTranslations)
    const dispatch = useDispatch()

    function handleLanguageChange(locale: LocaleState, saveToStorage: boolean = true) {
        locales.current = locale

        // Merge strings from default locale with the selected locale
        const mergedStrings = Object.assign({}, locales.default.strings, locale.strings)
        dispatch(setLocale({ ...locale, strings: mergedStrings }))
        saveToStorage && localStorage.setItem('locale', locales.current.initials)
    }

    useEffect(() => {
        const getBrowserLanguage = () => {
            return localStorage.getItem('locale') || (navigator.language.includes('-') ? navigator.language.split('-')[0] : navigator.language)
        }

        handleLanguageChange(locales.available.find(locale => locale.initials === getBrowserLanguage()) || locales.current, false)
    }, [dispatch])

    return (
        <Dropdown label={strings['button.language']} color={'blue'}>
            {getLocales().available.map((locale, index) => {
                return (
                    <Dropdown.Item key={index} icon={getFlag(locale)}
                                   className={`${locales.current.name === locale.name ? 'bg-blue-600' : ''}`}
                                   onClick={() => handleLanguageChange(locale)}>{locale.name}</Dropdown.Item>
                )
            })}
        </Dropdown>
    )
}

export default LanguageSelector
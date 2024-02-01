import frTranslation from '@/i18n/translations/fr'
import enTranslation from '@/i18n/translations/en'
import { LocaleState } from '@/features/i18n/TranslatorSlice'
import FrenchFlag from '@/components/flags/FrenchFlag'
import EnglishFlag from '@/components/flags/EnglishFlag'

const availableLocales = [frTranslation, enTranslation]

interface LocalesInterface {
    default: LocaleState;
    current: LocaleState;
    available: LocaleState[];
}

export const locales: LocalesInterface = {
    default: frTranslation,
    current: frTranslation,
    available: availableLocales as LocaleState[]
}

export const getCurrentLocale = () => {
    const mergedStrings = Object.assign({}, locales.default.strings, locales.current.strings)
    return {
        ...locales.current,
        strings: mergedStrings
    }
}

export const getFlag = (locale: LocaleState) => {
    switch (locale.initials) {
        case 'fr':
            return FrenchFlag
        case 'en':
            return EnglishFlag
        default:
            return FrenchFlag
    }
}

export const getLocales = () => {
    return locales
}
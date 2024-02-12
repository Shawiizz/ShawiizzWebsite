import { AppState } from '@/util/redux/Store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { locales } from '@/i18n/Language'
import frTranslation from '@/i18n/translations/fr'

// Use this interface for languages that are not yet fully translated (fallback to English, so it will never return undefined for any valid translation key)
export type PartialLocaleState = Omit<LocaleState, 'strings'> & {
    strings?: Partial<LocaleState['strings']>;
};

export interface LocaleState {
    name: string;
    initials: string;
    strings: Record<StringKey, string>;
}

export type StringKey = keyof typeof frTranslation.strings;

const initialState: LocaleState = locales.current

export const translatorSlice = createSlice({
    name: 'translations',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<LocaleState>) => {
            return action.payload
        }
    }
})

export const { setLocale } = translatorSlice.actions

export const selectTranslations = (state: AppState) => state.translator.strings

export default translatorSlice.reducer
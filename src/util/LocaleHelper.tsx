import {LocaleState} from "@/features/i18n/TranslatorSlice";

/**
 * Returns an array of strings that are between % signs with the original ones.
 * Example: "Hello %name%" will return ["Hello ", "name"]
 *
 * @param str The string to parse
 */
export function getLocaleStringAsArgs(str: string): string[] {
    return str ? str.split(/%([^%]+)%/).filter(Boolean) : [];
}
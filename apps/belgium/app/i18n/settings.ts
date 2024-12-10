export type LANG_CODE = "fr" | "nl";

export const defaultLanguage: LANG_CODE = "fr";
export const languages: LANG_CODE[] = ["fr", "nl"];
export const defaultNS = "common";
export const languageCookieName = "i18next";

export function getOptions(lng = defaultLanguage, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    defaultLanguage,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    keyPrefix: "t",
  };
}

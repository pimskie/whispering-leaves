import { type TFunction, type i18n, createInstance } from "i18next";

import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, defaultNS } from "./settings";

import type { LANG_CODE } from "./settings";

const initI18next = async (language: LANG_CODE, namespace: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(language, namespace));

  return i18nInstance;
};

export async function useTranslation(
  lang: LANG_CODE,
  ns = defaultNS
): Promise<{ t: TFunction; i18n: i18n }> {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}

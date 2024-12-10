import { Trans } from "react-i18next/TransWithoutContext";

import { Link } from "@repo/ui/Link";
import { useTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import type { LANG_CODE } from "../i18n/settings";

export interface PageProps {
  params: Promise<{ lang: LANG_CODE }>;
}

export default async ({ params }: Readonly<PageProps>) => {
  const lang = (await params).lang;
  const { t: commonTranslations } = await useTranslation(lang);
  const { t: footerTranslations } = await useTranslation(lang, "footer");

  const otherLanguages = languages.filter((l) => l !== lang);

  return (
    <div>
      <div>
        <h1>{commonTranslations("greeting")}</h1>
      </div>

      <div>
        {footerTranslations("switchLanguage", { from: lang })}

        {otherLanguages.map((l) => (
          <Link key={l} href={l}>
            {l}
          </Link>
        ))}
      </div>
    </div>
  );
};

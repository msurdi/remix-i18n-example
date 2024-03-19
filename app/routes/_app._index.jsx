import { Link, json, redirect, useLoaderData } from "@remix-run/react";
import useTranslation from "../hooks/useTranslation.js";
import { setLanguage } from "../lib/i18n.js";

export const loader = async () =>
  json({
    serverTime: new Date(),
  });

export const action = async ({ request }) => {
  const { lang } = Object.fromEntries(await request.formData());

  setLanguage(lang);

  return redirect("/");
};

function IndexPage() {
  const { t } = useTranslation();
  const { serverTime } = useLoaderData();

  return (
    <div>
      <div>{t("time", { time: serverTime })}</div>
      <p>
        {/* You can interpolate any React component into the messages. */}
        {t("change-language", {
          url: <Link to="/settings">{t("settings-page")}</Link>,
        })}
      </p>
    </div>
  );
}

export default IndexPage;

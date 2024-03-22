import { Form, Link, redirect } from "@remix-run/react";
import useTranslation from "../hooks/useTranslation.js";
import { setLanguage } from "../lib/i18n.js";

export const action = async ({ request }) => {
  const { lang } = Object.fromEntries(await request.formData());

  setLanguage(lang);

  return redirect("/");
};

function SettingsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <Form method="post">
          <button name="lang" value="en" type="submit">
            {t("english")}
          </button>
          <button name="lang" value="es" type="submit">
            {t("spanish")}
          </button>
        </Form>
      </div>
      <div>
        <Link to="/">{t("back")}</Link>
      </div>
    </div>
  );
}

export default SettingsPage;

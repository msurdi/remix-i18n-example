import { Outlet, json } from "@remix-run/react";
import { getLanguage, locales, translate } from "../lib/i18n.js";

/**
 * Any content returned from this loader will be rendered only on first (SSR'ed) page load
 * and never when performing client navigations, which is what we want for translations.
 */
export const shouldRevalidate = false;

export const loader = async () => {
  // Get the user's current preferred language.
  const currentLanguage = getLanguage();

  // Server side translations can be done like this.
  // eslint-disable-next-line no-console
  console.log(translate(currentLanguage)("hello", { where: "server" }));

  // Data to be sent only once on first page load.
  return json({
    messages: locales[currentLanguage],
    currentLanguage,
  });
};

function AppLayout() {
  return <Outlet />;
}

export default AppLayout;

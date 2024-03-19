import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import useTranslation from "./hooks/useTranslation.js";

export default function App() {
  const { t, currentLanguage } = useTranslation();

  return (
    <html lang={currentLanguage}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>{t("welcome")}</div>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

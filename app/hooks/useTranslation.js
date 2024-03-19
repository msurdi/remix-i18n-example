import { useRouteLoaderData } from "@remix-run/react";
import { useCallback } from "react";
import { translator } from "../lib/i18n.js";

/**
 * Hook to perform translations in the frontend
 * @returns
 */
const useTranslation = () => {
  const { messages, currentLanguage } = useRouteLoaderData("routes/_app");

  const t = useCallback(translator(messages), [messages]);

  return { t, currentLanguage };
};

export default useTranslation;

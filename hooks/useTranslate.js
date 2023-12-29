import React, { useCallback, useMemo } from "react";

const useTranslate = () => {
  const lang = "vn";

  const languages = useMemo(async () => {
    const [en, vn] = await Promise.all([
      require("lang/en-US.json"),
      require("lang/vn.json"),
    ]);

    if (en && vn) {
      return lang === "en" ? en : vn;
    }
    return {};
  }, [lang]);

  const localizeMessage = useCallback((id) => {
    const translation = languages[id];
    return translation ? translation : id;
  }, []);

  return { localizeMessage };
};

export default useTranslate;

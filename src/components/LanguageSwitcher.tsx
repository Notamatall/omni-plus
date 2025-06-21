import { useTranslation } from "react-i18next";
import { useState } from "react";

const LANGUAGES = [
  { code: "ru", label: "🇷🇺 RU" },
  { code: "ua", label: "🇺🇦 UA" },
  { code: "en", label: "🇬🇧 ENG" },
];

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((lang) => lang.code === i18n.language);

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left min-w-[105px]">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white hover:bg-gray-50"
      >
        {current?.label}
        <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.5 7l4.5 4 4.5-4" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-white border  divide-y divide-gray-100 rounded-md shadow-lg">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                style={{ whiteSpace: "nowrap" }}
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

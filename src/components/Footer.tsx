"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-blue-900/20 bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-blue-400 font-bold tracking-wide">
          NG<span className="text-blue-600">.</span>
        </span>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Nicolas Garzon.{" "}
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

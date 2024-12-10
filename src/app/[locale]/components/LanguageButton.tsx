"use client";
import React from "react";
import { usePathname } from "@/i18n/routing";
import { useRouter } from "next/navigation";

export const LanguageButton = ({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const switchLanguage = () => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <button onClick={switchLanguage} className="py-2 text-white">
      {children}
    </button>
  );
};

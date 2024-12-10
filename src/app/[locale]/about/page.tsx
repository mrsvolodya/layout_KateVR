"use client";

import Card from "@/app/[locale]/components/Card";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const path = usePathname();
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <Card>
      <h1>About page</h1>
      <p>Current path is: {path}</p>
      <button onClick={handleOnClick}>Navigate to homepage</button>
    </Card>
  );
};

export default About;

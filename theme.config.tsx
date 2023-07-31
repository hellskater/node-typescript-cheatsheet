import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        src="/logo.png"
        width="30"
        height="30"
        style={{ marginRight: "10px", objectFit: "contain" }}
        alt="Node.js TypeScript Cheatsheet"
      />
      <span
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Node.js TypeScript Cheatsheet
      </span>
    </>
  ),
  project: {
    link: "https://github.com/hellskater/node-typescript-cheatsheet",
  },
  docsRepositoryBase:
    "https://github.com/hellskater/node-typescript-cheatsheet/blob/master",
  primaryHue: 29,
  useNextSeoProps() {
    return {
      defaultTitle: "Node.js TypeScript Cheatsheet",
      titleTemplate: "%s | Node.js TypeScript Cheatsheet",
      description:
        "Node.js TypeScript Cheatsheet is a comprehensive guide to using TypeScript with Node.js. It includes everything you need to know about TypeScript, from the basics to advanced topics like generics and decorators. This book is perfect for anyone who wants to learn how to use TypeScript in their Node.js projects.",
      openGraph: {
        title: "Node.js TypeScript Cheatsheet",
        description:
          "Node.js TypeScript Cheatsheet is a comprehensive guide to using TypeScript with Node.js. It includes everything you need to know about TypeScript, from the basics to advanced topics like generics and decorators. This book is perfect for anyone who wants to learn how to use TypeScript in their Node.js projects.",
        images: [
          {
            url: "https://raw.githubusercontent.com/hellskater/node-typescript-cheatsheet/master/public/logo.png",
            width: 800,
            height: 600,
            alt: "Node.js TypeScript Cheatsheet",
          },
        ],
      },
    };
  },
  darkMode: false,
  head: () => (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/jpg" sizes="32x32" href="/logo.png" />
    </>
  ),
};

export default config;

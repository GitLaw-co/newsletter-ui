import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f7f6ff",
        },
        {
          name: "dark",
          value: "#1b1b1f",
        },
        {
          name: "white",
          value: "#ffffff",
        },
        {
          name: "email-green",
          value: "#EBFAEE",
        },
      ],
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Email",
          [
            "EmailWrapper",
            "EmailHeader",
            "EmailHero",
            "EmailButton",
            "EmailDivider",
            "EmailSectionHeader",
            "EmailFeatureBlock",
            "EmailTemplateCard",
            "EmailFooter",
            "All Templates",
          ],
        ],
      },
    },
  },
};

export default preview;

import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    compress(),
    partytown({
      config: { forward: ["dataLayer.push"] },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
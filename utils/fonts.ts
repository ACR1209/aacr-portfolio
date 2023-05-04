import { Adamina, Fira_Code } from "next/font/google";

export const adaminaFont = Adamina({
  subsets: ["latin"],
  weight: "400",
});

export const firaCodeFont = Fira_Code({
  weight: ["400", "300", "500", "600", "700"],
  subsets: ["latin"],
});

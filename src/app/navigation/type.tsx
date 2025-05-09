import type { StaticImageData } from "next/image";
type TabLabel = "React" | "TypeScript" | "JavaScript" | "PHP" | "AWS";

export type TabItem = {
  icon: StaticImageData;
  label: TabLabel;
};

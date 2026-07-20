import type { Metadata } from "next";
import { YouduApp } from "./YouduApp";

export const metadata: Metadata = {
  title: "Toxic to Furry Friends?｜宠物植物毒性查询",
  description: "查询常见植物对猫、狗和马的潜在毒性，查看毒性成分、临床表现与应急信息。",
};

export default function YouduPage() {
  return <YouduApp />;
}

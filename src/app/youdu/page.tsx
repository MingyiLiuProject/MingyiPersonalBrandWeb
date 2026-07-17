import type { Metadata } from "next";
import { YouduApp } from "./YouduApp";

export const metadata: Metadata = {
  title: "Toxic to Furry Friends?｜宠物日常风险查询",
  description: "输入一种成分、材料或使用场景，快速理解它的日常风险与安全边界。",
};

export default function YouduPage() {
  return <YouduApp />;
}

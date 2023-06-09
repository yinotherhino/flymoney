"use client"
import { Lato } from "next/font/google";
import LeftColumn from "@/components/leftColumn/LeftColumn";
import MainGrid from "@/components/mainGrid/MainGrid";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={lato.className + " parent"}>
      <LeftColumn />
      <MainGrid />
    </div>
  );
}

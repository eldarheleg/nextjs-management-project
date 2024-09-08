import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: "400",
});
export const montserrat = Montserrat({
  weight: ["100", "400"],
  subsets: ["latin"],
});

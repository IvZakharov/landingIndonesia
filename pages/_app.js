import "../styles/globals.scss";
import localFont from "@next/font/local";
import { Unbounded } from "@next/font/google";

const unbounded = Unbounded({
  weight: ["700"],
  style: ["normal"],
  subsets: ["cyrillic"],
});

const IBMPlexSans = localFont({
  src: [
    {
      path: "../fonts/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
      preload: true,
      display: "swap",
    },
    {
      path: "../fonts/IBMPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
      preload: true,
      display: "swap",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --unbounded-font: ${unbounded.style.fontFamily};
          --IBMPlexSans-font: ${IBMPlexSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

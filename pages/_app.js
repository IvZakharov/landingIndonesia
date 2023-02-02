import "../styles/globals.scss";
import localFont from "@next/font/local";
import { Unbounded } from "@next/font/google";

const IBMPlexSans = localFont({
  src: [
    {
      path: "../fonts/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/IBMPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const unbounded = Unbounded({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --unbounded-font: ${unbounded.style.fontFamily};
          --IBMPlexSans-font: ${IBMPlexSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

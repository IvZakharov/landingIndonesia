import "../styles/globals.scss";
import { IBM_Plex_Sans, Unbounded } from "@next/font/google";

const IBMPlexSans = IBM_Plex_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
});

const unbounded = Unbounded({
  weight: ["700"],
  style: ["normal"],
  subsets: ["cyrillic"],
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

import "../styles/globals.scss";
import localFont from "@next/font/local";

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

const unbounded = localFont({
  src: [
    {
      path: "../fonts/Unbounded-Bold.ttf",
      weight: "700",
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

import "../styles/globals.scss";
import localFont from "@next/font/local";

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

const unbounded = localFont({
  src: [
    {
      path: "../fonts/Unbounded-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          --IBMPlexSans-font: ${IBMPlexSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

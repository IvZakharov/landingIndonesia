import Head from "next/head";
import React from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Structure from "@/components/Structure/Structure";
import Benefits from "@/components/Benefits/Benefits";
import Advantages from "@/components/Advantages/Advantages";
import Steps from "@/components/Steps/Steps";
import Price from "@/components/Price/Price";
import Partners from "@/components/Partners/Partners";
import Special from "@/components/Special/Special";
import Quote from "@/components/Quote/Quote";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const linkUrl = "https://wa.me/6281337973097";

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const links = [
    { id: 0, href: "/", title: "Главная" },
    { id: 1, href: "#structure", title: "Структура" },
    { id: 2, href: "#advantages", title: "Преимущества" },
    { id: 3, href: "#steps", title: "Процесс открытия" },
    { id: 4, href: "#price", title: "Стоимость" },
    { id: 6, href: "#contacts", title: "Контакты" },
    { id: 5, href: "#faq", title: "FAQ" },
  ];

  const mainLinks = [
    { id: 0, href: "/", title: "Главная" },
    { id: 1, href: "#structure", title: "Структура" },
    { id: 2, href: "#advantages", title: "Преимущества" },
    { id: 3, href: "#steps", title: "Процесс открытия" },
    { id: 4, href: "#price", title: "Стоимость" },
    { id: 5, href: "#faq", title: "FAQ" },
    { id: 6, href: "#contacts", title: "Контакты" },
  ];

  return (
    <>
      <Head>
        <title>Компания и счёт в Индонезии</title>
        <meta
          name="description"
          content="Международные платежи без ограничений, Легальная и выгодная покупка USDT, Открытие онлайн за 15 дней, Стоимость от 10 000 $"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/meta.jpg" />
        <meta name="twitter:image" content="/images/meta.jpg·" />
        <link rel="canonical" href="https://ptpma.pro" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={menuIsOpen ? "overflow-hidden" : ""}>
        <Header onOpenMenu={openMenu} links={mainLinks} />
        <main>
          <div className={"mb-8 md:mb-32 xl:mb-36"}>
            <Hero linkUrl={linkUrl} />
          </div>
          <div className={"mb-36 md:mb-48 xl:mb-72"}>
            <Structure linkUrl={linkUrl} />
          </div>
          <div className={"mb-28 md:mb-40 xl:mb-52"}>
            <Benefits linkUrl={linkUrl} />
          </div>

          <div className={"mb-32 xl:mb-52"}>
            <Advantages />
          </div>

          <div className={"mb-24 xl:mb-36"}>
            <Steps linkUrl={linkUrl} />
          </div>

          <div className={"mb-36 xl:mb-52"}>
            <Price linkUrl={linkUrl} />
          </div>

          <div className={"mb-32 xl:mb-56"}>
            <Partners />
          </div>

          <div className={"mb-32 md:mb-48 xl:mb-72"}>
            <Special linkUrl={linkUrl} />
          </div>

          <div className={"mb-24 md:mb-40 xl:mb-56"}>
            <Quote linkUrl={linkUrl} />
          </div>

          <div className={"mb-32 md:mb-48 xl:mb-96"}>
            <Faq />
          </div>
        </main>
        <Footer tel={"+62 813 3797 3097 "} linkUrl={linkUrl} />

        {menuIsOpen && (
          <MobileMenu
            onCloseMenu={closeMenu}
            tel={"+62 813 3797 3097 "}
            linkUrl={linkUrl}
            links={links}
          />
        )}
      </div>
    </>
  );
}

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

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Компания и счёт в Индонезии</title>
        <meta
          name="description"
          content="Международные платежи без ограничений, Легальная и выгодная покупка USDT, Открытие онлайн за 15 дней, Стоимость от 10 000 $"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onOpenMenu={openMenu} />
      <main>
        <div className={"mb-16 md:mb-32 xl:mb-56"}>
          <Hero />
        </div>
        <div className={"mb-36 md:mb-48 xl:mb-72"}>
          <Structure />
        </div>
        <div className={"mb-36 md:mb-48 xl:mb-72"}>
          <Benefits />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Advantages />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Steps />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Price />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Partners />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Special />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Quote />
        </div>

        <div className={"mb-32 xl:mb-52"}>
          <Faq />
        </div>
      </main>
      <Footer tel={"+62 813 3797 3097 "} />

      {menuIsOpen && (
        <MobileMenu
          onCloseMenu={closeMenu}
          tel={"+62 813 3797 3097 "}
          linkUrl={""}
        />
      )}
    </>
  );
}

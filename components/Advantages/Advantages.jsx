import styles from "./Advantages.module.scss";
import Image from "next/image";
import parse from "html-react-parser";

const items = [
  {
    iconPath: "/images/icons/advantages/1.svg",
    text: "Регистрация юридического лица на граждан РФ и стран СНГ",
  },

  {
    iconPath: "/images/icons/advantages/2.svg",
    text: "Соглашение об избежании двойного налогообложения с большим количеством стран",
  },

  {
    iconPath: "/images/icons/advantages/3.svg",
    text: "Лояльная и стабильная банковская система, деньги хранятся в международной валюте",
  },
  {
    iconPath: "/images/icons/advantages/4.svg",
    text: "Индонезия сохраняет нейтралитет на мировой политической арене",
  },

  {
    iconPath: "/images/icons/advantages/5.svg",
    text: "Приём платежей за оплату услуг компании в криптовалюте",
  },

  {
    iconPath: "/images/icons/advantages/6.svg",
    text: "Почти полное отсутствие налогов в первые три года, и на доходы не превышающие <span>1 000 000 $</span>",
  },
  {
    iconPath: "/images/icons/advantages/7.svg",
    text: "Не требуется единовременное размещение и хранение уставного капитала",
  },

  {
    iconPath: "/images/icons/advantages/8.svg",
    text: "Получение визы KITAS для учредителей сроком на два года с возможностью продления",
  },

  {
    iconPath: "/images/icons/advantages/9.svg",
    text: "Приобретение активов на территории Индонезии на имя компании",
  },
];

const Advantages = () => {
  return (
    <section id={"advantages"} className={"pt-8 xl:pt-20"}>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-center mb-10 md:mb-16 xl:mb-20"}>
          Преимущества Индонезии
        </h2>
        <div className={"grid gap-5"}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <i className={styles.icon}>
                <Image
                  alt={"icons"}
                  src={item.iconPath}
                  quality={100}
                  width={40}
                  height={40}
                />
              </i>
              <p className={"text"}>{parse(item.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

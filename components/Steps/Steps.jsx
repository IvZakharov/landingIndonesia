import styles from "./Steps.module.scss";
import Image from "next/image";

const whatNeedArr = [
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
    text: "Регистрация юридического лица на граждан РФ и стран СНГ",
  },

  {
    iconPath: "/images/icons/advantages/5.svg",
    text: "Индонезия сохраняет нейтралитет на мировой политической арене",
  },

  {
    iconPath: "/images/icons/advantages/6.svg",
    text: "Приём платежей за оплату услуг компании в криптовалюте",
  },
  {
    iconPath: "/images/icons/advantages/7.svg",
    text: "Почти полное отсутствие налогов в первые три года, и на доходы не превышающие 1 000 000 $",
  },

  {
    iconPath: "/images/icons/advantages/8.svg",
    text: "Не требуется единовременное размещение и хранение уставного капитала",
  },

  {
    iconPath: "/images/icons/advantages/9.svg",
    text: "Получение визы KITAS для учредителей сроком на два года с возможностью продления",
  },
];

const Steps = () => {
  return (
    <section className={styles.steps}>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-white mb-10 md:mb-16 xl:mb-20"}>
          Что необходимо <br /> для регистрации?
        </h2>
        <div className={"grid gap-5"}>
          {whatNeedArr.map((item, idx) => (
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
              <p className={"text"}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

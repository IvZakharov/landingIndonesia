import styles from "./Benefits.module.scss";
import Image from "next/image";

const items = [
  {
    iconPath: "/images/icons/benefits/1.svg",
    text: "Индонезийская компания PT PMA. Учредительный состав компании: минимум два акционера нерезидента Индонезии и местный директор. Доля владения акционерами — 100%",
  },

  {
    iconPath: "/images/icons/benefits/2.svg",
    text: "Мультивалютный банковский счёт. Доступен приём международных платежей, в том числе из РФ и СНГ. Отправка международных платежей по SWIFT через интернет-банкинг. Обмен валют без промежуточной конвертации в IDR",
  },

  {
    iconPath: "/images/icons/benefits/3.svg",
    text: "Индонезийская компания PT PMA. Учредительный состав компании: минимум два акционера нерезидента Индонезии и местный директор. Доля владения акционерами — 100%",
  },
];

const Benefits = () => {
  return (
    <section>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-center mb-10 md:mb-16 xl:mb-20"}>
          Состав предложения
        </h2>
        <div className={"grid lg:grid-cols-3 gap-5 xl:gap-10 mb-10 md:mb-20"}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <i className={styles.icon}>
                <Image
                  alt={"icons"}
                  src={item.iconPath}
                  quality={100}
                  width={60}
                  height={475}
                />
              </i>
              <p className={"text text-center"}>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={"flex justify-center"}>
          <button className={`button whitespace-nowrap ${styles.button}`}>
            Подробнее о тарифах и выгодах
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

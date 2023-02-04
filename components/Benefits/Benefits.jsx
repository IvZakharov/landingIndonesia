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
    text: "Криптовалютный счёт \n на Индонезийской бирже, привязан к банковскому счёту компании, пополнение и вывод производятся в IDR. Отправка криптовалюты на сторонние кошельки с высоким лимитом",
  },
];

const Benefits = ({ linkUrl }) => {
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
              <p className={"text text-center whitespace-pre-line"}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className={"flex justify-center"}>
          <a
            href={linkUrl}
            target={"_blank"}
            className={`button button--secondary whitespace-nowrap ${styles.button}`}
          >
            Подробнее о тарифах и выгодах
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

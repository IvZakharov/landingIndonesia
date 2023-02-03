import styles from "./Steps.module.scss";
import Image from "next/image";

const whatNeedArr = [
  {
    digitIconPath: "/images/icons/digits/1.svg",
    iconPath: "/images/icons/steps/1.svg",
    text: "Прислать паспортные данные будущих акционеров",
  },

  {
    digitIconPath: "/images/icons/digits/2.svg",
    iconPath: "/images/icons/steps/2.svg",
    text: "Придумать имя компании – три слова на английском",
  },

  {
    digitIconPath: "/images/icons/digits/3.svg",
    iconPath: "/images/icons/steps/3.svg",
    text: "Указать предпочитаемый тип деятельности компании",
  },
  {
    digitIconPath: "/images/icons/digits/4.svg",
    iconPath: "/images/icons/steps/4.svg",
    text: "Предоставить мобильный телефон для регистрации банкинга и биржи",
  },

  {
    digitIconPath: "/images/icons/digits/5.svg",
    iconPath: "/images/icons/steps/5.svg",
    text: "Предоставить селфи для верификации на криптовалютной бирже",
  },

  {
    digitIconPath: "/images/icons/digits/6.svg",
    iconPath: "/images/icons/steps/6.svg",
    text: "Внести предоплату 50% от общей стоимости выбранных услуг",
  },
];

const whatDoesProcess = [
  {
    digitIconPath: "/images/icons/digits/1.svg",
    iconPath: "/images/icons/steps/7.svg",
    text: "Регистрация компании, выпуск пакета учредительных документов – 5 рабочих дней",
  },

  {
    digitIconPath: "/images/icons/digits/2.svg",
    iconPath: "/images/icons/steps/8.svg",
    text: "После получения документов на компанию вносятся оставшиеся 50% стоимости услуг",
  },

  {
    digitIconPath: "/images/icons/digits/3.svg",
    iconPath: "/images/icons/steps/9.svg",
    text: "Открытие банковского счёта – 5 рабочих дней после внесения 100% оплаты",
  },
  {
    digitIconPath: "/images/icons/digits/4.svg",
    iconPath: "/images/icons/steps/10.svg",
    text: "Отправка доступов в онлайн-банкинг – 5 рабочих дней после открытия счёта",
  },

  {
    digitIconPath: "/images/icons/digits/5.svg",
    iconPath: "/images/icons/steps/11.svg",
    text: "Выдача токена – до 8 рабочих дней после открытия счёта, не включая доставку в другую страну",
  },

  {
    digitIconPath: "/images/icons/digits/6.svg",
    iconPath: "/images/icons/steps/12.svg",
    text: "Открытие криптовалютного аккаунта – 5 рабочих дней после получения документов",
  },
];

const Steps = () => {
  return (
    <section className={styles.steps} id={"steps"}>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-white mb-24 md:mb-32"}>
          Что необходимо <br /> для регистрации?
        </h2>
        <div className={"grid md:grid-cols-2 md:gap-16 md:mb-32 xl:mb-48"}>
          {whatNeedArr.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <i className={styles.stepIcon}>
                <Image
                  alt={"icons"}
                  src={item.digitIconPath}
                  quality={100}
                  width={30}
                  height={40}
                />
              </i>
              <div>
                <i className={styles.icon}>
                  <Image
                    alt={"icons"}
                    src={item.iconPath}
                    quality={100}
                    width={50}
                    height={50}
                  />
                </i>
                <p className={"text text-white"}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={"sectionTitle text-white mb-24 md:mb-32"}>
          Из чего состоит <br /> процесс?
        </h2>
        <div className={"grid md:grid-cols-2 md:gap-16"}>
          {whatDoesProcess.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <i className={styles.stepIcon}>
                <Image
                  alt={"icons"}
                  src={item.digitIconPath}
                  quality={100}
                  width={30}
                  height={40}
                />
              </i>
              <div>
                <i className={styles.icon}>
                  <Image
                    alt={"icons"}
                    src={item.iconPath}
                    quality={100}
                    width={50}
                    height={50}
                  />
                </i>
                <p className={"text text-white"}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

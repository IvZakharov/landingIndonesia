import styles from "./Special.module.scss";
import Image from "next/image";

const Special = ({ linkUrl }) => {
  return (
    <section>
      <div className={"container relative"}>
        <div className={"md:flex gap-10 mb-36"}>
          <div className={"mb-16 md:w-1/2 md:order-1"}>
            <h2 className={"sectionTitle mb-4 mb-10 xl:mb-20"}>
              Специальное предложение для крупного бизнеса
            </h2>
            <p className={"text mb-6"}>
              Открытие представительства компании в Индонезии. Оставьте заявку
              для получения деталей
            </p>
            <a href={linkUrl} target={"_blank"} className={"button"}>
              Оставить заявку
            </a>
          </div>

          <div className={`${styles.image} md:w-1/2`}>
            <Image
              alt={"Partner image"}
              src={"/images/illustration/1.svg"}
              quality={100}
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        <div className={"md:flex gap-10 mb-36"}>
          <div className={"mb-16 md:w-1/2 "}>
            <h2 className={"sectionTitle mb-4 mb-10 xl:mb-20"}>
              Для тех, кто хочет протестировать прием и отправку платежей
            </h2>
            <p className={"text mb-6"}>
              Получите индивидуальные условия и реквизиты для тестового платежа
              до открытия компании
            </p>
            <a href={linkUrl} target={"_blank"} className={"button"}>
              Получить
            </a>
          </div>

          <div className={`md:w-1/2`}>
            <div className={`${styles.image} md:flex md:justify-end`}>
              <Image
                alt={"Partner image"}
                src={"/images/illustration/2.svg"}
                quality={100}
                width={350}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>

        <div className={"md:flex gap-10"}>
          <div className={"mb-16 md:w-1/2 md:order-1"}>
            <h2 className={"sectionTitle mb-4 mb-10 xl:mb-20"}>
              Дополнительно
            </h2>
            <ul className={"list mb-6"}>
              <li className={"text"}>Финансовые лицензии</li>
              <li className={"text"}>Бизнес-лицензии</li>
              <li className={"text"}>Регистрация патентов</li>
              <li className={"text"}>Получение акциз</li>
              <li className={"text"}>Разрешения на экспорт/импорт</li>
              <li className={"text"}>Регистрация недвижимости</li>
            </ul>
            <a href={linkUrl} target={"_blank"} className={"button"}>
              Бесплатная консультация
            </a>
          </div>

          <div className={`${styles.image} md:w-1/2`}>
            <Image
              alt={"Partner image"}
              src={"/images/illustration/3.svg"}
              quality={100}
              width={350}
              height={200}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;

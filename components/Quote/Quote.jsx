import styles from "./Quote.module.scss";
import Image from "next/image";

const Quote = ({ linkUrl }) => {
  return (
    <section className={styles.quote}>
      <div className={"container relative"}>
        <div className={"md:flex md:gap-8 xl:gap-28"}>
          <div className={`${styles.image} mb-10 md:hidden`}>
            <Image
              alt={"Partner image"}
              src={"/images/quote/mob.png"}
              quality={100}
              width={330}
              height={220}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={`${styles.image} hidden md:block`}>
            <Image
              alt={"Partner image"}
              src={"/images/quote/desk.png"}
              quality={100}
              width={330}
              height={220}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className={"md:flex flex-col"}>
            <p className={"text md:text-justify text-white italic mb-8"}>
              Текущая ситуация в мировой экономике оказывает пагубное влияние на
              многие сферы бизнеса. Ужесточение банковского и валютного
              регулирования, санкции, усложнение цепочек поставок, все это
              заставляет предпринимателей по всему миру искать новые пути
              оптимизации бизнес-процессов.
            </p>

            <p
              className={"text md:text-justify text-white italic mb-16 md:mb-8"}
            >
              Индонезия, по сравнению с другими странами Азии, является новым и
              неизученным регионом для большинства участников рынка. Однако,
              быстрорастущая экономика, лояльное регулирование и нейтральная
              политическая позиция, позволили стране занять привлекательную
              позицию для предпринимателей со всего мира.
            </p>
            <div className={"md:mt-auto"}>
              <a
                href={linkUrl}
                target={"_blank"}
                className={`button ${styles.button}`}
              >
                Связаться со специалистом
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;

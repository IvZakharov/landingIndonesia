import styles from "./Price.module.scss";
import Image from "next/image";

const Price = () => {
  return (
    <section id={"price"}>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-center mb-3"}>Базовый пакет</h2>
        <p className={styles.price}>
          Стоимость <span>10 000 $</span>
        </p>

        <div className={"grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"}>
          <div className={styles.item}>
            <i className={styles.icon}>
              <Image
                alt={"icons"}
                src={"/images/icons/price/1.svg"}
                quality={100}
                width={40}
                height={40}
              />
            </i>
            <h4 className={styles.title}>
              Регистрация <br /> компании{" "}
            </h4>
          </div>
          <div className={styles.item}>
            <i className={styles.icon}>
              <Image
                alt={"icons"}
                src={"/images/icons/price/2.svg"}
                quality={100}
                width={40}
                height={40}
              />
            </i>
            <h4 className={styles.title}>
              Банковский <br /> счёт
            </h4>
          </div>
          <div className={styles.item}>
            <i className={styles.icon}>
              <Image
                alt={"icons"}
                src={"/images/icons/price/3.svg"}
                quality={100}
                width={40}
                height={40}
              />
            </i>
            <h4 className={styles.title}>
              Аренда <br /> офиса
            </h4>
          </div>
          <div className={styles.item}>
            <i className={styles.icon}>
              <Image
                alt={"icons"}
                src={"/images/icons/price/4.svg"}
                quality={100}
                width={40}
                height={40}
              />
            </i>
            <h4 className={styles.title}>
              Номинальный <br /> сервис
            </h4>
          </div>
        </div>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"}>
          <div>
            <div className={`${styles.infoItem} xl:h-full`}>
              <h4 className={styles.title}>Дополнительные услуги</h4>
              <ul className={"list"}>
                <li className="text mb-5">
                  Криптовалютный аккаунт <span>— 1 500 $</span>
                </li>
                <li className="text mb-5">
                  Второй банковский счёт <span>— 1 500 $</span>
                </li>
                <li className="text mb-5">
                  Дополнительный вид <br className={"lg:hidden"} /> деятельности{" "}
                  <span>— 500 $</span>
                </li>
                <li className="text mb-5">
                  3 корпоративные карты <span>— 1 500 $</span>
                </li>
                <li className="text">
                  Инвесторская виза КИТАС <span>— 1 500 $</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className={`${styles.infoItem} xl:mb-10 h-full xl:h-auto`}>
              <h4 className={styles.title}>Ежегодные расходы</h4>
              <ul className={"list"}>
                <li className="text mb-5">
                  Аренда виртуального офиса <span>— 500 $</span>
                </li>
                <li className="text mb-5">
                  Зарплата номинального <br className={"lg:hidden"} /> директора{" "}
                  <span>— 2 500 $</span>
                </li>

                <li className="text mb-5">
                  Сдача отчётов местным <br className={"lg:hidden"} />
                  бухгалтером— от 1 500 $
                </li>
                <li className="text">Служба поддержки – бесплатно</li>
              </ul>
            </div>
            <div className={"hidden xl:block"}>
              {" "}
              <button className={`button ${styles.button} `}>
                Получить специальное предложение
              </button>
            </div>
          </div>
        </div>
        <div className={" xl:hidden"}>
          <button className={`button ${styles.button}`}>
            Получить специальное предложение
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;

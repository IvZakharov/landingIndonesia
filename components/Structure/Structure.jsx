import styles from "./Structure.module.scss";
import Image from "next/image";

const advantages = [
  "Компания PT PMA с полным пакетом документов",
  "Виртуальный офис на один год",
  "Местный директор",
  "Мультивалютный счёт, онлайн-банкинг, \n токен для подтверждения транзакций",
  "Корпоративный криптовалютный счёт \n на местной Индонезийской бирже ",
];

const Structure = () => {
  return (
    <section id={"structure"}>
      <div className={"container relative"}>
        <div className={"grid md:grid-cols-2 md:gap-10"}>
          <div className={"xl:flex flex-col"}>
            <h2
              className={
                "sectionTitleLarge text-center md:text-left mb-8 xl:mb-20"
              }
            >
              Структура для <br /> ведения бизнеса
            </h2>
            <ul className={"list mb-9"}>
              {advantages.map((item, idx) => (
                <li key={idx} className={"text mb-4 whitespace-pre-line"}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={"hidden md:block xl:mt-auto"}>
              <button className={`button ${styles.button}`}>
                Узнать больше
              </button>
            </div>
          </div>

          <div className={"relative"}>
            <Image
              alt={"Hero images"}
              src={"/images/structure.png"}
              quality={80}
              width={700}
              height={475}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div className={"md:hidden flex justify-center pt-10"}>
              <button className={`button ${styles.button}`}>
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;

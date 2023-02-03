import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";

const advantages = [
  "Международные платежи без ограничений",
  "Легальная и выгодная покупка USDT",
  "Открытие онлайн за 15 дней",
  "Стоимость от 10 000 $",
];

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={"container relative"}>
        <h1 className={styles.title}>
          Компания и счёт <br className={"md:hidden"} /> в Индонезии <br /> для
          бизнеса <br /> и не только
        </h1>

        <ul className={styles.list}>
          {advantages.map((item, idx) => (
            <li key={idx} className={"text"}>
              {item}
            </li>
          ))}
        </ul>

        <div className={styles.image}>
          <Image
            alt={"Hero images"}
            src={"/images/hero/hero.png"}
            quality={80}
            width={707}
            height={432}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <Link href={"#"} className={"button"}>
          Связаться с менеджером
        </Link>
      </div>
    </section>
  );
};

export default Hero;

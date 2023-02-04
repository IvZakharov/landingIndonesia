import styles from "./Faq.module.scss";
import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const faqArr = [
  {
    title: "Кому это может быть полезно?",
    text: "Компания в Индонезии может быть использована как дополнительный финансовый инструмент для бизнесов, имеющим обширную международную структуру. Также компания может быть полезна предприятиям из РФ для организации международных цепочек поставок и оплат во избежание санкций и блокировок. Благодаря местному регулированию, компания может быть интересна для предпринимателей, желающих легально приобретать криптовалюту за средства с доходов от своей коммерческой деятельности, а также для предпринимателей, получающих доход в криптовалюте и желающих легализовать свои доходы для приобретения активов или расчётов с контрагентами.",
  },
  {
    title: "Поможете провести разовую сделку?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Если я уже в Индонезии, мне будет скидка?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Что с налогами?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Что с уставным капиталом?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Что с банками?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Что с покупкой криптовалюты?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    title: "Что с составом компании?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
];

const Faq = () => {
  return (
    <section id={"faq"}>
      <div className={"container relative"}>
        <h2 className={"sectionTitle text-center mb-5 md:mb-10 xl:mb-20"}>
          FAQ
        </h2>
        <Accordion>
          {faqArr.map((obj, idx) => (
            <AccordionItem key={idx}>
              {({ open }) => (
                <>
                  <div className={styles.item}>
                    <AccordionHeader className="w-full flex justify-between items-center p-5 xl:px-10">
                      <h4 className={`text ${styles.title}`}>{obj.title}</h4>
                      <i
                        className={`${styles.icon} ${open ? "rotate-180" : ""}`}
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.16602 8.33398L12.4993 16.6673L20.8327 8.33398"
                            stroke="#121212"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className={"p-5 xl:px-10"}>
                        <p className={"text"}>{obj.text}</p>
                      </div>
                    </AccordionBody>
                  </div>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;

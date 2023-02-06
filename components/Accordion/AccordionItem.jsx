import React from "react";
import styles from "./Accordion.module.scss";

const AccordionItem = ({ title, body, Id, Index, setIndex }) => {
  const [open, setOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState();
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
  }, [bodyHeight]);

  const handleSetIndex = (Id) => {
    if (Index !== Id) {
      setIndex(Id);
      setOpen(true);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className={styles.item}>
      <div
        onClick={() => handleSetIndex(Id)}
        className="w-full flex justify-between items-center p-5 xl:px-10 cursor-pointer"
      >
        <h4 className={`text ${styles.title}`}>{title}</h4>
        <i
          className={`${styles.icon} ${
            open && Index === Id ? "rotate-180" : ""
          }`}
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
      </div>

      <div
        className={`${styles.body} xl:px-10`}
        style={{ maxHeight: open && Index === Id ? bodyHeight : 0 }}
        ref={bodyRef}
      >
        <p className={"text whitespace-pre-line p-5 pt-0"}>{body}</p>
      </div>
    </div>
  );
};

export default AccordionItem;

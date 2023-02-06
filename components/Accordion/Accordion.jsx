import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ data }) => {
  const [Index, setIndex] = React.useState(false);

  return (
    <>
      {data.map((data, idx) => {
        return (
          <AccordionItem
            title={data.title}
            Id={idx}
            body={data.text}
            Index={Index}
            setIndex={setIndex}
            key={idx}
          />
        );
      })}
    </>
  );
};
export default Accordion;

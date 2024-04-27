import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);



  
  return (
    <>
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-center mt-5">
      Frequesntly Asked Questions
    </h4>
    <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance text-center">
                        Answers to commonly asked questions about our platform
                      </p>
  
    <div className="p-2 mt-12 border bg-gray-50 rounded-3xl">
    
      <Accordion open={open === 1}
        className="w-full bg-gradient-to-r from-gray-700 to-black p-4 rounded-md shadow-md"
      >
        {/* Accordion Header with click handler and hover styles */}
        <AccordionHeader
          className="text-white hover:bg-slate-100 hover:text-black cursor-pointer py-2 px-4"
          onClick={() => handleOpen(1)}
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="text-white">
          We're not always in the position that we want to be at. We're constantly
          growing. We're constantly making mistakes. We're constantly trying to
          express ourselves and actualize our dreams.
        </AccordionBody>
        <Accordion open={open === 2}>
          <AccordionHeader
         className="text-white hover:bg-slate-100 hover:text-black cursor-pointer py-2 px-4"
            onClick={() => handleOpen(2)}
          >
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-white">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
    className="text-white hover:bg-slate-100 hover:text-black cursor-pointer py-2 px-4"
            onClick={() => handleOpen(3)}
          >
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-white">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
    className="text-white hover:bg-slate-100 hover:text-black cursor-pointer py-2 px-4"
            onClick={() => handleOpen(4)}
          >
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-white">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader
    className="text-white hover:bg-slate-100 hover:text-black cursor-pointer py-2 px-4"
            onClick={() => handleOpen(5)}
          >
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody className="text-white">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
      </Accordion>
    </div>
    </>
  );
}

import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './panel.css';

export default function Panel(props) {

  return (

    <Accordion allowMultipleExpanded={false}>
      {props.items.map((item) => (
        <AccordionItem key={item.id}>

          <AccordionItemHeading>
            <AccordionItemButton>
              {item.title}
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>

            {item.content}

          </AccordionItemPanel>

        </AccordionItem>
      ))}
    </Accordion>

  );

}
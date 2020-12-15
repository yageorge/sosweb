import React from 'react';

import UserInput from "../../cards/common/UserInput"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import './panel.css';

export default function Panel(props) {
    const items = [
        { id: "1", heading: "Title 1", content: "Content 1" },
        { id: "2", heading: "Title 2", content: "Content 2" }
    ]

    items.map((item) => console.log(item))

    return (
        null
        // <Accordion allowMultipleExpanded={false}>
        //     {items.map((item) => (
        //         <AccordionItem key={item.id}>
        //             <AccordionItemHeading>
        //                 <AccordionItemButton>
        //                     {item.heading}
        //                 </AccordionItemButton>
        //             </AccordionItemHeading>
        //             <AccordionItemPanel>
        //                 {item.content}
        //             </AccordionItemPanel>
        //         </AccordionItem>
        //     ))}
        // </Accordion>

    );

}
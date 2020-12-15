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

    const items = [
        {
            id: "1",
            heading: "Flutter", // Section 1
            lectures: [
                {
                    id: "3", // Lecture 1
                    heading: "What is flutter",
                    content: "content of what is flutter"
                },
                {
                    id: "4", // Lecture 2
                    heading: "Install flutter",
                    content: "content of install flutter"
                },
                {
                    id: "5", // Lecture 3
                    heading: "Upgrade flutter",
                    content: "content of upgrade flutter"
                }
            ]
        },
        {
            id: "2",
            heading: "React", // Section 2
            lectures: [
                {
                    id: "6", // Lecture 1
                    heading: "what is react",
                    content: "content of what is react"
                },
                {
                    id: "7", // Lecture 2
                    heading: "Install React",
                    content: "content of install react"
                }
            ]
        },
        {
            id: "3",
            heading: "JS", // Section 3
            lectures: [
                {
                    id: "8", // Lecture 1
                    heading: "what is JS",
                    content: "content of what is JS"
                },
                {
                    id: "9", // Lecture 2
                    heading: "Install JS",
                    content: "content of install JS"
                }
            ]
        }
    ]

    return (

        <Accordion allowMultipleExpanded={false}>
            {items.map((item) => (
                <AccordionItem key={item.id}>

                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {item.heading}
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>

                        {/*
            Lectures Accordion starts here
            */}
                        <Accordion allowMultipleExpanded={false}>
                            {item.lectures.map((item) => (
                                <AccordionItem key={item.id}>

                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.heading}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        {item.content}
                                    </AccordionItemPanel>

                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/*
            Lectures Accordion Ends here
            */}

                    </AccordionItemPanel>

                </AccordionItem>
            ))}
        </Accordion>

    );

}
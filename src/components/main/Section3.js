import menu from "assets/data/menu";
import React from "react";
const TRAITS = [
    {
        title: "Effortless Attendance Tracking",
        description: "Lorem ipsum dolor sit amet,\n consectetur adipiscing.",
    },
    {
        title: "Streamlined Assignment Workflow",
        description: "Lorem ipsum dolor sit amet,\n consectetur adipiscing.",
    },
    {
        title: "Real-Time Student Insights",
        description: "Lorem ipsum dolor sit amet,\n consectetur adipiscing.",
    },
    {
        title: "Instant Communication Tools",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        title: "Secure and Accessible Data",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

function Section3() {
    return (
        <>
            <section id={menu[2].id}>
                <div className="container">
                    <h2 className="section-title">
                        Next-Level Features for Smarter Classrooms
                    </h2>

                    <div className="card-wrap">
                        {TRAITS.map((trait, index) => (
                            <div
                                key={index}
                                className={`card ${
                                    index <= 2 ? "card-2" : "card-3"
                                }`}
                            >
                                <h3 className="card-title">{trait.title}</h3>
                                <p className="card-description">
                                    {trait.description
                                        .split("\n")
                                        .map((line, i) => (
                                            <React.Fragment key={i}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section3;

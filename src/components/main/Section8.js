import menu from "assets/data/menu";
import CounterSection from "components/common/CounterSection";
import ScrollProgress from "components/common/ScollProgress";
import React, { useState } from "react";

function Section8() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };

    return (
        <>
            {/* <ScrollProgress
                targetRef={targetRef}
                onProgressChange={handleProgressChange}
            /> */}
            <section id={menu[7].id} ref={targetRef}>
                {/* <div className="container"> */}
                {/* <CounterSection progress={progress} /> */}
                {/* </div> */}
            </section>
        </>
    );
}

export default Section8;

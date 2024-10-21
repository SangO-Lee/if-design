import menu from "assets/data/menu";
import ScrollProgress from "components/common/ScollProgress";
import ScrollTextReveal from "components/common/ScrollTextReveal";
import React, { useState } from "react";

function Section7() {
    const targetRef = React.useRef(null);
    const [progress, setProgress] = useState(0);
    const handleProgressChange = (newProgress) => {
        setProgress(newProgress);
    };
    return (
        <>
            <ScrollProgress
                targetRef={targetRef}
                onProgressChange={handleProgressChange}
            />
            <section id={menu[6].id} ref={targetRef}>
                <div className="container">
                    <div id="scroll-quote">
                        <ScrollTextReveal
                            text="Education is not just about grades; it’s about nurturing the potential within every student. Together, we can inspire growth, empower dreams, and shape the leaders of tomorrow. Join us on this journey, and let’s create a brighter future for our children. Together, we can turn aspirations into achievements."
                            progress={progress}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section7;

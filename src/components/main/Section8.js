import menu from "assets/data/menu";
import Slider2 from "components/common/Slider2";
import React, { useState } from "react";
import slideImg1 from "assets/img/overview.png";
import slideImg2 from "assets/img/overview2.png";
import slideImgLarge1 from "assets/img/overview_2x.png";
import slideImgLarge2 from "assets/img/overview2_2x.png";
import slideImgExtraLarge1 from "assets/img/overview_4x.png";
import slideImgExtraLarge2 from "assets/img/overview2_4x.png";

const SLIDES = [
    {
        index: "1",
        imgSrc: slideImg1,
        imgSrcLarge: slideImgLarge1,
        imgSrcExtraLarge: slideImgExtraLarge1,
        imgAlt: "overview1",
    },
    {
        index: "2",
        imgSrc: slideImg2,
        imgSrcLarge: slideImgLarge2,
        imgSrcExtraLarge: slideImgExtraLarge2,
        imgAlt: "overview2",
    },
];

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
                <Slider2 slides={SLIDES} />
            </section>
        </>
    );
}

export default Section8;

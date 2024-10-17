import Slider from "components/Slider";

function Section1() {
    const SLIDES = [
        {
            index: "1",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "2",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "3",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
            index: "4",
            title: "Slide Title",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
    ];
    return (
        <>
            <section id="section1">
                <div className="container">
                    <h2 className="section-title">Slides</h2>
                    <Slider slides={SLIDES} />
                </div>
            </section>
        </>
    );
}

export default Section1;

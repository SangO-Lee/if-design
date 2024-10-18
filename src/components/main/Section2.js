import menu from "assets/data/menu";

function Section2() {
    return (
        <>
            <section id={menu[1].id}>
                <div className="container">
                    <div className="sticky-container">
                        <div class="title">
                            <h2 className="section-title">
                                Next-Level Features for Smarter Classrooms
                            </h2>
                            <p className="sub-title">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod <br />
                                tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                        </div>
                        <div className="mobile-screens">
                            <div className="inner">
                                <div className="col-left">
                                    <div className="screen">screen image 1</div>
                                    <div className="screen">screen image 2</div>
                                    <div className="screen">screen image 3</div>
                                </div>
                                <div className="col-center">
                                    <div className="screen">screen image 4</div>
                                    <div className="screen">screen image 5</div>
                                    <div className="screen">screen image 6</div>
                                </div>
                                <div className="col-right">
                                    <div className="screen">screen image 7</div>
                                    <div className="screen">screen image 8</div>
                                    <div className="screen">screen image 9</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section2;

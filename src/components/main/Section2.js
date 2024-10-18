import menu from "assets/data/menu";

function Section2() {
    return (
        <>
            <section id={menu[1].id}>
                <div className="container">
                    <h2 className="section-title">Section 2</h2>
                </div>
            </section>
        </>
    );
}

export default Section2;

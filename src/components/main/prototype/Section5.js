import menu from "assets/data/menu";
import TabSection from "components/common/TabSection";

function Section5() {
    return (
        <>
            <section id={menu[4].id}>
                <div className="container">
                    <TabSection />
                </div>
            </section>
        </>
    );
}

export default Section5;

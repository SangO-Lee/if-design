import React, { useState } from "react";
import "assets/css/prototype/tabsection.scss";
import tabData from "assets/data/tabData";

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    // 탭 클릭 시 호출되는 함수
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    const tabButtonWidth = 86;
    const tabButtonGap = 8;

    return (
        <div className="tab-section">
            <div className="img-box">
                {tabData.map((item, index) => (
                    // <img
                    //     key={index}
                    //     src={item.imageUrl}
                    //     alt={item.title}
                    //     className={`image-slide ${
                    //         activeTab === index ? "active" : ""
                    //     }`}
                    // />
                    <div
                        key={index}
                        style={{ background: `${item.imageBg}` }}
                        className={`image-slide ${
                            activeTab === index ? "active" : ""
                        }`}
                    ></div>
                ))}
            </div>

            <div className="txt-box">
                <div className="tabs">
                    {tabData.map((item, index) => (
                        <button
                            key={item.id}
                            className={`tab-button ${
                                activeTab === index ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(index)}
                        >
                            {item.target}
                        </button>
                    ))}

                    <div
                        className="active-bg"
                        style={{
                            transform: `translateX(${
                                activeTab * (tabButtonWidth + tabButtonGap)
                            }px)`,
                        }}
                    ></div>
                </div>

                <h2 className="section-title">
                    {tabData[activeTab].title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </h2>
                <p className="sub-title">
                    {tabData[activeTab].description
                        .split("\n")
                        .map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                </p>
                <ul>
                    {tabData[activeTab].list.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TabSection;

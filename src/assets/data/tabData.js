import tabImg1 from "assets/img/tab_sample1.jpg";
import tabImg2 from "assets/img/tab_sample2.jpg";
import tabImg3 from "assets/img/tab_sample3.jpg";

const tabData = [
    {
        id: 1,
        target: "Teachers",
        title: "Empowering Instructors \nFor Effective Teaching",
        description:
            "Our app simplifies classroom management, \nenabling instructors to focus on what truly matters: teaching and inspiring students.",
        imageUrl: tabImg1,
        imageBg: "#f06262",
        list: [
            "Effortless Attendance Management",
            "Streamlined Assignment Tracking",
            "Real-Time Insights",
            "Instant Communication Tools",
            "User-Friendly Interface",
        ],
    },
    {
        id: 2,
        target: "Parents",
        title: "Stay Connected and Informed \nAbout Your Child's Education",
        description:
            "Our app keeps parents in the loop, \nmaking it easier to support their children's academic journey.",
        imageUrl: tabImg2,
        imageBg: "#62b7f0",
        list: [
            "Real-Time Updates",
            "Access to Student Progress",
            "Direct Communication with Teachers",
            "Engagement in Assignments",
            "Secure Data Management",
        ],
    },
    {
        id: 3,
        target: "Students",
        title: "Unlocking Student Success \nWith Comprehensive Tools",
        description:
            "Our app provides students with all the resources \nthey need to excel academically and stay organized.",
        imageUrl: tabImg3,
        imageBg: "#f0ae62",
        list: [
            "Personalized Learning Experience",
            "Assignment Reminders",
            "Interactive Learning Materials",
            "Direct Communication with Instructors",
            "Progress Tracking",
        ],
    },
];

export default tabData;

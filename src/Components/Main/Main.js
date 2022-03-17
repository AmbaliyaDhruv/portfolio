import React from "react";
import Article from "./Article";

const Main = () => {
    const articles = [
        {
            heading: "ABOUT ME",
            p1: `My journey, which started with mechanical Engineering and has now evolved into building a career in web development, is worth speaking about. I was always interested in the mechanisms of software and how it worked, and felt that this branch was a perfect fit for me. During lockdown realized the effectiveness and helpfulness of software and applications, due to which I was curious to learn how a complex software worked in order to build one of my own. I explored this field in various languages like HTML, CSS, and JavaScript. I found myself drawn towards the field of web development, due to which I decided to learn more about Web technologies.`,
            p2: `Around this time, I came to know about Masai school, and their 9–9–6 curriculum. The well-structured course and practical teaching approach convinced me to join and now with their support, I specialize in MERN stack with expertise in JavaScript, HTML, CSS, Node.js, MongoDB, and DSA.`,
            p3: `Keep scrolling to see some of my latest work!`,
            technologies: true,
        },
        {
            heading: "PROJECTS",
            projects: true,
        },
        {
            heading: "CONTACT",
            p1: `If you have any questions or would like to chat, feel free to reach out below!`,
            form: true,
        },
    ];
    return (
        <main>
            {articles.map((data, index) => {
                return <Article data={data} index={index} key={index} />;
            })}
        </main>
    );
};

export default Main;

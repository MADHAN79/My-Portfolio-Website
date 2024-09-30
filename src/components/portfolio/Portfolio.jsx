import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Onlinelife",
    img: "/onlinelife.png",
    desc: "Social Media Platform with features like live messages, live notifications of likes and much more.,",
    tech: "TECH USED : React, Tailwind CSS, REDUX",
    link: "https://onlinelife.onrender.com/signup",
  },
  {
    id: 2,
    title: "Spotify",
    img: "/spotify.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    tech: "TECH USED : React, Tailwind CSS, REDUX",
    link: "https://madhan-spotify.netlify.app",
  },
  {
    id: 3,
    title: "MovieLand",
    img: "/movieland.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    tech: "TECH USED : React, Tailwind CSS, REDUX",
    link: "https://madhan-movieland.netlify.app",
  },
  {
    id: 4,
    title: "EV-OLUTION",
    img: "/evolution.png",
    desc: "It's a modern landing page for EV car company",
    tech: "TECH USED : React, Tailwind CSS, REDUX",
    link: "https://madhan-ev-olution.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.tech}</p>
            <button><a href={item.link} target="blank" >See demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

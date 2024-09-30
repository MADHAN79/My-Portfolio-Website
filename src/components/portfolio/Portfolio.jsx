import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Onlinelife",
    img: "/onlinelife.png",
    desc: "This is my Social Media Platform called OnlineLife which can be used similar to reallife social media platforms like messenger, facebook, Instagram,etc., Through which you can chat with the people in the platform, share posts, see the feeds and much more. You'll get realtime notifications for the likes that your friend gives to your posts.",
    tech: "TECH USED : React, Tailwind CSS, REDUX",
    link: "https://onlinelife.onrender.com/signup",
  },
  {
    id: 2,
    title: "Spotify",
    img: "/spotify.png",
    desc: "Its a beautiful replica of the Spotify music platform. You can use this platform for listening to songs, podcasts, audiobooks etc., Don't forget to Have fun!",
    tech: "TECH USED : React, Tailwind CSS, AXIOS",
    link: "https://madhan-spotify.netlify.app",
  },
  {
    id: 3,
    title: "MovieLand",
    img: "/movieland.png",
    desc: "Its a simple Movie Search Website which filters out the movie posters based on the search result.",
    tech: "TECH USED : React, OMDB API",
    link: "https://madhan-movieland.netlify.app",
  },
  {
    id: 4,
    title: "EV-OLUTION",
    img: "/evolution.png",
    desc: "It's a clean and professional landing page for an E.V vehicle company and an U.I based React project where I have tested my knowledge on React18 fundamentals and reinforcing the web development fundamentals like CSS & JAVASCRIPT for dynamic image & video rendering logic along with React18.",
    tech: "TECH USED : React, Vanilla CSS",
    link: "https://madhan-ev-olution.netlify.app",
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

import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button className="rgb-border-button"><span>Website Development</span></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box glow-on-hover"
          //whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Education</h2>
          <p>
            Done my Computer Science Engineering in Kumaraguru College of Technology at Coimbatore, TN. 2023 Batch.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box glow-on-hover"
          //whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Upskilled</h2>
          <p>
            I have the opportunity to get the hands-on learning with industry knowledge in the MERN Full Stack Web Development at a reputed platform - GUVI, IITM incubated ed-tech company.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box glow-on-hover"
          //whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>What I do?</h2>
          <p>
            An enthusiastic MERN Stack Developer and I can completely design and develope a website according to your customised needs.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box glow-on-hover"
          //whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tech stacks</h2>
          <p>
            <ul>
              <li>React18+</li>  
              <li>Basics of Nextjs</li>
              <li>Bootstrap</li>  
              <li>Tailwind CSS</li>  
              <li>Sql, MongoDB & Express</li>  
              <li>Nodejs</li>  
              <li>UI libraries like shadcn, materialUI, chakraUI and more</li>  
            </ul>
            
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

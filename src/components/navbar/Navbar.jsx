import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar rgb">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          MADHAN
        </motion.span>
        <div className="social">
          <a href="https://github.com/MADHAN79" target="blank">
            <img src="/github.png" alt="" />
          </a>
          {/* <a href="#">
            <img src="/twitter.png" alt="" />
          </a> */}
          <a href="https://www.linkedin.com/in/madhan-k-a21452189"  target="blank">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

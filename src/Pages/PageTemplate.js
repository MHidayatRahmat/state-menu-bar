import React, { useState } from "react";
import SideMenu from "../component/SideMenu";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { FramerSide } from "../Style/Animation";
import Footer from "../component/Footer";
import Header from "../component/Header";
import DropDownProfile from "../component/DropDownProfile";

function PagesTemplate(props) {
  const [isOpen, setOpen] = useState(true);
  const [isDropDownClick, setIsDropDownClick] = useState(false);

  const isHandleDropDown = (isActive) => {
    setIsDropDownClick(isActive);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header clickDropDown={isHandleDropDown} isDropDownClick={isDropDownClick} />
      <div className="flex flex-1">
        <motion.div
          {...FramerSide}
          className={`min-w-1/4 ${isOpen ? "w-1/5" : "w-0"} border-2 rounded-r-3xl shadow-slate-100 shadow-2xl`}
          style={{ position: "fixed", height: "100%", left: 0, zIndex: 1, transition: "width 0.3s" }}
        >
          {isOpen && <SideMenu props={isOpen} />}
        </motion.div>
        <div className="flex flex-col justify-center w-full relative" style={{ marginLeft: isOpen ? "20%" : 0 }}>
          <div
            className={`absolute ${isOpen && "left-0 bg-sky-800 text-white"}  hover:bg-sky-800 hover:text-white p-0 rounded-r-lg z-30 border-2`}
          >
            <div onClick={() => setOpen(!isOpen)}>
              {isOpen ? (
                <ChevronLeft sx={{ fontSize: "3rem" }} />
              ) : (
                <ChevronRight sx={{ fontSize: "3rem" }} />
              )}
            </div>
          </div>
          <div className="top-0 right-0 mt-5" style={{ overflowY: "auto", height: "100%" }}>
            <DropDownProfile isDropDownClick={isDropDownClick} />
            <div >{props.children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PagesTemplate;

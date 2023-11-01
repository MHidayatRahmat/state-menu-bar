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
    <div className="flex flex-col h-full">
      <Header clickDropDown={isHandleDropDown} isDropDownClick={isDropDownClick} />
      <div className="flex flex-1">
        <motion.div
          {...FramerSide}
          className={`h-1/2 min-w-1/ ${isOpen ? "w-1/6" : "w-0"} border-2 rounded-r-3xl shadow-slate-100 shadow-2xl bg-gradient-to-r from-cyan-800 to-blue-800 ...`}
          style={{ position: "fixed", height: "100%", left: 0, zIndex: 1, transition: "width 0.3s" }}
        >
          {isOpen && <SideMenu props={isOpen} />}
        </motion.div>
        <div className="flex flex-col justify-center w-full relative" style={{ marginLeft: isOpen ? "16%" : 0 }}>
          <div
            className={`fixed align-middle ${isOpen? "fixed left-30 ml-4 mb-20 bg-transparent text-white" : "fixed mt-2 left-0 top-20 bg-gray-100 text-black "}  hover:bg-sky-800 hover:text-white hover:shadow-lg hover:shadow-sky-500 p-0 rounded-r-lg z-20 border-2`}
          >
            <div onClick={() => setOpen(!isOpen)}>
              {isOpen ? (
                <ChevronLeft sx={{ fontSize: "3rem", }} />
              ) : (
                <ChevronRight sx={{ fontSize: "3rem" ,}} />
              )}
            </div>
          </div>
          <div className="top-0 right-0 mt-5" style={{ overflowY: "auto", height: "100%" }}>
            <DropDownProfile isDropDownClick={isDropDownClick} />
            <div className="ml-3" >{props.children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PagesTemplate;

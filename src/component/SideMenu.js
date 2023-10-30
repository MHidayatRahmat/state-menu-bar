import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import {
  FramerItemPanel,
  FramerSidebarPanel,
  framerText,
} from "../Style/Animation";
import { Data } from "../Data/Data";
import axios from "axios";

function renderSubItems(subItems,isClick) {

  return subItems.map((subItem, idx) => (
    <NavLink to={subItem.route} end>
      <motion.div
        {...FramerItemPanel}
        className={`flex border-b-2 text-white py-2 px-2 hover:bg-slate-300 hover:text-blue-700 ${isClick && "bg-gradient-to-r from-green-500 to-yellow-600 ..."}`}
        key={subItem.id}
      >
        <motion.span {...framerText}> {subItem.name}</motion.span>
      </motion.div>
    </NavLink>
  ));
}

function SideMenu(props) {
  const [activeNavId, setActiveNavId] = useState(null);
  const [openSideMenu, setOpenSideMenu] = useState(props);
  const [testData, setTestData] = useState([]);
  const[isClick,setIsClick]=useState(false);

  function handleClickSubMenu(){
    setIsClick(!isClick);
  }

  const handleAccordionClick = (item) => {
    setActiveNavId(activeNavId === item.navId ? null : item.navId);
  };

  return (
    <div className="flex items-center pt-4 ">
      {openSideMenu && (
        <motion.div
          {...FramerSidebarPanel}
          className="w-full max-w-xs border-r-2"
          aria-label="Sidebar"
        >
          {Data.map((item) => (
            <motion.div key={item.navId} className="bg-transparent p-1">
              <motion.div
                className={` ${
                  activeNavId === item.navId ? "bg-gradient-to-r from-green-500 to-cyan-600 ... text-white" : ""
                } bg-white shadow-md shadow-yellow-500 p-3 hover:bg-gradient-to-r from-green-500 to-cyan-600 ... hover:text-white rounded-lg`}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${item.navId}-content`}
                onClick={() => handleAccordionClick(item)}
              >
                <p>{item.name}</p>
              </motion.div>
              <motion.div className="ml-10 border-l-2 p-0">
                {activeNavId === item.navId && renderSubItems(item.subItems, isClick,)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
export default SideMenu;

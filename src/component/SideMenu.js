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

function renderSubItems(subItems) {
  return subItems.map((subItem, idx) => (
    <NavLink to={subItem.route} end>
      <motion.div
        {...FramerItemPanel}
        className="flex py-2 px-2 hover:bg-slate-300 hover:text-blue-700"
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

  // const fetchDataFromFirebase = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://react-http-a1344-default-rtdb.firebaseio.com/Data.json"
  //     );
  //     const data = response.data;
  //     setTestData(data);
  //   } catch (error) {
  //     console.error("Error fetching data from Firebase:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDataFromFirebase();
  // }, []);

  const handleAccordionClick = (item) => {
    setActiveNavId(activeNavId === item.navId ? null : item.navId);
  };

  return (
    <div className="flex items-center pt-4">
      {openSideMenu && (
        <motion.div
          {...FramerSidebarPanel}
          className="w-full max-w-xs border-r-2"
          aria-label="Sidebar"
        >
          {Data.map((item) => (
            <motion.div key={item.navId} className="bg-white p-1">
              <motion.div
                className={` ${
                  activeNavId === item.navId ? "bg-sky-700 text-white" : ""
                } bg-gray-200 p-3 hover:bg-sky-700 hover:text-white`}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${item.navId}-content`}
                onClick={() => handleAccordionClick(item)}
              >
                <p>{item.name}</p>
              </motion.div>
              <motion.div className="ml-10 border-l-2 p-0">
                {activeNavId === item.navId && renderSubItems(item.subItems)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
export default SideMenu;

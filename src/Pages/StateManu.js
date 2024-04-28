import { useEffect, useState } from "react";
import { ChevronRight } from "@mui/icons-material";
import axios from "axios";
import { motion } from "framer-motion";
import { Popup } from "../component/Model";
import {
  FramerSide,
  FramerItemPanelR,
  FramerSidebarPanel,
} from "../Style/Animation";
import images from "../images/malaysia.jpg";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import MapContainer from "./MapContainer";

async function fetchDataFromFirebase(setTestData, setLoading) {
  try {
    setLoading(true);
    const response = await axios.get(
      "https://react-malaysia-state-default-rtdb.firebaseio.com/location.json"
    );
    const data = response.data;
    setTestData(data);
    setLoading(false);
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
  }
}

function StateMenu() {
  const [testData, setTestData] = useState([]);
  const [activeNavId, setActiveNavId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [openState, setOpenState] = useState(true);
  const [openAnimation, setOpenAnimation] = useState(true);

  useEffect(() => {
    fetchDataFromFirebase(setTestData, setLoading); // Pass the state and setLoading functions here
  }, [selectedItem]);
  

  const handleAccordionClick = (item) => {

    setActiveNavId(item.id);
    setModal(!modal);
    setSelectedItem(item);
  };

  const handleOpenState = () => {
    setOpenState(!openState);
    setOpenAnimation(!openAnimation);
  };

  return (
    <>
      {loading && <p className="ml-10">Loading</p>}
      <div className="relative">
        <div
          className="fixed right-0 top-30 z-20 self-baseline bg-white"
          style={{ position: "absolute", right: 0 }}
        >
          <div
            className={`flex align-middle border-2 p-2 h-fit ${
              openState && "bg-teal-500 text-white"
            } hover:bg-teal-500 hover:text-white`}
            onClick={handleOpenState}
          >
            <KeyboardDoubleArrowLeftOutlinedIcon />
            {openState && (
              <motion.span className="ml-5" {...FramerItemPanelR}>
                State In Malaysia{" "}
                <img className="inline ml-4 w-10 h-5" src={images} />
              </motion.span>
            )}
          </div>
          {openState && (
            <motion.div
              {...(openAnimation ? FramerSide : FramerSidebarPanel)}
              className="  basis-1/4 border-2 border-gray-200 py-3 px-5 shadow-2xl"
            >
              <motion.div
                sx={{
                  height: "100vh", // Set the height to 100% of the viewport height
                }}
              >
                {testData.map((item) => (
                  <motion.div
                    key={item.id}
                    onClick={() => handleAccordionClick(item)}
                    className="p-1 hover:bg-sky-700 hover:text-white border-b-2 border-gray-200 hover:border-white"
                  >
                    <div className="inline justify-end">
                      <ChevronRight />
                    </div>
                    {item.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
          {modal && selectedItem && (
            <Popup
              selectedItem={selectedItem}
              onClose={() => setModal(false)}
            />
          )}
        </div>
        <div className="ml-4">
        <MapContainer item={selectedItem}/>
        </div>
        {/* <img src={images} className="w-screen"/> */}
      </div>
    </>
  );
}

export default StateMenu;

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PublicIcon from "@mui/icons-material/Public";
import React, { useState } from "react";
import "./Header.css"

function Header(props) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    props.clickDropDown(!props.isDropDownClick);
    setIsClick(!isClick);
  };

  return (
    <div className="flex flex-row shadow-lg rounded-b-md shadow-gray-300 bg-green-700 text-white h-1/8 p-1 sticky top-0 z-30">
      <div className="flex flex-col top-0">
        <div className="ml-10 text-xl font-bold space-x-2 p-2">
          <PublicIcon
            className="text-yellow-500 "
            style={{
              fontSize: "3rem",
              filter: " drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
            }}
          />
          <div className="inline absolute">
            <header
              className="inline text-white font-sans [text-shadow:_0_1px_0_var(--tw-shadow-color)]"
              style={{ fontSize: "25px" }}
            >
              Maps Navigation
            </header>
            <p className="block text-xs text-blue-900 z-20 ml-10">
              by Hidayat Rahmat
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-1 ml-20">
        {/* <div className="typewriter-text">
          <p>last seen: today: 12:00 by Hidayat Rahmat (Author)</p> </div> */}
          </div>
      <div className="flex items-center justify-end flex-1 mr-10">
        <input
          className="flex justify-center p-2 mt-2 text-gray-600 border-black rounded-md shadow-md shadow-black w-1/10 h-1/2 mb-2 mr-2"
          placeholder="Search..."
        />
        <div className=" flex flex-row space-x-4">
          <div
            className={`border-3 bg-white hover:bg-gray-200 border-blue-500 w-8 h-8 hover:w-9 hover:h-9 shadow-md shadow-black rounded-md text-blue-500 flex justify-center `}
          >
            <SettingsOutlinedIcon className="mt-1" />
          </div>
          <div
            className={`border-3 bg-white hover:bg-gray-200 border-blue-500 w-8 h-8 hover:w-9 hover:h-9 shadow-md shadow-black rounded-md text-blue-500 flex justify-center `}
          >
            <NotificationsNoneOutlinedIcon className="mt-1" />
          </div>
          <div
            className={`border-3 bg-white hover:bg-gray-200 border-blue-500 w-8 h-8 hover:w-9 hover:h-9 shadow-md shadow-black rounded-md  flex justify-center ${
              isClick ? "bg-blue-400 text-white" : "text-blue-500"
            }`}
            onClick={handleClick}
          >
            <Person2OutlinedIcon className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

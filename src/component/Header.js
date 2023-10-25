import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React from "react"; // Import React

function Header(props) {
  // Receive props
  const handleClick = () => {
    // Call the clickDropDown function with the current isDropDownClick state
    props.clickDropDown(!props.isDropDownClick);
  };

  return (
    <div className="flex flex-row shadow-lg rounded-b-md shadow-gray-300 bg-gray-700 text-white h-1/8 p-4 sticky top-0 z-30">
      <div className="flex items-center">
        <div className="text-xl font-bold space-x-4">
          <BrowserUpdatedIcon />
          MenuBar Template
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 space-x-8 mr-10">
        <div>last seen is:</div>
        <AccountCircleOutlinedIcon
          onClick={handleClick}
          sx={{ fontSize: "3rem", marginRight: "5px" }}
        />
      </div>
    </div>
  );
}

export default Header;

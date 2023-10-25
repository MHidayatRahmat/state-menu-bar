import React from "react"; // Import React

function DropDownProfile(props) { // Receive isDropDownClick as a prop
  return (
    <div>
      {props.isDropDownClick && ( // Check the prop to determine visibility
        <div className="absolute right-4 h-1/3 w-1/5 border-gray-700 border-2 list-none shadow-lg rounded-lg animate__animated animate__slide-in-down z-50">
          {/* Your content */}
        </div>
      )}
    </div>
  );
}

export default DropDownProfile;

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function ModalEdit({ onOpen, location, State  }) {
  const [isOpen, setIsOpen] = useState(onOpen);
  const [newCity, setNewCity] = useState({
    state: "",
  });

  function handleClose() {
    setIsOpen(!isOpen);
  }

  function handleSearch(text) {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(text)) {
      setNewCity(text);
    }
  }

  function handleSubmitData(event) {
    event.preventDefault();

    if (newCity.trim() === "") {
      alert("City name cannot be empty");
      return;
    }

    axios
      .get(
        `https://react-malaysia-state-default-rtdb.firebaseio.com/location/${location}/state.json`
      )
      .then((response) => {
        if (response.data) {
          const existingCities = response.data;
          existingCities.push(newCity);

          axios
            .put(
              `https://react-malaysia-state-default-rtdb.firebaseio.com/location/${location}/state.json`,
              existingCities
            )
            .then((response) => {
              alert("Data uploaded successfully");
              setIsOpen(!isOpen);
            })
            .catch((err) => {
              console.error("Error updating data:", err);
            });
        }
      })
      .catch((err) => {
        console.error("Error fetching existing data:", err);
      });
  }

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.9)" }}
        >
          <div className="bg-white w-1/4 rounded-t-lg border-b-1 shadow-xl rounded-t-2">
          <header className="flex justify-center text-lg text-sky-700 font-bold font-mono border-b-2 pb-2 border-bla">{`Add City in ${State}`}</header>
          </div>
          <div className="bg-white pb-4 w-1/4 h-1/12 overflow-y-auto rounded-t-2">
            <p className="inline ml-5">City Name:</p>
            <input
              className="inline ml-3 p-2 mt-2 border rounded-lg w-2/3 shadow-md"
              placeholder="eg: Pertaling Jaya"
              onChange={(e) => handleSearch(e.target.value)}
              //   value={inputState}
            />
          </div>
          <div className="bg-white w-1/4 rounded-b-lg flex justify-center p-2 border-t-1 border-gray-700 space-x-2">
            <button
              className="p-1 w-1/6 shadow-md shadow-gray-500 text-white  hover:shadow-red-900 hover:bg-red-700 hover:text-white rounded-lg bg-red-500 z-50"
              onClick={handleClose}
            >
              close
            </button>
            <button
              className="p-1 w-1/6 shadow-md shadow-gray-500 text-white  hover:shadow-green-900 hover:bg-green-700 hover:text-white rounded-lg bg-green-500 z-50"
              onClick={handleSubmitData}
            >
              Submit
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default ModalEdit;

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import ModalEdit from "./ModelEdit";
import axios from "axios";

export const Popup = ({ selectedItem, onClose }) => {
  const { selectedName } = useParams();
  const [inputState, setInputState] = useState("");
  const [filteredData, setFilteredData] = useState(selectedItem.state.sort());
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [onAnimation, setOnAnimation] = useState(false);

  function handleSearch(text) {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(text)) {
      setInputState(text);
    }
    // Filter the data based on the characters entered by the user
    const filtered = selectedItem.state.filter((stateItem) =>
      stateItem.toLowerCase().includes(text.toLowerCase())
    );

    // Sort the filtered data before setting it
    filtered.sort();

    setFilteredData(filtered);
  }

  function handleAdd() {
    setAddModalOpen(!addModalOpen);
  }

  function handleClose() {
    setOnAnimation(!onAnimation);
    console.log(onAnimation);
    onClose();
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      console.log(id);
      axios
        .delete(
          `https://react-malaysia-state-default-rtdb.firebaseio.com/location/${selectedItem.id}/state/${id}.json`
        )
        .then((response) => {
          console.log(response);
          alert("data deleted");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleDoubleClick(id) {

    setModalEditOpen(!ModalEditOpen);
    // if (confirmed) {
    //   console.log(id);
    //   axios
    //     .delete(
    //       `https://react-malaysia-state-default-rtdb.firebaseio.com/location/${selectedItem.id}/state/${id}.json`
    //     )
    //     .then((response) => {
    //       console.log(response);
    //       alert("data deleted");
    //       window.location.reload();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  }

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          initial={
            onAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          animate={
            onAnimation ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
          }
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div className="bg-white w-1/4 h-1/2 overflow-y-auto rounded-t-lg">
            <motion.div
              key={selectedItem.id}
              sx={{ display: "flex", alignItems: "inline" }}
            >
              <div className="sticky top-0 bg-white pb-5">
                <header className="flex justify-center text-2xl font-bold mt-2 text-sky-700">
                  {selectedItem.name}
                </header>
                <p className="text-sky-700 text-xs flex justify-center">Latitude: <p className="inline text-black ml-2">{selectedItem.Latitude}</p></p>
                <p className="text-sky-700 text-xs flex justify-center">Latitude: <p className="inline text-black ml-2">{selectedItem.Longitude}</p></p>
                <input
                  className="ml-6 p-2 mt-2 border rounded-lg w-5/6 shadow-md"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e.target.value)}
                  value={inputState}
                />
                <SearchOutlinedIcon className="inline ml-2 font-bold" />
              </div>
              {filteredData.length <= 0 && (
                <p className="flex justify-center ">No Result</p>
              )}
              {filteredData.map((stateItem, index) => (
                <div
                  className="flex justify-between ml-4 p-1 bg-slate-50 hover:bg-sky-700 hover:text-white border-b-2 rounded-md"
                  key={index}
                  onDoubleClick={() => handleDoubleClick(index)}
                >
                  <div className="flex items-center">
                    <ArrowRightOutlinedIcon className="inline mr-2" />
                    {stateItem}
                  </div>
                  <button onClick={() => handleDelete(index)} className="hover:text-red-900 rounded-lg inline text-red-500 hover:text-lg text-sm">
                    <DeleteIcon />
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex rounded-b-lg w-1/4 h-auto justify-center sticky bottom-0 bg-white p-3 shadow-2xl shadow-gray-500 space-x-3">
            <button
              className="p-1 w-1/3 shadow-md shadow-gray-500 text-white hover:shadow-red-900 hover:bg-red-700 hover:text-white rounded-lg bg-red-500 z-50"
              onClick={() => handleClose()}
            >
              close
            </button>
            <button
              className="bg-blue-500 shadow-md shadow-gray-500 hover:bg-blue-700 hover:shadow-blue-900 hover:shadow-lg text-white p-2 w-1/3 rounded-lg"
              onClick={() => handleAdd()}
            >
              Add
            </button>
          </div>
        </motion.div>
      )}
      {addModalOpen && (
        <ModalEdit
          onOpen={addModalOpen}
          location={selectedItem.id}
          State={selectedItem.name}
        />
      )}
    </AnimatePresence>
  );
};

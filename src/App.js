// import { TreeItem, TreeView } from "@mui/x-tree-view";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./App.css";
import PagesTemplate from "./Pages/PageTemplate";
import { router } from "./RouterConfig/Route";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    // <div className="flex flex-row">
    //   <div className="basis-1/4 border-2 border-gray-200 py-10 px-5 ">
    //     <TreeView
    //       aria-label="file system navigator"
    //       defaultCollapseIcon={<ExpandMoreIcon />}
    //       defaultExpandIcon={<ChevronRightIcon />}
    //       sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    //     >
    //       <TreeItem nodeId="1" label="Applications">
    //       <TreeItem nodeId="2" label="Calendar" />
    //       </TreeItem>
    //       <TreeItem nodeId="5" label="Documents">
    //         <TreeItem nodeId="10" label="OSS" />
    //         <TreeItem nodeId="6" label="MUI">
    //           <TreeItem nodeId="8" label="index.js" />
    //         </TreeItem>
    //       </TreeItem>
    //     </TreeView>
    //   </div>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;

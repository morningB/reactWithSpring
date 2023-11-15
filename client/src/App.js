
import {Route, Routes} from "react-router-dom";
import BoardList from "./routes/BoardList";
import Home from "./routes/Home.js";
import Acess from "./routes/Acess.js";
import React from "react";

function App() {
 return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/board/:idx" element={<BoardList/>}/>
      {/* <Route path="/acess" element={<Acess/>}/> */}
    </Routes>
 );
}

export default App;

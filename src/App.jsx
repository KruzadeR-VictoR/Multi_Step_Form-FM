import "./App.css";
import Sidebar from "./Sidebar";
import Info from "./Components/Info";
import Plan from "./Components/Plan";
import Addon from "./Components/Addon";
import Summary from "./Components/Summary";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const DefContext = createContext();
function App() {
  const navigate = useNavigate();
  const path = location.pathname ? location.pathname : "/";
  const [Current, setCurrent] = useState();
  // Info data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // plan
  const Plans = [
    {
      name: "Arcade",
      mprice: 9,
      yprice: 90,
    },
    {
      name: "Advanced",
      mprice: 12,
      yprice: 120,
    },
    {
      name: "Pro",
      mprice: 15,
      yprice: 150,
    },
  ];
  const [PlanType, setPlanType] = useState("Monthly");
  const [SelectedPlan, setSelectedPlan] = useState(Plans[0]);
  // Addon
  const [SelectedAddon, setSelectedAddon] = useState([]);
  const [isOSChecked, setisOSChecked] = useState(false);
  const [isLSChecked, setisLSChecked] = useState(false);
  const [isCFChecked, setisCFChecked] = useState(false);
  // summary data

  const values = {
    navigate,
    path,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    Plans,
    PlanType,
    setPlanType,
    SelectedPlan,
    setSelectedPlan,
    SelectedAddon,
    setSelectedAddon,
    isOSChecked,
    setisOSChecked,
    isLSChecked,
    setisLSChecked,
    isCFChecked,
    setisCFChecked,
  };
  return (
    <>
      <DefContext.Provider value={values}>
        {/* <BrowserRouter> */}
        <div className="App w-screen min-h-screen bg-[#bfe2fd] flex justify-center items-center">
          <div className="card w-[80%] max-w-[60rem] h-[60vh] 2xl:h-[70vh]  p-4 bg-white rounded-md overflow-hidden flex">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Info />} exact />
              <Route path="/Plan" element={<Plan />} />
              <Route path="/Addon" element={<Addon />} />
              {/* <Plan /> */}
              {/* <Addon/> */}
              <Route path="/Summary" element={<Summary />} />
            </Routes>
          </div>
        </div>
        {/* </BrowserRouter> */}
      </DefContext.Provider>
    </>
  );
}

export default App;

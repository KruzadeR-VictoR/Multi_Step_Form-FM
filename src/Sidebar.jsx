import React, { useContext } from "react";
import { DefContext } from "./App";
import "./App.css";

function Sidebar() {
  const { path, navigate } = useContext(DefContext);
  console.log(path);
  return (
    <div className="Sidebar w-[35%] h-full rounded-md bg-blue-500">
      <div className="controls flex flex-col gap-5 pt-[2.5rem] pl-[2rem]">
        <div className="step flex items-center gap-5">
          <button
            className={` h-[2rem] aspect-square rounded-full text-black font-bold ${
              path === "/"
                ? "bg-white text-black"
                : "border border-gray-200 text-white"
            } `}
            // onClick={() => navigate("/")}
          >
            1
          </button>
          <div className="caption leading-">
            <h4 className="text-slate-400 text-[.8rem]">STEP 1</h4>
            <h3 className="text-white text-[.9rem] font-bold">YOUR INFO</h3>
          </div>
        </div>
        <div className="step flex items-center gap-5">
          <button
            className={` h-[2rem] aspect-square rounded-full text-black font-bold ${
              path === "/Plan"
                ? "bg-white text-black"
                : "border border-gray-200 text-white"
            } `}
            // onClick={() => navigate("/Plan")}
          >
            2
          </button>
          <div className="caption">
            <h4 className="text-slate-400 text-[.8rem]">STEP 2</h4>
            <h3 className="text-white text-[.9rem] font-bold">SELECT PLAN</h3>
          </div>
        </div>
        <div className="step flex items-center gap-5">
          <button
            className={` h-[2rem] aspect-square rounded-full text-black font-bold ${
              path === "/Addon"
                ? "bg-white text-black"
                : "border border-gray-200 text-white"
            } `}
            // onClick={() => navigate("/Addon")}
          >
            3
          </button>
          <div className="caption leading-">
            <h4 className="text-slate-400 text-[.8rem]">STEP 3</h4>
            <h3 className="text-white text-[.9rem] font-bold">ADD-ONS</h3>
          </div>
        </div>
        <div className="step flex items-center gap-5">
          <button
            className={` h-[2rem] aspect-square rounded-full text-black font-bold ${
              path === "/Summary"
                ? "bg-white text-black"
                : "border border-gray-200 text-white"
            } `}
            // onClick={() => navigate("/Summary")}
          >
            4
          </button>
          <div className="caption leading-">
            <h4 className="text-slate-400 text-[.8rem]">STEP 4</h4>
            <h3 className="text-white text-[.9rem] font-bold">SUMMARY</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

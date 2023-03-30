import React, { useContext, useEffect, useState } from "react";
import { DefContext } from "../App";

function Addon() {
  const {
    navigate,
    path,
    SelectedAddon,
    setSelectedAddon,
    isOSChecked,
    setisOSChecked,
    isLSChecked,
    setisLSChecked,
    isCFChecked,
    setisCFChecked,
    PlanType,
  } = useContext(DefContext);

  const Addons = [
    {
      name: "Online Service",
      caption: "Add-ons help enhance your gaming experience.",
      mprice: 1,
      yprice: 10,
      isChecked: isOSChecked,
    },
    {
      name: "Larger storage",
      caption: "Extra 1TB of cloud save",
      mprice: 2,
      yprice: 20,
      isChecked: isLSChecked,
    },
    {
      name: "Customizable Profile",
      caption: "Custom theme on your profile",
      mprice: 2,
      yprice: 20,
      isChecked: isCFChecked,
    },
  ];

  console.log(SelectedAddon);

  const handleCheckbox = (addon, e) => {
    if (addon.name.includes("Online")) {
      setisOSChecked(!isOSChecked);
    } else if (addon.name.includes("Larger")) {
      setisLSChecked(!isLSChecked);
    } else {
      setisCFChecked(!isCFChecked);
    }

    if (e.target.checked == true) {
      setSelectedAddon([...SelectedAddon, addon]);
    } else {
      const ind = SelectedAddon.findIndex((item) => item.name == addon.name);
      const arr = SelectedAddon.splice(ind, 1);
      // console.log(ind);
      const newArr = SelectedAddon.filter((item) => {
        return item.name !== arr.name;
      });
      // console.log(arr);
      // console.log(newArr);
      setSelectedAddon(newArr);
    }
    console.log(e.target.checked);
  };

  return (
    <div className="form w-full h-full bg-white flex flex-col pt-[3rem] px-[4rem]">
      <h1 className="heading text-3xl font-bold text-sky-900">Pick add-ons</h1>
      <h4 className="text-gray-400 mt-2">
        Add-ons help enhance your gaming experience.
      </h4>
      <div className="inputs flex-1 flex flex-col justify-between ">
        <div className="card_container">
          <div className="cards flex flex-col gap-5 mt-5">
            {Addons.map((addon) => (
              <div
                key={addon.name}
                className="w-4/5 flex items-center gap-5 p-4 2xl:p-3 rounded-md border border-purple-900"
              >
                <div className="checkbox_adn mx-2">
                  <input
                    type="checkbox"
                    className="w-[1.2rem] aspect-square border-gray-300 accent-blue-700"
                    name="checkbc"
                    id="checkbox"
                    aria-label="checkbox"
                    checked={addon.isChecked}
                    onChange={(e) => handleCheckbox(addon, e)}
                  />
                </div>
                <div className="mid_text flex-1">
                  <h2 className="heading text-sky-900 font-bold">
                    {addon.name}
                  </h2>
                  <h3 className="caption 2xl:text-[.85rem] text-gray-400">
                    {addon.caption}
                  </h3>
                </div>
                <h3 className="price text-purple-700">
                  +$
                  {PlanType == "Monthly"
                    ? `${addon.mprice}/mo`
                    : `${addon.yprice}/yr`}
                </h3>
              </div>
            ))}
            {/* <div className="onln_service w-4/5 flex items-center gap-5 p-4 rounded-md border border-purple-900">
              <div className="checkbox_adn mx-2">
                <input
                  type="checkbox"
                  className="w-[1.2rem] aspect-square border-gray-300 accent-blue-700"
                  name="checkbc"
                  id="checkbox"
                  aria-label="checkbox"
                />{" "}
              </div>
              <div className="mid_text flex-1">
                <h2 className="heading text-sky-900 font-bold">
                  Online service
                </h2>
                <h3 className="caption text-gray-400">
                  Access to multiplayer games
                </h3>
              </div>
              <h3 className="price text-purple-700">+$1/mo</h3>
            </div> */}
            {/* <div className="lg_strg w-4/5 flex items-center gap-5 p-4 rounded-md border border-purple-900">
              <div className="checkbox_adn mx-2">
                <input
                  type="checkbox"
                  className="w-[1.2rem] aspect-square border-gray-300 accent-blue-700"
                  name="checkbc"
                  id="checkbox"
                  aria-label="checkbox"
                />{" "}
              </div>
              <div className="mid_text flex-1">
                <h2 className="heading text-sky-900 font-bold">
                  {" "}
                  Larger storage
                </h2>
                <h3 className="caption text-gray-400">
                  Extra 1TB of cloud save
                </h3>
              </div>
              <h3 className="price text-purple-700">+$2/mo</h3>
            </div>
            <div className="cstm_pfl w-4/5 flex items-center gap-5 p-4 rounded-md border border-purple-900">
              <div className="checkbox_adn mx-2">
                <input
                  type="checkbox"
                  className="w-[1.2rem] aspect-square border-gray-300 accent-blue-700"
                  name="checkbc"
                  id="checkbox"
                  aria-label="checkbox"
                />{" "}
              </div>
              <div className="mid_text flex-1">
                <h2 className="heading text-sky-900 font-bold">
                  Customizable Profile
                </h2>
                <h3 className="caption text-gray-400">
                  Custom theme on your profile
                </h3>
              </div>
              <h3 className="price text-purple-700">+$2/mo</h3>
            </div> */}
          </div>
        </div>
        <div className="controls flex justify-between mb-6">
          <button
            className="self-end text-[1rem] text-gray-400 hover:text-sky-700 font-bold justify-self-end p-2 px-5 rounded-md"
            onClick={() => navigate("/Plan")}
          >
            Go Back
          </button>
          <button
            className="self-end justify-self-end bg-sky-700 text-white p-2 px-5 rounded-md"
            onClick={() => navigate("/Summary")}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addon;

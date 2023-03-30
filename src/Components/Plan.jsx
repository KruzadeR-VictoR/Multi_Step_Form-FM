import React, { useContext, useEffect, useState } from "react";
import { DefContext } from "../App";

function Plan() {
  const {
    navigate,
    path,
    Plans,
    PlanType,
    setPlanType,
    SelectedPlan,
    setSelectedPlan,
  } = useContext(DefContext);

  // useEffect(() => {
  //   if (SelectedPlan) {
  //     setSelectedPlan(Plans[0]);
  //   }
  // }, []);

  const handleSubPeriod = () => {
    if (PlanType == "Yearly") setPlanType("Monthly");
    else setPlanType("Yearly");
  };

  // console.log(SelectedPlan);

  const handleSelected = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <>
      <div className="form w-full h-full bg-white flex flex-col pt-[3rem] px-[4rem]">
        <h1 className="heading text-3xl font-bold text-sky-900">
          Select your plan
        </h1>
        <h4 className="text-gray-400 mt-2">
          You have the option of monthly or yearly billing.
        </h4>
        <div className="inputs flex-1 flex flex-col justify-between ">
          <div className="card_container">
            <div className="cards flex gap-x-5 mt-5">
              {Plans.map((plan) => (
                <div
                  kay={plan.name}
                  className={`arcade border  hover:border-purple-800 rounded-md flex-1 max-w-[9rem] flex flex-col px-4 py-5 cursor-pointer ${
                    SelectedPlan.name == `${plan.name}`
                      ? "border-purple-800 bg-slate-50"
                      : "border-gray-300"
                  }`}
                  onClick={(e) => handleSelected(plan)}
                >
                  <img
                    src={`/icon-${plan.name.toLowerCase()}.svg`}
                    alt={plan.name.toLowerCase()}
                    className="self-start "
                  />
                  <div className="caption mt-[2.2rem]">
                    <h3 className="name font-bold text-sky-800 text-[1.1rem]">
                      {plan.name}
                    </h3>
                    <h4 className="price text-gray-400">
                      $
                      {PlanType == "Monthly"
                        ? `${plan.mprice}/mo`
                        : `${plan.yprice}/yr`}
                    </h4>
                  </div>
                </div>
              ))}
              {/* <div
                className={`arcade border  hover:border-purple-800 rounded-md flex-1 max-w-[9rem] flex flex-col px-4 py-5 cursor-pointer ${
                  SelectedPlan == "Arcade"
                    ? "border-purple-800 bg-slate-50"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedPlan("Arcade")}
              >
                <img
                  src="../../public/icon-arcade.svg"
                  alt=""
                  className="self-start "
                />
                <div className="caption mt-[2.2rem]">
                  <h3 className="name font-bold text-sky-800 text-[1.1rem]">
                    Arcade
                  </h3>
                  <h4 className="price text-gray-400">$9/mo</h4>
                </div>
              </div>
              <div
                className={`advanced border border-gray-300 hover:border-purple-800 rounded-md flex-1 max-w-[9rem] flex flex-col px-4 py-5 cursor-pointer ${
                  SelectedPlan == "Advanced"
                    ? "border-purple-800 bg-slate-50"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedPlan("Advanced")}
              >
                <img
                  src="../../public/icon-advanced.svg"
                  alt=""
                  className="self-start "
                />
                <div className="caption mt-[2.2rem]">
                  <h3 className="name font-bold text-sky-800 text-[1.1rem]">
                    Advanced
                  </h3>
                  <h4 className="price text-gray-400">$12/mo</h4>
                </div>
              </div>
              <div
                className={`pro border border-gray-300 hover:border-purple-800 rounded-md flex-1 max-w-[9rem] flex flex-col px-4 py-5 cursor-pointer ${
                  SelectedPlan == "Pro"
                    ? "border-purple-800 bg-slate-50"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedPlan("Pro")}
              >
                <img
                  src="../../public/icon-pro.svg"
                  alt=""
                  className="self-start "
                />
                <div className="caption mt-[2.2rem]">
                  <h3 className="name font-bold text-sky-800 text-[1.1rem]">
                    Pro
                  </h3>
                  <h4 className="price text-gray-400">$15/mo</h4>
                </div>
              </div> */}
            </div>
            <div className="plan_type flex items-center justify-center gap-x-5 bg-gray-50 p-3 mt-[2rem] rounded-md">
              <h3
                className={
                  PlanType == "Monthly"
                    ? "text-sky-800 font-bold text-sm"
                    : "text-gray-400 font-bold text-sm"
                }
              >
                Monthly
              </h3>
              <div className="toggle" role="button" onClick={handleSubPeriod}>
                <span
                  className={PlanType == "Yearly" ? "btn yearly" : "btn"}
                ></span>
              </div>
              <h3
                className={
                  PlanType == "Yearly"
                    ? "text-sky-800 font-bold text-sm"
                    : "text-gray-400 font-bold text-sm"
                }
              >
                Yearly
              </h3>
            </div>
          </div>
          <div className="controls flex justify-between mb-6">
            <button
              className="self-end text-[1rem] text-gray-400 hover:text-sky-700 font-bold justify-self-end p-2 px-5 rounded-md"
              onClick={() => navigate("/")}
            >
              Go Back
            </button>
            <button
              className="self-end justify-self-end bg-sky-700 text-white p-2 px-5 rounded-md"
              onClick={() => navigate("/Addon")}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;

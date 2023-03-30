import React, { useContext, useEffect, useState } from "react";
import { DefContext } from "../App";

function Summary() {
  const { navigate, PlanType, SelectedPlan, SelectedAddon } =
    useContext(DefContext);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [Total, setTotal] = useState();

  useEffect(() => {
    let sum = 0;
    const planPrice =
      PlanType == "Monthly" ? SelectedPlan.mprice : SelectedPlan.yprice;
    console.log(planPrice);
    SelectedAddon.map((adn) => {
      sum += PlanType == "Monthly" ? adn.mprice : adn.yprice;
      // console.log(nm);
    });
    setTotal(sum + planPrice);
  }, []);

  return (
    <div className="form w-full h-full bg-white flex flex-col px-[4rem]">
      {!IsSubmitted ? (
        <>
          <h1 className="heading text-3xl font-bold text-sky-900 pt-[3rem]">
            Finishing up
          </h1>
          <h4 className="text-gray-400 mt-2">
            Double-check everything looks OK before confirming.
          </h4>
          <div className="inputs flex-1 flex flex-col justify-between ">
            <div className="card_container">
              <div className="cards w-4/5 flex flex-col gap-5 mt-5 bg-gray-100 p-5 rounded-md">
                <div className="slctd_plan flex justify-between items-center">
                  <div className="left">
                    <h2 className="name font-bold text-sky-800 ">
                      {SelectedPlan.name} ({PlanType})
                    </h2>
                    <button
                      className="text-blue-800 text-sm underline"
                      onClick={() => navigate("/Plan")}
                    >
                      Change
                    </button>
                  </div>
                  <div className="price text-sky-800 font-bold">
                    $
                    {PlanType == "Monthly"
                      ? `${SelectedPlan.mprice}/mo`
                      : `${SelectedPlan.yprice}/yr`}
                  </div>
                </div>
                <hr />
                {SelectedAddon &&
                  SelectedAddon.map((addon) => (
                    <div className="onl_svc flex justify-between items-center">
                      <h3 className="name text-gray-400">{addon.name}</h3>
                      <h3 className="price text-sky-800">
                        +$
                        {PlanType == "Monthly"
                          ? `${addon.mprice}/mo`
                          : `${addon.yprice}/yr`}
                      </h3>
                    </div>
                  ))}
                {/* <div className="onl_svc flex justify-between items-center">
                  <h3 className="name text-gray-400">Online service</h3>
                  <h3 className="price text-sky-800">+$1/mo</h3>
                </div>
                <div className="lg_stg flex justify-between items-center">
                  <h3 className="name text-gray-400">Larger storage</h3>
                  <h3 className="price text-sky-800">+$2/mo</h3>
                </div> */}
              </div>
              <div className="total w-4/5 px-5 py-2 flex justify-between items-center">
                <h3 className="text text-gray-400">
                  Total (per {PlanType == "Monthly" ? "month" : `year`})
                </h3>
                <h2 className="tl_price text-blue-800 text-lg font-bold">
                  +${Total}/{PlanType == "Monthly" ? "mo" : `yr`}
                </h2>
              </div>
            </div>
            <div className="controls flex justify-between mb-6">
              <button
                className="self-end text-[1rem] text-gray-400 hover:text-sky-700 font-bold justify-self-end p-2 px-5 rounded-md"
                onClick={() => navigate("/Addon")}
              >
                Go Back
              </button>
              <button
                className="self-end justify-self-end bg-sky-700 text-white p-2 px-5 rounded-md"
                onClick={() => setIsSubmitted(true)}
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="Thank_page flex-1 flex flex-col justify-center items-center gap-2">
          <img src="/icon-thank-you.svg" alt="" className="max-h-[4rem]" />
          <h1 className="thank_text text-[1.5rem] font-bold mt-3">
            Thank you!
          </h1>
          <p className="caption text-center text-gray-500 max-w-[28rem]">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      )}
    </div>
  );
}

export default Summary;

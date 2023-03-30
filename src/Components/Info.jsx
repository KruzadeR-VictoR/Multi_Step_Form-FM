import React, { useContext, useEffect, useState } from "react";
import { DefContext } from "../App";

function Info() {
  const { navigate, name, setName, email, setEmail, phone, setPhone } =
    useContext(DefContext);

  const [isNameEmpty, setisNameEmpty] = useState(false);
  const [isEmailEmpty, setisEmailEmpty] = useState(false);
  const [isPhoneEmpty, setisPhoneEmpty] = useState(false);

  useEffect(() => {
    if (email != "") {
      setisEmailEmpty(false);
    }
    if (name != "") {
      setisNameEmpty(false);
    }
    if (phone != "") {
      setisPhoneEmpty(false);
    }
  }, [name, email, phone]);

  const handleNext = () => {
    if (phone == "") {
      setisPhoneEmpty(true);
      // return;
    }
    if (name == "") {
      setisNameEmpty(true);
      // return;
    }
    if (email == "") {
      setisEmailEmpty(true);
      // return;
    }
    if (email && name && phone) navigate("/Plan");
  };

  return (
    <>
      <div className="form w-full h-full bg-white flex flex-col pt-[3rem] px-[4rem]">
        <h1 className="heading text-3xl font-bold text-sky-900">
          Personal info
        </h1>
        <h4 className="text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </h4>
        <div className="inputs flex-1 flex flex-col justify-between ">
          <div className="flex flex-col">
            <div>
              <div className="flex justify-between items-end">
                <label
                  htmlFor="Name"
                  className="mt-5 mb-1 text-[.9rem] text-sky-900"
                >
                  Name
                </label>
                {isNameEmpty && (
                  <span className="mb-1 text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <input
                className="p-3 rounded-md border w-full border-gray-300 bg-white"
                type="text"
                id="Name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-end">
                <label
                  htmlFor="Email"
                  className="mt-5 mb-1 text-[.9rem] text-sky-900"
                >
                  Email Address
                </label>
                {isEmailEmpty && (
                  <span className="mb-1 text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <input
                className="p-3 w-full rounded-md border border-gray-300 bg-white"
                type="email"
                id="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-end">
                <label
                  htmlFor="Phone"
                  className="mt-5 mb-1 text-[.9rem] text-sky-900"
                >
                  Phone Number
                </label>
                {isPhoneEmpty && (
                  <span className="mb-1 text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <input
                className="p-3 w-full rounded-md border border-gray-300 bg-white"
                type="text"
                id="Phone"
                placeholder="Phone no."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="self-end justify-self-end bg-sky-700 mb-6 text-white p-2 px-5 rounded-md text-[.9rem]"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;

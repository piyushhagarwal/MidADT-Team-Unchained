import React from "react";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Body() {
  const [trucks, setTrucks] = useState([]);
  const userColloctionRef = collection(db, "Trucks");
  useEffect(() => {
    const getTrucks = async () => {
      const data = await getDocs(userColloctionRef);
      setTrucks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTrucks();
  }, []);

  const url = "https://www.google.co.in/?client=safari&channel=mac_bm";

  return (
    <div className="pb-20 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full mx-4 py-10">
      {trucks.map((truck) => {
        return (
          <>
            <div
              className="  rounded-2xl p-6 "
              style={{ "background-color": "#c8f7dc" }}
            >
              <div className="flex justify-center mb-6">
                <div className=" font-bold text-slate-600">{truck.number}</div>
              </div>
              <div className="flex justify-center mb-6">
                <div className=" font-bold text-slate-600">{truck.model}</div>
              </div>
              {/* <div>{props.img}</div> */}
              <div className="flex justify-center">
                <img
                  src={truck.imgUrl}
                  alt=""
                  width="200"
                  height="200"
                  className="rounded-2xl"
                ></img>
              </div>
              <div className="flex justify-between mt-6">
                <div className="inline ml-12 font-bold text-slate-600">
                  Tyre purchased on:
                </div>
                <div className="inline mr-12">{truck.tyre[0]}</div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="inline ml-12 font-bold text-slate-600">
                  Tyre valid till:
                </div>
                <div className="inline mr-12">{truck.tyre[1]}</div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center mb-4 bg-teal-800 p-3 font-bold text-white w-1/3 rounded-xl hover:bg-lime-200 hover:text-lime-800">
                  <button className="hover:text-lime-800">Buy Tyre</button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="inline ml-12 font-bold text-slate-600">
                  Brake purchased on:
                </div>
                <div className="inline mr-12">{truck.brake[0]}</div>
              </div>
              <div className="flex justify-between">
                <div className="inline ml-12 font-bold text-slate-600">
                  Brake valid till:
                </div>
                <div className="inline mr-12">{truck.brake[0]}</div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center mt-4 bg-teal-800 p-3 font-bold text-white w-1/3 rounded-xl">
                  <button>Buy Brake</button>
                </div>
              </div>
              {/* <div className='flex justify-center'></div> */}
            </div>
          </>
        );
      })}
    </div>
  );
}

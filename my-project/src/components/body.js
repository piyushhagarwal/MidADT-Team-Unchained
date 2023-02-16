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
    <div id="body">
      <h1
        class="text-center m-2 display-2 "
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        <b>Owned Vehicles</b>
      </h1>
      <div className="pb-20 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full mx-4 py-10 mt-10">
        {trucks.map((truck) => {
          return (
            <>
              <div
                className="  rounded-2xl p-6 "
                style={{ "background-color": "#232427" }}
              >
                <div className="flex justify-center mb-6">
                  <div className=" font-bold text-slate-50 text-2xl">
                    {truck.number}
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <div className=" font-bold text-slate-50 text-2xl">
                    {truck.model}
                  </div>
                </div>
                {/* <div>{props.img}</div> */}
                <div className="flex justify-center py-5">
                  <img
                    src={truck.imgUrl}
                    alt=""
                    width="300"
                    height="300"
                    className="rounded-2xl"
                  ></img>
                </div>
                <div className="flex justify-between mt-6">
                  <div className="inline ml-12 font-bold  text-slate-50">
                    Tyre purchased on:
                  </div>
                  <div className="inline mr-12  text-slate-50 ">
                    {truck.tyre[0]}
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="inline ml-12 font-bold  text-slate-50">
                    Tyre valid till:
                  </div>
                  <div className="inline mr-12 text-slate-50 ">
                    {truck.tyre[1]}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="inline ml-12 font-bold  text-slate-50">
                    Brake purchased on:
                  </div>
                  <div className="inline mr-12  text-slate-50 ">
                    {truck.brake[0]}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="inline ml-12 font-bold  text-slate-50">
                    Brake valid till:
                  </div>
                  <div className="inline mr-12  text-slate-50 ">
                    {truck.brake[1]}
                  </div>
                </div>

                {/* <div className='flex justify-center'></div> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

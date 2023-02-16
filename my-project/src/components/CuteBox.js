import React from "react";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function CuteBox() {
  const [trucks, setTrucks] = useState([]);
  const userColloctionRef = collection(db, "Trucks");
  useEffect(() => {
    const getTrucks = async () => {
      const data = await getDocs(userColloctionRef);
      setTrucks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTrucks();
  }, []);

  let arr = [];
  const date = new Date();

  function subDays(date) {
    var result = new Date(date);
    result.setDate(result.getDate() - 30);
    return result;
  }

  let now = new Date();

  function pusher() {
    trucks.forEach((truck) => {
      let et = new Date(truck.tyre[1]);
      const x = subDays(et);
      if (x < now) {
        arr.push({ number: truck.number, part: "tyre", expiry: truck.tyre[1] });
      }

      let eb = new Date(truck.brake[1]);
      const y = subDays(eb);
      if (y < now) {
        arr.push({
          number: truck.number,
          part: "brake",
          expiry: truck.brake[1],
        });
      }
    });
  }
  pusher();

  return (
    <div class=" mb-7">
      <h1 class="text-center m-2 text-4xl  mb-7">
        <u>Live Updates of Maintanance</u>
      </h1>
      <div className="pb-3 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2  w-full mx-6 mt-5">
        {arr.map((event) => {
          return (
            <div className=" p-4 m-2 border-solid border-2 border-slate-600 rounded-2xl hover:text-white hover:bg-black">
              <div className=" font-bold">{event.number}</div>
              <div>
                Part: <div className="font-bold inline"> {event.part} </div>
              </div>
              <div>
                Best till:{" "}
                <div className="font-bold inline">{event.expiry}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-3">
        <a href="#maps">
          <button class="btn btn-dark btn-lg py-3 px-4 mx-2">
            Buy these spare parts
          </button>
        </a>
      </div>
    </div>
  );
}

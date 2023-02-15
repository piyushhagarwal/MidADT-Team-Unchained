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
    <>
      <div className="pb-10 grid xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-10 w-full ml-2">
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
      <div className="flex justify-center">
        <div className=" mb-10">
          <button className="p-6 rounded-2xl bg-lime-400 ml-11">
            Buy these
          </button>
        </div>
      </div>
    </>
  );
}

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

  return (
    <div>
      {trucks.map((truck) => {
        return (
          <div>
            <h1>{truck.model}</h1>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import OrderCard from "../Components/Marketplace/OrderCard";
import { useUserID } from "../Hooks/userContext";
import { BASE_URL } from "../Data/apiData";
import axios from "axios";
export default function MyOrders() {
  const navigator = useNavigate();
  const [width, setWidth] = useState(600);
  const buldrUser = useUserID();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get(BASE_URL + "/user-orders/" + buldrUser);
    setOrders(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="pb-20 dark:bg-slate-900">
      {width > 600 && <Navigation />}
      {width <= 600 && <Navigation />}
      <Navbar />
      {width <= 600 && (
        <div
          className="flex z-10 md:hidden justify-center w-screen h-20 bg-gray-100 dark:bg-slate-800 fixed top-0"
          style={{ alignItems: "center" }}
        >
          <img
            width="50px"
            height="50px"
            src="https://i.postimg.cc/hGqFHfxB/Beige-Simple-One-Line-Butterfly-Events-Logo-removebg-preview.png"
            onClick={() => navigator("/")}
          />
          <h2 className="text-xl font-bold text-black font-title dark:text-gray-100">
            <span className="text-primary-500">BULDR.</span> Orders
          </h2>
        </div>
      )}
      <div
        className="min-h-screen bg-base flex flex-wrap flex-col font-primary dark:bg-slate-900"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="w-full flex flex-col items-center justify-center md:p-24 mt-20">
          <h2 className="mt-4 mtext-xl text-center md:text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            My{" "}
            <span className="text-primary-600 dark:text-primary-500">
              Orders
            </span>{" "}
          </h2>
          <h2 className="mt-4 text-md font-medium text-center md:text-left leading-none tracking-tight text-gray-600 dark:text-gray-600">
            Orders placed on my products
          </h2>
        </div>
        <div className="noscrollbar w-full gap-2 md:px-24 pb-24 overflow-x-scroll flex flex-col flex-wrap">
          {!loading && orders.map((a) => <OrderCard data={a} />)}
        </div>
      </div>
    </div>
  );
}

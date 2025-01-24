import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Data/apiData";
import { BsArrowDownCircleFill, BsArrowDownShort } from "react-icons/bs";
import { CgArrowUp } from "react-icons/cg";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { trueGray } from "tailwindcss/colors";
import { Spinner } from "flowbite-react";

export default function OrderCard({ data }) {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(false);
  const [shipping, setShipping] = useState(false);
  const getData = async () => {
    console.log(data);
    const res = await axios.get(BASE_URL + "/post/" + data.postID);
    setPost(res.data);
    setLoading(false);
  };
  const setShipped = async () => {
    setShipping(true);
    data.status = "shipped";
    await axios.put(BASE_URL + "/order/" + data.orderID);
    setShipping(false);
  };
  const transformDate = (a) => {
    a = parseInt(a);
    let dt = new Date(a);
    return dt.toDateString();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-full flex flex-col justify-between p-8 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 rounded-xl dark:bg-slate-800">
      <div className="flex flex-row items-center justify-between">
        {!loading && (
          <div className="flex ">
            <img
              width="100px"
              style={{ objectFit: "contain" }}
              src={post.image}
              className="mr-4"
            />
            <div className="">
              <h2 className="font-bold mb-2 text-2xl text-primary-500">
                Order# {data.orderID}
              </h2>
              <h2 className="font-semibold text-lg dark:text-white">
                {post.title}
              </h2>
              <h2 className="dark:text-white">{data.addresss}</h2>
              {data.status == "shipped" && (
                <h2 className="mt-4 font-bold text-blue-500">Shipping</h2>
              )}
              {data.status == "pending" && (
                <h2 className="mt-4 font-bold text-red-500">Pending</h2>
              )}
              {data.status == "complete" && (
                <h2 className="mt-4 font-bold text-green-500">Complete</h2>
              )}
            </div>
          </div>
        )}
        {!loading && (
          <div className="">
            {!details && (
              <div className="p-4 rounded-full dark:bg-slate-600 dark:hover:bg-slate-600 cursor-pointer">
                <MdArrowDropDown
                  size={24}
                  className="dark:text-white"
                  onClick={() => setDetails(true)}
                />
              </div>
            )}
            {details && (
              <div className="p-4 rounded-full dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer">
                <MdArrowDropUp
                  size={24}
                  className="dark:text-white"
                  onClick={() => setDetails(false)}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {details && (
        <div className="w-full bg-gray-50 shadow-md dark:bg-slate-900 my-2 p-4 rounded-5xl">
          <div className="divider"></div>
          <h2 className="font-bold my-4 text-xl dark:text-gray-500">
            Order Details
          </h2>
          <div className="w-full md:w-1/2 flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Customer Name : </h2>
            <h2 className="dark:text-white">{data.customerName}</h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">
              Customer Contact :{" "}
            </h2>
            <h2 className="dark:text-white">{data.customerContact}</h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Order Date : </h2>
            <h2 className="dark:text-white">{transformDate(data.date)}</h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-between">
            <h2 className="font-semibold dark:text-white">Order Quantity : </h2>
            <h2 className="dark:text-white">{data.qty}</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-between">
            <h2 className="font-semibold dark:text-white">Notes : </h2>
            <h2 className="dark:text-white">{data.note}</h2>
          </div>
          {data.status == "pending" && (
            <button
              onClick={() => {
                setShipped();
                alert("Order Shipped Successfully");
              }}
              class="text-white my-2 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {!shipping && <p>Ship Order</p>}
              {shipping && (
                <div>
                  <Spinner />
                  Shipping Order
                </div>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

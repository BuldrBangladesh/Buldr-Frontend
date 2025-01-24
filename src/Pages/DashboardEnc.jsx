import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Data/apiData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OrderCard({ data }) {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(false);
  const [shipping, setShipping] = useState(false);
  const getData = async () => {
    console.log(data);
    setLoading(true);

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
    <div className="pl-5 pt-10">
      {!loading && (
        <Card
          sx={{
            maxWidth: 550,
            alignItems: "center",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "space-around",
            margin: "2rem 2rem",
          }}
        >
          <CardMedia sx={{ height: 400 }} image={post.image} title="ajgumi" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            <h5 className="font-bold my-4 text-xl dark:text-gray-500">
              Order Details
            </h5>
            <div className="w-full flex items-center">
              <h5 className="font-semibold dark:text-white">
                Customer Name : _
              </h5>
              <h5 className="dark:text-white">{data.customerName}</h5>
            </div>
            <div className="w-full  flex items-center ">
              <h5 className="font-semibold dark:text-white">
                Customer Contact :{" "}
              </h5>
              <h5 className="dark:text-white">{data.customerContact}</h5>
            </div>
            <div className="w-full  flex items-center ">
              <h5 className="font-semibold dark:text-white">Order Date : </h5>
              <h5 className="dark:text-white">{transformDate(data.date)}</h5>
            </div>
            <div className="w-full   items-center ">
              <h5 className="font-semibold dark:text-white">
                Order Quantity :{" "}
              </h5>
              <h5 className="dark:text-white">{data.qty}</h5>
            </div>

            <div className="w-full  flex items-center ">
              <h5 className="font-semibold dark:text-white">Order Status : </h5>
              <h5 className="dark:text-white">{data.status}</h5>
            </div>
            <div className="w-full  flex flex-col items-start ">
              <h5 className="font-semibold dark:text-white">Notes : </h5>
              <h5 className="dark:text-white">{data.note}</h5>
            </div>
          </CardContent>
          <CardActions>
            {data.status == "pending" && (
              <Button
                variant="contained"
                onClick={() => {
                  setShipped();
                  alert("Order Shipped Successfully");
                }}
              >
                Ship
              </Button>
            )}
          </CardActions>
        </Card>
      )}
    </div>
  );
}

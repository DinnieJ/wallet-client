/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetch } from "react-async";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import FirstTimeTOTP from "./FirstTimeTOTP";
import { Box, Typography } from "@mui/material";
import TOTPVerify from "./TOTPVerify";

const Confirm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const session = searchParams.get("session")
  const [img, setImg] = useState("")
  const navigate = useNavigate()
  if (!session) {
    return <Navigate to={"/login"} />
  }
  useEffect(() => {
    axios.get(`http://localhost:5000/verify/${session}`).then(response => {
      // data = response.data
      console.log(response.data)
      if (response.data) {
        if (response.data.challenge == "FIRST_TIME_LOGIN") {
          navigate("/firsttime", {state:{ qr: response.data.qr, session: session }})
          // setImg(response.data.qr)
          // console.log(response.data.qr)
          // return <Navigate to={"/firsttime"} state={{ qr: data.qr, session: session }}/>
        } else if (response.data.challenge == "VERIFY_TOTP") {
          navigate("/otp", {state:{session: session }})
        }
      }
    })
  }, [])
};

export default Confirm;

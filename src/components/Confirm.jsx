/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect } from "react";
import { useFetch } from "react-async";
import { Navigate, useSearchParams } from "react-router-dom";
import FirstTimeTOTP from "./FirstTimeTOTP";
import { Typography } from "@mui/material";

const Confirm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code")
  console.log(code)
  if(!code) {
    return <Navigate to={"/login"}/>
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data, error} = useFetch("http://localhost:5000/verify", {
    headers: {
        accept: "application/json",
    },
    body: {
        code
    }
  })
  console.log(data, error);
  if (error) {
    console.log(error);
    return <Typography variant="h1">Error try to get TOTP verify</Typography>
  }

  if (data) {
    if(data.challenge == "FIRST_TIME_SETUP") {
        return <FirstTimeTOTP base64qr={data.qr} session={data.session}/>
    } else {
        return null
    }
  }
  return <div>Confirm</div>;
};

export default Confirm;

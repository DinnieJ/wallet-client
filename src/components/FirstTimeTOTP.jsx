import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './FirstTimeTOTP.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import useAxios from 'axios-hooks'
import axios from 'axios'

function FirstTimeTOTP(props) {
  const [otp, setOTP] = useState("")
  const { state } = useLocation()
  const { qr, session } = state
  const navigate = useNavigate()

  const doSomething = () => {
    axios.post("http://localhost:5000/setup-otp", {code: otp, session: session}).then(response => {
      if(response.data.success) {
        console.log("OK")
        navigate("/dashboard")
      } else {
        console.log("Wrong")
      }
    })
  }
  return (
    <div className='FirstTimeTOTP'>
      <Typography variant='h3'>First time login</Typography>
      <Box
        sx={{
          height: 400,
          width: 400,
        }}
        component="img"
        src={`data:image/png;base64,${qr}`}
      />
      <TextField value={otp} onChange={(e) => setOTP(e.target.value)} />
      <Button variant='contained' onClick={() => doSomething()}>Submit</Button>
    </div>
  )
}


export default FirstTimeTOTP

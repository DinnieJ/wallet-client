import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, TextField, Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router'
import axios from 'axios'

function TOTPVerify(props) {
    const [otp, setOTP] = useState("")
    const { state } = useLocation()
    const { session } = state
    const navigate = useNavigate()
    const doSomething2 = () => {
        axios.post("http://localhost:5000/verify-totp", {code: otp, session: session}).then(response => {
          if(response.data.success) {
            console.log("OK")
            navigate("/dashboard")
          } else {
            console.log("Wrong")
          }
        })
      }
  return (
    <div>
        <Typography variant='h3'>Input your OTP code</Typography>
        <TextField value={otp} onChange={(e) => setOTP(e.target.value)} />
        <Button variant='contained' onClick={() => doSomething2()}>Verify</Button>
    </div>
  )
}

TOTPVerify.propTypes = {
    session: PropTypes.string,
    base64qr: PropTypes.string
}

export default TOTPVerify

import React from 'react'
import PropTypes from 'prop-types'
import './LoginForm.css'
import { Button, Typography } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useTheme } from '@emotion/react';

function LoginForm(props) {
    const theme = useTheme()

    return (
        <div className='LoginForm'
        >
            <Typography variant='h4' style={{ marginBottom: "10px" }}>E-Passbook</Typography>
            <Button variant='contained' startIcon={<GoogleIcon />}>Login with Google</Button>
        </div>
    )
}

LoginForm.propTypes = {}

export default LoginForm

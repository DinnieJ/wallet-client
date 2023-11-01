import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../redux/counter'
import { Amplify } from 'aws-amplify'

Amplify.configure()

const Root = () => {
    const storeCounter = useSelector(store => store.counter.counter)
    const dispatch = useDispatch()
    return (
        <>
            <Typography variant='h1'>Hello there {storeCounter} </Typography>
            <TextField variant='outlined' onChange={(e) => console.log(e.target.value)} />
            <Button variant='contained' onClick={() => dispatch(increment())}>Hello </Button>
        </>
    )
}

export default Root
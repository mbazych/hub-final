import React, { Fragment } from 'react'
import Form from './Form'
import Reservations from './Reservations'

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Reservations/>
        </Fragment>
    )
}

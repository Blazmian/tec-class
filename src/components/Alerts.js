import '../styles/Alerts.css'
import css from 'classnames'
import React, { useState } from 'react'

export default function Alerts({ children, type, message }) {

    const [isShow, setIsShow] = useState(true)

    const renderAlert = function () {
        return React.cloneElement(children)
    }

    const handleClose = (e) => {
        e.preventDefault()
        setIsShow(false)
    }

    return(
        <div className={css("alert", [type], !isShow && "hide")}>
            <span className={"closebtn"} onClick={handleClose}>&times;</span>
            { children ? renderAlert() : message }
        </div>
    )
}
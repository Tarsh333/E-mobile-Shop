import React from 'react'
import {useLocation} from 'react-router-dom'
function ErrorPage() {
    const path=useLocation().pathname
    return (
        <div>
           404 ERROR page not found the requested url {path} was not found 
        </div>
    )
}

export default ErrorPage

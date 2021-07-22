import React from 'react'
import { useHistory } from 'react-router'
import end from '../images/end.png'


export default function Start() {
    const history = useHistory()
    return (
        <div>
            <div className="image-container">
                <img src={end} alt="badge"/>
            </div>
        </div>
    )
}

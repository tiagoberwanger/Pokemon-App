import React from 'react'
import { useHistory } from 'react-router'
import start from '../images/start.png'


export default function Start() {
    const history = useHistory()
    return (
        <div>
            <div className="image-container">
                <img src={start} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button " onClick={() => history.push('/firesbg')}>
                    Start
                </button>
            </div>
        </div>
    )
}

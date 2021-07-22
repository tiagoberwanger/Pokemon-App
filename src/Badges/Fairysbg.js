import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import fairysbg from '../images/fairysbg.png'

export default function Fairysbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/fairycbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={fairysbg} alt="badge"/>
            </div>
            <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/fairycbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

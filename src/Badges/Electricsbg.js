import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import electricsbg from '../images/electricsbg.png'

export default function Electricsbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/electriccbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={electricsbg} alt="badge"/>
            </div>
        <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/electriccbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import flyingsbg from '../images/flyingsbg.png'

export default function Flyingsbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/flyingcbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={flyingsbg} alt="badge"/>
            </div>
            <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/flyingcbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

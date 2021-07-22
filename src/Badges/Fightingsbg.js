import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import fightingsbg from '../images/fightingsbg.png'

export default function Fightingsbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/fightingcbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={fightingsbg} alt="badge"/>
            </div>
            <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/fightingcbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

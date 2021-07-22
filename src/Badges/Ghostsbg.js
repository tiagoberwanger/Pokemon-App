import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import ghostsbg from '../images/ghostsbg.png'

export default function Ghostsbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/ghostcbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={ghostsbg} alt="badge"/>
            </div>
            <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/ghostcbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

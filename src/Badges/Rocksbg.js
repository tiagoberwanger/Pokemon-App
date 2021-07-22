import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import rocksbg from '../images/rocksbg.png'

export default function Rocksbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/rockcbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={rocksbg} alt="badge"/>
            </div>
        <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/rockcbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

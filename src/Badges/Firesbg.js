import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

import Timer from '../utils/timer'

import firesbg from '../images/firesbg.png'

export default function Firesbg() {
    const history = useHistory()
    let interval
    const timer = (path) => {
        interval = setInterval(() => history.push(path) && clear(), 60000)
    }

    const clear = () => clearInterval(interval);

    useEffect(() => {
        timer('/firecbg')
        return function cleanup() {
            clear()
          };
    }, [])

    return (
        <div>
            <div className="image-container">
                <img src={firesbg} alt="badge"/>
            </div>
            <Timer />
            <div className="button-container">
                <button className="button " onClick={() => history.push('/firecbg') && clear()}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

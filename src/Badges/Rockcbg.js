import React from 'react'
import { useHistory } from 'react-router'
import rockcbg from '../images/rockcbg.png'

export default function Rockcbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={rockcbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/fightingsbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

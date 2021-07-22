import React from 'react'
import { useHistory } from 'react-router'
import fightingcbg from '../images/fightingcbg.png'

export default function Fightingcbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={fightingcbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/end')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

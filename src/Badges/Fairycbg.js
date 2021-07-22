import React from 'react'
import { useHistory } from 'react-router'
import fairycbg from '../images/fairycbg.png'

export default function Flyingcbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={fairycbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/electricsbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

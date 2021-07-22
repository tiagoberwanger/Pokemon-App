import React from 'react'
import { useHistory } from 'react-router'
import flyingcbg from '../images/flyingcbg.png'

export default function Flyingcbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={flyingcbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/fairysbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

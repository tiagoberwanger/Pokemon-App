import React from 'react'
import { useHistory } from 'react-router'
import firecbg from '../images/firecbg.png'

export default function Firesbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={firecbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/flyingsbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

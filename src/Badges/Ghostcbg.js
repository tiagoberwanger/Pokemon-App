import React from 'react'
import { useHistory } from 'react-router'
import ghostcbg from '../images/ghostcbg.png'

export default function Ghostcbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={ghostcbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/rocksbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

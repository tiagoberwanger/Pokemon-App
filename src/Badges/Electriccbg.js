import React from 'react'
import { useHistory } from 'react-router'
import electriccbg from '../images/electriccbg.png'

export default function Electriccbg() {
    const history = useHistory()

    return (
        <div>
            <div className="image-container">
                <img src={electriccbg} alt="badge"/>
            </div>
            <div className="button-container">
                <button className="button" onClick={() => history.push('/ghostsbg')}>
                    Próximo
                </button>
            </div>
        </div>
    )
}

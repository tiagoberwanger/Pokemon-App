import React from 'react'
import { useTimer } from 'use-timer';

export default function Timer() {
    const { time } = useTimer(
        {
            initialTime: 60,
            timerType: 'DECREMENTAL',
            autostart: true,
        }
    );
    return (
        <div className="timer-container">
            <p>Elapsed time: {time}</p>
        </div>
    )
}

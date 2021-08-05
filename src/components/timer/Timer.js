import React from 'react';

const Timer = ({timer}) => {
    return (
        <p className="content">{timer.minutes}:{timer.seconds}</p>
    )
}

export default Timer

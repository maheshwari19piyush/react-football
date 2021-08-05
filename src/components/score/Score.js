import React from 'react'

const Score = ({score}) => {
    return (
        <div >
            <div className="horizontal">
                <p className="content">{score.goalTeamA}</p> 
                <p className="content">Goals</p> 
                <p className="content">{score.goalTeamB}</p> 
            </div>
            <div className="horizontal">
                <p className="content">{score.savesTeamA}</p> 
                <p className="content">Saves</p> 
                <p className="content">{score.savesTeamB}</p> 
            </div>
        </div>
    )
}

export default Score

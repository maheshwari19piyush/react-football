import React from 'react'

const Teams = ({teams}) => {
    return (
        <div>
            <div className="card-left">
                <img className="image-responsive" height="200" width="200"src={`${teams.imgTeamA}`} alt="teamA"/>
                <h2 className="team-style">{teams.teamA}</h2>
            </div>
            <div className="card-center">
                
            </div>
            <div className="card-right">
                <img className="image-responsive" height="200" width="200" src={`${teams.imgTeamB}`} alt="teamB"/>
                <h2 className="team-style">{teams.teamB}</h2>
            </div>
        </div>
    )
}

export default Teams

import { useState, useEffect, useMemo } from "react";
import Score from "./components/score/Score";
import Teams from "./components/team/Teams";
import Timer from "./components/timer/Timer";
import axios from "axios";

function App() {

  const [teams,setTeams] = useState({
    teamA:"",
    teamB:"",
    imgTeamA:"",
    imgTeamB:"",
  });

  const [timer,setTimer] = useState({
    minutes:89,
    seconds:59,
  });

  const [score,setScore] = useState({
    onUpdate:false, goalTeamA:0, goalTeamB:0, savesTeamA:0, savesTeamB:0,
  });

  const url = "http://localhost:5000/api/teams";
  const urlScore = "http://localhost:5000/api/score";

  useEffect(()=>{
    getTeams();
  },[]);

  useEffect( ()=>{
    timer.minutes !== 89 && getScore();
  },[timer.minutes])

  async function getTeams(){
    const response = await axios.get(url);
    setTeams(response.data.teams);
  } 

  async function getScore(){
    const response = await axios.get(urlScore);
    response.data.score.onUpdate && setScore(response.data.score);
  }
 
  useEffect(()=>{
    timer.seconds > 0 && setTimeout(() => setTimer({...timer,seconds:timer.seconds-1}),1000);
    timer.seconds === 0 && timer.minutes > 0 && setTimer({minutes:timer.minutes-1,seconds:59});
  },[timer]);

  const memoScore = useMemo(()=>{
      return <Score score={score} />
  },[score])

  const memoTeams = useMemo(()=>{
    return <Teams teams={teams} />
  },[teams])

  return (
    <div>
        <div className="horizontal">
            <p className="content live">Live</p>
            <p className="content">Scores</p>
            <Timer timer={timer}/>
        </div>
        <div className="card">
            {memoTeams}
            {memoScore}     
        </div>
    </div>   
  );
}

export default App;













// useEffect( ()=>{
//   if(timer.minutes<89){
//     const onUpdate = Math.floor(Math.random() * 2);
//     onUpdate && getScore();
//   }
// },[timer.minutes])
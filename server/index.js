const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const teams = {
    teamA:"Manchester United",
    teamB:"Arsenal",
    imgTeamA:"https://lh3.googleusercontent.com/KNyKMfQqqVcLYAROYJ6KPW7nqmyMMcuc7npdzuzYI9KXhnZDJ3Wkfqy_apcQTDgq2QlNp9LzqQly06N5qsNxUOLT",
    imgTeamB:"https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
};

const score = {
    onUpdate:false, goalTeamA:0, goalTeamB:0, savesTeamA:0, savesTeamB:0,
};

const scoreStat = ["goalTeamA", "goalTeamB", "savesTeamA", "savesTeamB"];

app.get("/",(req,res) => {
    res.send("Server working")
});

app.get("/api/teams",(req,res) => {
    res.send({teams});
});

app.get("/api/score",(req,res) => {
    let onUpdate = Math.floor(Math.random() * 2);
    if(onUpdate === 1){
        let updateIndex = Math.floor(Math.random() * 4);
        const updateField = scoreStat[updateIndex];
        score[updateField]=score[updateField]+1;
        score['onUpdate']=true; 
        console.log(score);
        res.send({score});
    }else{
        score['onUpdate']=false;
        console.log(score);
        res.send({score});
    }
});


app.listen(5000, () => console.log("Listening to port 5000"));



















// score['id'] = Math.floor(Math.random()*1000)+1;

// id:0,

// app.get("/api/score",(req,res) => {
//     let updateIndex = Math.floor(Math.random() * 4);
//     const updateField = scoreStat[updateIndex];
//     score[updateField]=score[updateField]+1;
//     console.log(score);
//     res.send({score});
// });
// const teamADataHandel = require('../Model/model');
const matchDataHandel = require('../Model/MatchModel.js');
const teamDataHandel = require('../Model/teamModel.js');
// const teamModel = require('../Model/teamModel');


// exports.getTeamAData = (req,res) => {
//     teamADataHandel.find().then(result => {
//         res.json({
//             message:"TeamA data fetched successfully !!",
//             response:result
//         })
//     }).catch(error => {
//         res.json({
//             message:error
//         })
//     });
// }

exports.getMatchDetails = (req,res) => {
    matchDataHandel.find().then(result => {
        res.json({
            message:"Match Details fetched successfully !!",
            response:result
        })
    }).catch(error => {
        res.json({
            message:error
        })
    });
}

exports.matchDetailsById = (req,res) => {
    const matchId = req.body.matchId;
    matchDataHandel.find({
        match_id:matchId
    }).then(result => {
        res.json({
            message:"Data Fetched Successfully !",
            response:result
        })
    }).catch(error => {
        res.json({
            message:error
        })
    });
}

exports.createTeam = (req,res) => {
    const team = req.body.team;
    const saveTeam = teamDataHandel({
        team:team
    });

    saveTeam.save().then(result => {
        res.json({
            message:"Team Save Succesfully !!!",
            response:result
        })
    }).catch(error => {
        res.json({
            message:error
        })
    });   
}

exports.getAllTeamData = (req,res) => {
    teamDataHandel.find().then(result => {
        res.json({
            message:"Team Data Fetched Successfully!!!",
            response:result
        })
    }).catch(error => {
        res.json({
            message:error
        })
    });
}
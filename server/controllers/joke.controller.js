const { Joke } = require('../models/joke.models');

//all jokes
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(AllJokes => res.json({jokes: AllJokes}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//one joke
module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.params._id})
        .then(OneJoke => res.json({joke: OneJoke}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//new joke
module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.status(400).json(err));
}

//update joke
module.exports.updateJoke = (req,res) => {
    Joke.update({_id: req.params._id}, {
        $set: {
            setup: req.body.setup,
            punchline: req.body.punchline
        }
    })
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.status(400).json(err));
}

//delete joke
module.exports.deleteJoke = (req,res) => {
    Joke.remove({_id: req.params._id})
        .then(delJoke => res.json({message: "Deleted your terrible joke"}))
        .catch(err => res.json({message: "You bombed your joke", error: err}))
}

//random  joke
module.exports.findRandom = (req,res) => {
    //get array of jokes
    //get random index number 
    //pass the joke at that random index number
    //catch => throw an error
    Joke.find()
    .then(jokes => {
        let rand = Math.floor(Math.random()*jokes.length);
        res.json({jokes: jokes[rand]});
    })
    .catch(err => res.json({message: "You bombed your joke", error: err}))
}
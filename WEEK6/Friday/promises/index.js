const express = require("express");
const app = express();
const { getToken, getTweet, filterTweets } = require("./twitter");
app.use(express.static("./Tuesday"));

app.get("/data.json", (req, res) => {
  console.log("i need to build up some JSON and sent it back.....");
  // we need to do 4 things
  //1. we want to get the bearerToken from twitter
  getToken()
    .then((bearerToken) => {
      console.log("this is my .then bearerToken: ", bearerToken);
      return getTweet(bearerToken);
    })
    .then((tweets) => {
      console.log("this is my .then tweets: ", tweets);
      //3. we want to clean up (filter) the tweets
      const filteredTweets = filterTweets(tweets);
      //4. we want to send back the a response res.json(filteredTweets)
      res.json(filteredTweets);
    })
    .catch((err) => {
      console.log("err in catch: ", err);
    });
  /* getToken(function (err, bearerToken) {
    if (err) {
      console.log("err in getToken: ", err);
      return;
    }
    console.log("in index.js the token", bearerToken);
    //2. when we have said token, use it to make another req for tweets
    getTweet(bearerToken, function (err, tweets) {
      if (err) {
        console.log("err in getTweet: ", err);
        return;
      }
      //3. we want to clean up (filter) the tweets
      const filteredTweets = filterTweets(tweets);
      //4. we want to send back the a response res.json(filteredTweets)
      res.json(filteredTweets);
    }); 
  });*/
});
app.listen(8080, () => {
  console.log("my express server is running");
  //always check that the server is running......
});

//--------------------------------------------------------------------------
//somehow its not working!!!

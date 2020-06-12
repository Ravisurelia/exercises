const express = require("express");
const app = express();
const { getToken, getTweet, filterTweets } = require("./twitter");
app.use(express.static("./Tuesday"));

app.get("/data.json", (req, res) => {
  console.log("i need to build up some JSON and sent it back.....");
  // we need to do 4 things
  //1. we want to get the bearerToken from twitter
  //upgradation of part-1
  getToken()
    .then((bearerToken) => {
      /* console.log("this is my .then bearerToken: ", bearerToken);
      return getTweet(bearerToken, "Cristiano"); */
      return Promise.all([
        getTweet(bearerToken, "Cristiano"),
        getTweet(bearerToken, "LivEchoLFC"),
        getTweet(bearerToken, "ToniKroos"),
      ]);
    })
    .then((tweets) => {
      console.log("this is my .then tweets: ", tweets);
      let ronaldo = tweets[0];
      let liverpool = tweets[1];
      let kroos = tweets[2];

      let mergedTweets = [...ronaldo, ...liverpool, ...kroos];
      //let mergedTweets = liverpool.concat(ronaldo, kroos);

      let sortedTweets = mergedTweets.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

      //3. we want to clean up (filter) the tweets
      const filteredTweets = filterTweets(sortedTweets);
      //4. we want to send back the a response res.json(filteredTweets)
      res.json(filteredTweets);
    })
    .catch((err) => {
      console.log("err in catch: ", err);
    });
});
app.listen(8080, () => {
  console.log("my express server is running");
  //always check that the server is running......
});

//--------------------------------------------------------------------------
//for exercise 1
//part-1
/* getToken()
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
 */

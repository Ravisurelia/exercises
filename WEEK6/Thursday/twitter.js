const secrets = require("./secrets.json");
//const {consumerKey, consumerSecret} = require("./secrets.json");+++++++
const https = require("https");
const qs = require("querystring");
const twitterScreenName = "Cristiano";

module.exports.getToken = function (callback) {
  //this function  gets the bearerToekn from twitter
  //we will do it in the class

  const creds = `${secrets.consumerKey}:${secrets.consumerSecret}`;
  //const creds = `${consumerKey}:${consumerSecret}`; for line 2 +++++++++++++ const {consumerKey, consumerSecret} =

  const encoderCreds = Buffer.from(creds).toString("base64");

  const options = {
    host: "api.twitter.com",
    path: "/oauth2/token",
    method: "POST",
    headers: {
      Authorization: `Basic ${encoderCreds}`, //for line 12 const encoderCreds=
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  };

  function cb(response) {
    if (response.statusCode !== 200) {
      //this means something went wrong
      //console.log("this is a response status not 200", response.statusCode);
      callback(response.statusCode);
    }

    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });

    response.on("end", () => {
      //console.log("body: ", body);
      const parsedBody = JSON.parse(body);
      //console.log("parsedBody: ", parsedBody);
      callback(null, parsedBody.access_token);
    });
  }

  const req = https.request(options, cb);

  req.end("grant_type=client_credentials");
};

module.exports.getTweet = function (bearerToekn, callback) {
  //this functon will use token to get tweets from twitter
  const tokenCreds = Buffer.from(bearerToekn).toString("base64");
  const qString = qs.stringify({
    screen_name: twitterScreenName,
    tweet_mode: "extended",
  });
  const options = {
    host: "api.twitter.com",
    path:
      "/1.1/statuses/user_timeline.json?count=100&screen_name=Cristiano&tweet_mode=extended",
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearerToekn}`,
    },
  };

  function cb(response) {
    if (response.statusCode !== 200) {
      //this means something went wrong
      console.log(
        "this is a response status not 200 for getTweet: ",
        response.statusCode
      );
      callback(response.statusCode);
    }

    let body = "";
    response.on("data", (chunk) => {
      body += chunk;
    });

    response.on("end", () => {
      //console.log("body: ", body);
      const parsedBody = JSON.parse(body);
      //console.log("parsedBody: ", parsedBody);
      callback(null, parsedBody);
    });
  }

  const req = https.request(options, cb);

  req.end();
};

module.exports.filterTweets = function (tweets) {
  console.log("here is my tweets: ", tweets);
  let myArray = [];
  let obj = {};
  for (let i = 0; i < tweets.length; i++) {
    /* console.log(tweets[i].full_text);
    console.log(tweets[i].entities.urls);
    console.log(tweets[i].entities.media); */
    if (tweets[i].entities.urls.length === 1) {
      let text = tweets[i].full_text.replace(
        tweets[i].entities.urls[0].url,
        ""
      );
      let filteredText = text;
      if (tweets[i].entities.media) {
        for (let k = 0; k < tweets[i].entities.media.length; k++) {
          filteredText = filteredText.replace(
            tweets[i].entities.media[k].url,
            ""
          );
        }
        obj = {
          href: tweets[i].entities.urls[0].url,
          text: filteredText,
        };
        console.log("myobj: ", obj);
        //myArray.push(obj);
      } else {
        obj = {
          href: tweets[i].entities.urls[0].url,
          text: filteredText,
        };
      }
      myArray.push(obj);
    } else {
      //console.log(`tweet[${i}]`);
    }
  }
  console.log("myArray: ", myArray);
  return myArray;
};
//--------------------------------------------------------------------------
//somehow its not working!!!
//having problem in line 98---says length not defined

////////////////CLASS PRACTICE
/* module.exports.getToken = function (callback) {
  console.log("callback: ", callback);
  let token;
  setTimeout(function () {
    token = "guwsdukhasdukhioashfkihafilhkafhkafh";
    console.log("about to return the file");
    callback(token);
  }, 2000);
}; */

//-------------------index.js----------------------------------------//1
const express = require("express");
const app = express();
const headlines = require("./headlines");

app.get("/headlines", function (req, res) {
  //this function is called headlines.js which is a file
  headlines()
    .then(function (headlines) {
      res.json(headlines);
    })
    .catch(function () {
      res.sendStatus(500);
    });
});

app.listen(8080, () => console.log(`I'm listening`));

//-------------------headline.js----------------------------------------//2

const twApi = require("./twApi");

module.exports = function () {
  return twApi
    .getTweets(["nytimes", "washingtonpost", "theonion"])
    .then(function (data) {
      return data
        .filter(function (item) {
          return item.entities.urls && item.entities.urls.length == 1;
        })
        .map(function (item) {
          let text = item.full_text;
          if (item.entities.media) {
            for (let i = 0; i < item.entities.media.length; i++) {
              text = text.split(item.entities.media[i].url).join("");
            }
          }
          text = text.split(item.entities.urls[0].url).join("");
          return {
            text: text.trim(),
            href: item.entities.urls[0].url,
          };
        });
    });
};

//-------------------twApi.js----------------------------------------//3

const config = require("./config");
const request = require("./request");

module.exports.getTweets = function (screenName) {
  return getToken().then(function (token) {
    if (!Array.isArray(screenName)) {
      return getTweets(token, screenName);
    }
    return Promise.all(
      screenName.map((screenName) => getTweets(token, screenName))
    ).then((arrays) => {
      let merged = [];
      while (arrays.length) {
        merged.push.apply(merged, arrays.pop()); //this is a old school way to write
        //new way can be this
        //merged.push(...array.pop());
      }
      return merged.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    });
  });
};

function getToken() {
  var authorization = `${config.consumerKey}:${config.consumerSecret}`;
  return request({
    method: "POST",
    host: "api.twitter.com",
    path: "/oauth2/token",
    auth: "Basic " + Buffer(authorization).toString("base64"),
    contentType: "application/x-www-form-urlencoded;charset=UTF-8",
    body: "grant_type=client_credentials",
  }).then(function (data) {
    return JSON.parse(data).access_token;
  });
}

function getTweets(token, screenName) {
  return request({
    host: "api.twitter.com",
    path: `/1.1/statuses/user_timeline.json?tweet_mode=extended&screen_name=${
      screenName || "theonion"
    }`,
    auth: "Bearer " + token,
  }).then(function (data) {
    return JSON.parse(data);
  });
}

//-------------------request.js----------------------------------------//4
const http = require("http");
const https = require("https");

module.exports = (options) =>
  new Promise(function (resolve, reject) {
    const headers = {};
    if (options.auth) {
      headers.authorization = options.auth;
    }
    if (options.contentType) {
      headers["content-type"] = options.contentType;
    }
    const req = (options.protocol == "http" ? http : https).request(
      {
        method: options.method || "GET",
        host: options.host,
        path: options.path,
        headers: headers,
      },
      function (resp) {
        if (resp.statusCode != 200) {
          return reject(resp.statusCode);
        }
        let data = "";
        resp
          .on("data", function (chunk) {
            data += chunk;
          })
          .on("end", function () {
            resolve(data);
          });
      }
    );
    req.on("error", reject);
    options.body && req.write(options.body);
    req.end();
  });

import { tweets, usuarios } from "../index.js";

class Tweet {
   constructor(username, tweet) {
      this.username = username;
      this.tweet = tweet;
      this.avatar = usuarios.find((user) => user.username === username)?.avatar;
   }
   addTweetToDatabase() {
      tweets.push(this);
   }
}

export function postTweets(req, res) {
   const { tweet, username } = req.body;

   if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
   }

   const tt = new Tweet(username, tweet);

   tt.addTweetToDatabase();

   res.status(201).send(tweets);
}

export function getTweetsByUsername(req, res) {
   const { username } = req.params;

   const tweetsDoUsuario = tweets.filter((t) => t.username === username);
   console.log(usuarios);

   res.status(200).send(tweetsDoUsuario);
}

export function getTweets(req, res) {
   const { page } = req.query;

   if (page && page < 1) {
      res.status(400).send("Informe uma página válida!");
      return;
   }
   const limite = 10;
   const start = (page - 1) * limite;
   const end = page * limite;

   if (tweets.length <= 10) {
      return res.send(reverseTweets());
   }

   res.status(200).send([...tweets].reverse().slice(start, end));
}

function reverseTweets() {
   return [...tweets].reverse();
}

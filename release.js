require('dotenv').config()
var conventionalGithubReleaser = require("conventional-github-releaser");

var AUTH = {
  url: "https://api.github.com",
  token: process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN // change this to your own GitHub token or use an environment variable
};

conventionalGithubReleaser(
  AUTH,
  {
    preset: "angular"
  },
  function(err, responses) {
    console.log(err);
    console.log(responses);
  }
);

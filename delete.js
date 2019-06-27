require("dotenv").config();
var githubRemoveAllReleases = require("github-remove-all-releases");

var AUTH = {
  url: "https://api.github.com",
  type: "oauth",
  token: process.env.CONVENTIONAL_GITHUB_RELEASER_TOKEN // change this to your own GitHub token or use an environment variable
};

githubRemoveAllReleases(
  AUTH,
  "ilyaulyanov",
  "release-automatic-changelog",
  function(err, responses) {
    console.log(err);
    console.log(responses);
  }
);

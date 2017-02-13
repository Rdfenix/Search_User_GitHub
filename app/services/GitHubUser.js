var Axios = require('axios');

var GitHubUser = {
  getByUsername: function(username){
    return Axios.get('https://api.github.com/users/' + username);
  },
  getReposByUsername: function(username){
    return Axios.get('https://api.github.com/users/' + username + '/repos');
  }
};

module.exports = GitHubUser;

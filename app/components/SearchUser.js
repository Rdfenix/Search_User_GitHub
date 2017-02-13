var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      self.props.updateUser(response.data);
    });
    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      self.props.updateRepos(response.data);
    });

  },
  render: function(){
    return(
      <div className="jumbotron">
        <h1>Informando GitHub</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Usuario</label>
              <input type="text" className="form-control" placeholder="Ex: Rudnei" ref="username" />
            </div>
            <button className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
});

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

module.exports = SearchUser;

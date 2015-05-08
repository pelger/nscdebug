// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};


exports.realsrv = {
  local: {
    type: 'process',
    specific: {
    }
  },
  shared$: {
    type: 'docker',
    specific: {
      repositoryUrl: 'git@github.com:pelger/.git',
      buildScript: 'buildreal.sh',
      container: {
        args: '-p 9001:9001',
        exec: '/usr/bin/node /srv/real-srv'
      }
    }
  }
};


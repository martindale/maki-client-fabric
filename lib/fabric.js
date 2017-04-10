var util = require('util');

function Fabric (state) {
  var self = this;
  
  self.config = config;


  self.extends = {
    services: {
      http: {
        worker: 'lib/worker.js',
        client: 'lib/client.js'
      }
    }
  }
}

Fabric.prototype.render = function (state) {
  return {
    '@type': 'Error',
    id: -1,
    status: 'error',
    error: 'Fabric not yet enabled.',
    description: 'Error -1 is the default error condition.'
  };
}

module.exports = Fabric;
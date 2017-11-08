var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'stomdaterweb'
    },
    port: 80,
    db: 'srv73493_stomd',
      options:
      {
          host: 'mysql-srv73493.ht-systems.ru',
          port: 3306,
          pool:
          {
              maxIdleTime: 1000
          }
      },
      user: "srv73493_root",
      password: "562369671275sbob"
  },

  test: {
    root: rootPath,
    app: {
      name: 'stomdaterweb'
    },
    port: 80,
    db: 'srv73493_stomd',
      options:
      {
          host: 'mysql-srv73493.ht-systems.ru',
          port: 3306,
          pool:
          {
              maxIdleTime: 1000
          }
      },
      user: "srv73493_root",
      password: "562369671275sbob"
  },

  production: {
    root: rootPath,
    app: {
      name: 'stomdaterweb'
    },
    port: 80,
    db: 'srv73493_stomd',
      options:
      {
          host: 'mysql-srv73493.ht-systems.ru',
          port: 3306,
          pool:
          {
              maxIdleTime: 1000
          }
      },
      user: "srv73493_root",
      password: "562369671275sbob"
  }
};

module.exports = config[env];

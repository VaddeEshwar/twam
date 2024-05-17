module.exports = {
  apps : [{
    name: 'projectS-App',
    script: 'node_modules/@angular/cli/bin/ng.js',
    args: 'serve --host 103.210.75.43 --port 4000 --disable-host-check',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
  }
};
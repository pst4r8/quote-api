module.exports = {
  apps: [{
    name: 'quote',
    script: './index.js',
    max_memory_restart: '1000M',
    //instances: 1,
    //exec_mode: 'cluster',
    watch: true,
    ignore_watch: ['node_modules', 'assets'],
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}

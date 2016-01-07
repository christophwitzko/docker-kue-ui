const kue = require('kue')

kue.createQueue({
  prefix: process.env.KUE_PREFIX,
  redis: process.env.REDIS_URL || 'redis://redis:6379'
})

kue.app.listen(5000)

import logger from 'pino';

const log = logger();

if (process.env.NODE_ENV === 'production') {
  log.level = 'error'
}

function getLogger(fileName: string) {
  return log.child({fileName})
}

export default getLogger

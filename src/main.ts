import { argv, argvSync, exec, execSync, spawn, spawnSync } from '@cp'
import log, { c } from '@clog'

const main = async () => {
  // argv
  const { cli, cmd, args, arg } = await argv()
  log(c.magenta('argv:'), [cli, cmd, args, arg])

  // argvSync
  const cla = argvSync()
  log(c.magenta('argvSync:'), cla)

  // exec
  const execRes = await exec('git --version')
  log(c.magenta('exec:'), execRes)

  // execSync
  const exc = execSync('git --version')
  exc.on('error', (error) => {
    log(c.magenta('execSyncError:'), error)
  })
  exc.on('close', ({stdall, stdout, stderr }) => {
    log(c.magenta('execSync:'), [stdall, stdout, stderr])
  })

  // spawn
  const spawnRes = await spawn('git status')
  log(c.magenta('spawn:'), spawnRes)

  // spawnSync
  const spw = spawnSync('git status')
  spw.on('error', (error) => {
    log(c.magenta('spawnSyncError:'), error)
  })
  spw.on('close', ({stdall, stdout, stderr }) => {
    log(c.magenta('spawnSync:'), [stdall, stdout, stderr])
  })

  // spawnSync
  const spwInh = spawnSync('git status', { stdio: 'inherit' })
  spwInh.on('error', (error) => {
    log(c.magenta('spawnSyncError:'), error)
  })
  spwInh.on('close', ({stdall, stdout, stderr }) => {
    log(c.magenta('spawnSync:'), [stdall, stdout, stderr])
  })
}

export default main

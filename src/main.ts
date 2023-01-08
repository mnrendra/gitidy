import { exec } from '@cp'

const main = async () => {
  const cmd = await exec('node version')
  console.log(cmd)
}

export default main

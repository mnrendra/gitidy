import { version } from '@api/cli'

const checkVersion = async () => {
  await version({ verbose: true })
}

export default checkVersion

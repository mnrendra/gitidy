import { spawn } from '@cp'
import log, { c } from '@clog'

type Arg = {
  repoName: string,
  repoOwner: string,
  into?: string
}

const gitClone = async ({
  repoName,
  repoOwner,
  into
}: Arg) => {
  const url = `git@github.com:${repoOwner}/${repoName}`

  const { stdall } = await spawn(`git clone ${url} ${into || '.'}`)

  if (!stdall.includes('Cloning into')) {
    log(c.red(stdall))
    process.exit()
  }
}

export default gitClone

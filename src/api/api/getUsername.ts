import { auth } from '@api/cli'

const getUsername = async () => {
  const { username } = await auth.status({ verbose: true })
  return username
}

export default getUsername

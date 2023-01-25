import { root } from '@lib'

const packageJSON = () => {
  return require(`${root()}/package.json`)
}

export default packageJSON

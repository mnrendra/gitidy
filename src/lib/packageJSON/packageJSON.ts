import { getRoot } from '@lib'

const packageJSON = () => {
  return require(`${getRoot()}/package.json`)
}

export default packageJSON

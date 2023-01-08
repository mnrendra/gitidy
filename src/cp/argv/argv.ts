import { ArgvType } from './types'

const argv = () => new Promise<ArgvType>((resolve, reject) => {
  try {
    const args = process.argv.slice(2)

    const cli = args.join(' ')
    const cmd = args.shift()

    const data: ArgvType = {
      cli,
      cmd,
      args,
      arg: args.join(' ')
    }

    resolve(data)
  } catch (err) {
    reject(err)
  }
})

export default argv

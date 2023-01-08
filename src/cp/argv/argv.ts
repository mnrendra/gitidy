const argv = () => new Promise((resolve, reject) => {
  try {
    const args = process.argv.slice(2)
    const cli = args.join(' ')
    const cmd = args.shift()
    resolve({
      cli,
      cmd,
      args,
      arg: args.join(' ')
    })
  } catch (err) {
    reject(err)
  }
})

export default argv

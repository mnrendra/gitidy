const argvSync = () => {
  const args = process.argv.slice(2)
  const cli = args.join(' ')
  const cmd = args.shift()
  return {
    cli,
    cmd,
    args,
    arg: args.join(' ')
  }
}

export default argvSync

const root = () => {
  const base = __dirname.includes('/dist') ? '/dist' : '/src'
  return __dirname.split(base)[0]
}

export default root

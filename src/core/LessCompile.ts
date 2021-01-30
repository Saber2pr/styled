import less from 'less';

const Cache = new Map<string, string>()

export const LessCompile = (input: string) => {
  if(Cache.has(input)){
    return Cache.get(input)
  }
  let result = null
  less.render(input, {
    compress: true,
  }, (_, output) => {
    result = output.css
  })
  Cache.set(input, result)
  return result
}

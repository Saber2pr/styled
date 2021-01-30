import less from 'less'
import React from 'react'

type InlineCSSText = (...args: any) => string
type InlineCSSRenderer = (...args: any) => JSX.IntrinsicElements['style']

const getInputString = (strs: string[], values: string[]) => {
  values = values.concat('')
  let i = 0
  let result = ''
  for (; i < strs.length; i++) {
    result += strs[i] + values[i]
  }
  return result
}

export const styled = {
  _: ((strs: string[], ...values: string[]) => {
    return getInputString(strs, values)
  }) as InlineCSSText,
  css: ((strs: string[], ...values: string[]) => {
    const inputcss = getInputString(strs, values)
    let __html = inputcss
    return <style dangerouslySetInnerHTML={{ __html }} />
  }) as InlineCSSRenderer,
  less: ((strs: string[], ...values: string[]) => {
    const inputcss = getInputString(strs, values)
    let __html = inputcss
    less.render(inputcss, (_, output) => {
      __html = output.css
    })
    return <style dangerouslySetInnerHTML={{ __html }} />
  }) as InlineCSSRenderer,
}

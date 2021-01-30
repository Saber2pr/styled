import { getInputString } from "./getInputString"
import { InlineCSSRenderer } from "./type"
import React from 'react'

export const CSSRenderer: InlineCSSRenderer = ((strs: string[], ...values: string[]) => {
  const inputcss = getInputString(strs, values)
  let __html = inputcss
  return <style dangerouslySetInnerHTML={{ __html }} />
})
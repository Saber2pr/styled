import { getInputString } from "./getInputString"
import { LessCompile } from "./LessCompile"
import { InlineCSSRenderer } from "./type"
import React from 'react'

export const LessRenderer: InlineCSSRenderer = (strs: string[], ...values: string[]) => {
  const inputcss = getInputString(strs, values)
  let __html = LessCompile(inputcss)
  return <style dangerouslySetInnerHTML={{ __html }} />
}
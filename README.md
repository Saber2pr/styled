# @saber2pr/styled

> 内联css支持

vscode安装插件 vscode-styled-components

```bash
yarn add @saber2pr/styled
```

### start

```tsx
import styled from '@saber2pr/styled'

// css或less字符串片段
const utilcssText = styled._`
  .cursor-pointer {
    cursor: pointer;
  }

  .flex {
    display: flex;
  }
`

// css样式元素
const utilcssStyle = styled.css`
  .cursor-pointer {
    cursor: pointer;
  }

  .flex {
    display: flex;
  }
`

// less样式元素
const utillessStyle = styled.less`
  .flex {
    display: flex;
    .cursor-pointer {
      cursor: pointer;
    }
  }
`

// 插入css片段
const inlineStyle = styled.less`
  ${utilcssText}
`

// 内联样式
const Component = () => {
  return <div>
    {inlineStyle}
    {utillessStyle}
  </div>
}

```
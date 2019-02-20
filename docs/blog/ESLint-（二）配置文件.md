---
title: ESLint （二）配置文件
layout: post
category: 前端技术
tags:
  - web前端
  - javascript
  - 编码规范
date: 2017-11-30 22:28:10
update: 2017-11-30 22:28:10
comments: true
copyright: true
---

![](https://upload-images.jianshu.io/upload_images/7295449-fc178e0811917b85.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 一、配置方式
- 注释形式：使用 JavaScript 注释将配置信息直接嵌入到文件中
- 文件形式
  - `.eslintrc.js`
  - `.eslintrc.yaml` 或者 `.eslintrc.yml`
  - `.eslintrc.json` 
  - `package.json` 文件中创建 `eslintConfig` 属性

<!-- more -->

`.eslintrc.js` 文件
```javascript
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'semi': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
```

`.eslintrc.json` 文件
```
{
  "parserOptions": {
    ...
  },
  "env": {
    ...
  },
  "globals": {
    ...
  }
  "rules": {
    ...
  }
}
```

`.eslintrc.yml` 文件
```yaml
---
  parserOptions：
    ...
  env:
    ...
  globals:
    ...
  rules:
    ...
```

`package.json` 文件
```
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "plugins": ["example"],
        "env": {
            "example/custom": true
        }
    }
}
```

>**注意**：配置文件如果在主目录下，那么会先使用与文件就近的配置文件，找不到其他的配置文件，最后才使用主目录下的配置文件。

主要配置信息有：
- 环境（Environments）：脚本设计运行的环境。每个环境都带有一组预定义的全局变量。
- 全局变量（Globals） ：脚本在执行期间访问的其他全局变量。
- 规则（Rules）：启用了哪些规则以及错误级别。

## 二、解析器

```javascript
module.exports = {
  parser: 'babel-eslint', //解析器
  parserOptions: {
    sourceType: 'module'
  } //解析器选项
}
```
默认解析器：Espree

## 三、环境
环境有浏览器 bower，Node 环境 node 等等
```javascript
module.exports = {
  env: {
    browser: true
  }
}
```
>在[官网](https://eslint.org/docs/user-guide/configuring#specifying-environments)上查找所有环境


## 四、全局变量
在 JavaScript 文件中使用注释来指定全局变量，请使用以下格式：
```javascript
/* global var1, var2 */
```

这定义了两个全局变量，`var1` 和 `var2`。如果你想有选择地指定这些全局变量不应该被写入（只读），那么你可以设置每个 `false` 标志：
```javascript
/* global var1:false, var2:false */
```

在配置文件中配置全局变量，请使用 `globals` 键并指示要使用的全局变量。将每个全局变量名称设置为等于 `true` （允许覆盖变量）或 `false` （禁止覆盖）。例如：
```javascript
module.exports = {
  globals: {
    "var1": true,
    "var2": false
  }
}
```

注意：启用 `no-global-assign` 规则禁止修改代码中的只读全局变量。

## 五、插件
ESLint 支持使用第三方插件。在使用插件之前，您必须使用 npm 来安装它。

要在配置文件中配置插件，使用 `plugins` 包含插件名称，两种写法
```javascript
module.exports = {
  plugins: [
    "plugin1",
    "eslint-plugin-plugin2"
  ]
}
```

>**注意**：由于 Node 的 require 功能，全局安装的 ESLint 实例只能使用全局安装的 ESLint 插件，本地安装的版本只能使用本地安装的插件。不支持混合本地和全局插件。

## 六、规则
要更改规则设置，您必须将规则 ID 设置为以下值之一：
- `off` 或者 `0`: 关闭该规则
- `warn` 或者 `1`: 将规则打开为警告（不影响退出代码）
- `error` 或者 `2`: 将规则打开为错误（触发时退出代码为 `1`）

```javascript
module.exports = {
  rules: {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"]
  }
}
```

## 参考

- [ESLint （一）简介与安装](https://destinytaoer.cn/posts/4e5d3138/)
- [配置ESLint](https://eslint.org/docs/user-guide/configuring)

<common-Quote>生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。</common-Quote>

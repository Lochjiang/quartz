---
tags:
  - 笔记
---

## 资料

- 官网：[Obsidian - Sharpen your thinking](https://obsidian.md/)，第三方：[PKMer](https://pkmer.cn/)、[Obsidian文档咖啡豆版 | obsidian文档咖啡豆版 (coffeetea.top)](https://coffeetea.top/zh/)

## 快捷键
| 按键             | 功能      |
| -------------- | ------- |
| `ctrl`+`p`     | 调用命令行面板 |
| `ctrl`+`l`     | 文本行新建任务 |
| `ctrl` + 拖拽文件夹 | 复制文件夹链接 |

## LaTeX

- [公式识别 (simpletex.cn)](https://simpletex.cn/ai/latex_ocr)

| 示例                                                       | 代码                                                   | 注释        |
| -------------------------------------------------------- | ---------------------------------------------------- | --------- |
| $\xlongequal[down]{up}$                                  | `\xlongequal[down]{up}`                              | 长等号       |
| $\xi$ $\varepsilon$ $\eta$                               | `\xi` `\varepsilon` `\eta`                           | 希腊字母ξεη   |
| $\varphi \varPhi \phi \Phi$                              | `\varphi \varPhi \phi \Phi`                          | 希腊字母φ     |
| $\ddot x$                                                | `\ddot x`                                            | 双点        |
| $\tilde{x}$                                              | `\tilde{x}`                                          | 波浪线       |
| $\overparen{AB}$                                         | `\overparen{AB}`                                     | 弧         |
| $x+1=4 \tag{2.1}$                                        | `x+1=4 \tag{2.1}`                                    | 序号        |
| $\iint\limits_D$ $\overset{D}\iint$  $\underset{D}\iint$ | `\iint\limits_D \overset{D}\iint  \underset{D}\iint` | 积分上下标     |
| $\mathring U(x_0,\delta)$                                | `\mathring U(x_0,\delta)`                            | 去心领域      |
| $\forall$ $\exists$                                      | `\forall` `\exists`                                  | 任意、存在     |
| $\prod$ $\sum$                                           | `\prod` `\sum`                                       | 连乘、连加     |
| $\subset$                                                | `\subset`                                            | 子集        |
| $\underset{<}{\overset{>}{=}}$                           | `\underset{<}{\overset{>}{=}}`                       | 大于小于等于    |
| $\cup,\cap$                                              | `\cup,\cap`                                          | 并集交集      |
| $\lceil x \rceil$ $\lfloor x \rfloor$                    | `\lceil x \rceil` `\lfloor x \rfloor`                | 向上取整向下取整  |
| $\overline{ABC}$                                         | `\overline{ABC}`                                     | 横线        |
| $\neq,\equiv,\approx$                                    | `\neq,\equiv,\approx`                                | 不等、恒等、约等  |
| $\color{orange}{123}$                                    | `\color{orange}{123}`                                | 变色        |
| $A\prec B,A\succ B,A\preceq B$                           | `A\prec B,A\succ B,A\preceq B`                       | 偏好        |
| $P(B\mid A),\overline {AB}$                              | `P(B\mid A),\overline {AB}`                          | 条件概率 & 闭包 |
| $\partial$                                               | `\partial`                                           | 偏导        |
| $\underbrace{a_1+a_2+\cdots+a_n}_{n个a}$                  | `\underbrace{a_1+a_2+\cdots+a_n}_{n个a}`              | 大括号       |
| $\pm,\mp,\times,\div$                                    | `\pm,\mp,\times,\div`                                | 加减乘除      |
| $\mathcal{ABC}$                                          | `$\mathcal{ABC}$`                                    | 字体        |
| $\mathbf{ABC}$                                           | `$\mathbf{ABC}$`                                     | 字体        |
| $\mathbb R$                                              | `$\mathbb R$`                                        | 字体        |

## HTML
### 双链

```html
<a href="草稿.md" class="internal-link">草稿</a>
``` 

展示：

<a href="草稿.md" class="internal-link">草稿</a>

批量处理的python代码：
```python
import re 
with open('text.txt','r',encoding='utf-8') as f:    
	text=f.read()   
new_text = re.sub('>([^\*<>\(\)\s]+)<',r'><a href="\1.md" class="internal-link">\1</a><',text)
with open('new_text.txt','w',encoding='utf-8') as f:
	f.write(new_text)   
```
### html-LaTeX

```html
<div class="math display">\int_0^xf(x)\mathrm dx</div>
``` 
展示：
<div class="math display">\int_0^xf(x)\mathrm dx</div>

### 表格
- [Excel to HTML table tag conversion with cell-joining support (ao-system.net)](https://ao-system.net/en/exceltable/)

```html
<table border="2" align="center">
<caption>北京大学经济与管理学院</caption>
	<tr>
		<th rowspan="3">专业代码</th>
		<th rowspan="3">专业名称</th>
		<th rowspan="3">学习方式</th>
		<th rowspan="3">专业方向代码</th>
		<th rowspan="3">专业方向名称</th>
	</tr>
	<tr>
	</tr>
	<tr>
	</tr>
	<tr>
		<td rowspan="5">020200</td>
		<td rowspan="5">应用经济学</td>
		<td rowspan="5">全日制</td>
		<td>01</td>
		<td>产业经济与产业政策</td>
	</tr>
	<tr>
		<td>02</td>
		<td>国际贸易与跨国经营</td>
	</tr>
	<tr>
		<td>03</td>
		<td>能源经济与金融</td>
	</tr>
	<tr>
		<td>04</td>
		<td>国防经济与安全预警</td>
	</tr>
	<tr>
		<td>05</td>
		<td>数量经济理论与应用</td>
	</tr>
</table>
```

<table border="2" align="center">
<caption>北京大学经济与管理学院</caption>
	<tr>
		<th rowspan="3">专业代码</th>
		<th rowspan="3">专业名称</th>
		<th rowspan="3">学习方式</th>
		<th rowspan="3">专业方向代码</th>
		<th rowspan="3">专业方向名称</th>
	</tr>
	<tr>
	</tr>
	<tr>
	</tr>
	<tr>
		<td rowspan="5">020200</td>
		<td rowspan="5">应用经济学</td>
		<td rowspan="5">全日制</td>
		<td>01</td>
		<td>产业经济与产业政策</td>
	</tr>
	<tr>
		<td>02</td>
		<td>国际贸易与跨国经营</td>
	</tr>
	<tr>
		<td>03</td>
		<td>能源经济与金融</td>
	</tr>
	<tr>
		<td>04</td>
		<td>国防经济与安全预警</td>
	</tr>
	<tr>
		<td>05</td>
		<td>数量经济理论与应用</td>
	</tr>
</table>

### pre-code

```html
<pre><code>

</pre></code>
```

### 右对齐

```html
<p align="right">右对齐</p>
```

### 居中对齐

```html
<p align="center">居中对齐</p>
```

### 指定字体

```html
<p style="font-family: Kaiti">文本内容</p>
```

| 字体中文名 | 字体英文名              |
| ----- | ------------------ |
| 宋体    | SimSun（浏览器默认）      |
| 黑体    | SimHei             |
| 微软雅黑  | Microsoft Yahei    |
| 微软正黑体 | Microsoft JhengHei |
| 楷体    | KaiTi              |
| 新宋体   | NSimSun            |
| 仿宋    | FangSong           |

### 改变字体颜色

```html
<span style="color:chocolate">红色文字</span>
```

## 插件

### Dataview
- [Dataview综合文档 | obsidian文档咖啡豆版 (coffeetea.top)](https://coffeetea.top/zh/dataview/)

#### 通用

````
```dataview
table without id
file.link as "临时文件" 
from "临时文件"
```
````

#### 改File为中文“文件名”

<pre><code>```dataview
table without id
file.link as "文件名" 
where todo = true
limit 2
```</pre></code>

或者进入设置页面设置默认名。

#### where的contains相关函数：

| 函数 | 释义 |
| ---- | ---- |
| `contains` | 包含 |
| `!contains` | 不包含 |
| `econtains` | 判断包含值（不区分大小写） |
| `containsword` | 单词完全匹配（不区分大小写） |
| `(summary: :text)` | 页面内撰写属性值 |

#### 按照创建时间倒序排序

<pre><code>```dataview
list from #Python 
sort file.ctime desc
```</pre></code>

#### 任务

<pre><code>```dataview
TASK
FROM "ANKI"
WHERE !completed
```</pre></code>

#### 布尔值映射

<pre><code>```dataview
TABLE choice(completed, "✅", "❌") AS 状态
FROM "文件夹"
```</pre></code>

### Tasks

- [Tasks插件专题 | obsidian文档咖啡豆版 (coffeetea.top)](https://coffeetea.top/zh/tasks/)

#### 提取已经做完的任务，并且按照做完时间的倒序排序：

<pre><code>```tasks
done
sort by done reverse
```</code></pre>

#### 提取没做完的任务，并且过滤含有“计划”字符的标签和文件名：

<pre><code>```tasks
not done
tags does not include #计划
```</code></pre>
#### 正则表达式方法：

<pre><code>```tasks
not done
filename regex matches /[\d]{4}-\d\d-\d\d/
```</code></pre>

- ! 两边要加 "/" 。

#### 文件夹方法
<pre><code>```tasks
not done 
folder includes 日记
```</code></pre>
#### In Progress
<pre><code>```tasks
status.type is in_progress
```</pre></code>
除此之外还有 status.name 属性。

#### 隐藏图标

```
hide due date       # 隐藏截止日期
hide scheduled date # 隐藏排程日期
hide start date     # 隐藏开始日期
hide recurrence rule # 隐藏循环图标
hide id
hide depends on
```

#### 项目

<pre><code>```tasks
not done
filename includes 草稿

((starts before tomorrow) AND (due after yesterday)) OR (scheduled today) OR ((no due date) AND (no scheduled date) AND (no start date))

hide scheduled date # 隐藏排程日期
hide start date 
```</pre></code>

### Tag Summary
#### 集合含标签的句块：

<pre><code>```add-summary 
tags: #chapter1 #chapter2 
include: #chapter3 #chapter4 
exclude: #crazy 
```</pre></code>
### tikz

#### 绘制函数
```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```

<pre><code>```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```</pre></code>

### Tabs

<pre><code>````tabs
tab: tab1
(tab1 内容)
tab: tab2
(tab2 内容)
````</pre></code>

## Snippet
### 收藏

```css
/* SPACING TWEAKS AS OF OBSIDIAN v1.3.7 */

/* --p-spacing: 1rem; */
/* --heading-spacing: calc(var(--p-spacing) * 2.5); */


/* Change indentation of ul/ol; Remove spacing before an ul/ol */
ul, ol {
	padding-inline-start: 3.2% !important; /* var(--list-indent); */
	margin-block-start: 0px !important; /* var(--p-spacing); */
	/* margin-top: 0 !important; */
	/* padding-left: 3.2% !important; */
}
p {
	margin-bottom: 0px !important; /* For "remove spacing before an ul/ol" to work, this must be set */
}


/* Remove spacing above and below tables. This is done to remove the extra space between tables and headings */
table {
	margin-block-start: 0px !important;
	margin-block-end: 0px !important; /* var(--p-spacing); */
}
/* Only add spacing above tables when it follows a paragraph */
div:has( > :is(p,pre,table,ul,ol)) + div > :is(table) {
	margin-block-start: 1rem !important;
}


/* Change spacing above and below a heading */
h1, h2, h3, h4, h5, h6 {
  margin-block-start: 0.9rem !important; /* var(--p-spacing); */
  margin-block-end: 0.9rem !important; /* var(--p-spacing); */
}
/* Change spacing above a heading when it follows a paragraph */
div:has( > :is(p,pre,table,ul,ol)) + div > :is(h1,h2,h3,h4,h5,h6) {
	margin-top: 1.2rem !important; /* var(--heading-spacing); */
}
```

### 首行缩进2字符

```css
/* 首行缩进2字符 */
.markdown-preview-view p {
  text-indent: 2em;
}
```

### mermaid 100% 缩放
```css
.mermaid svg { 
  max-width: 100%; 
  height: auto;
}
```

### 标题样式

```CSS
/* 添加左侧圆角矩形标识到 H4 和 H5 标题 */
.markdown-preview-view h4,
.markdown-preview-view h5,
.markdown-preview-view h6{
    position: relative;
    padding-left: 5px; /* 调整左侧间距 */
}

.markdown-preview-view h4::before{
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px; /* 调整矩形宽度 */
    height: 20px; /* 调整矩形高度 */
    background-color: salmon; /* 调整矩形颜色 */
    border-radius: 5px; /* 调整矩形圆角半径 */
}

.markdown-preview-view h5::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px; /* 调整矩形宽度 */
    height: 15px; /* 调整矩形高度 */
    background-color: gold; /* 调整矩形颜色 */
    border-radius: 5px; /* 调整矩形圆角半径 */
}

.markdown-preview-view h6::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px; /* 调整矩形宽度 */
    height: 10px; /* 调整矩形高度 */
    background-color: skyblue; /* 调整矩形颜色 */
    border-radius: 5px; /* 调整矩形圆角半径 */
}

/* 限制样式作用范围为编辑和预览区域的 h2 标题 */
.markdown-preview-view h2{
    border-bottom: 1px solid rgba(128, 128, 128, 0.5);
    padding-bottom: 3px;
}

.markdown-preview-view h1{
    text-align: center;
    /* padding-bottom: 3px; */

}
```

### checkbox状态

- [Alternate Checkboxes - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Alternate+Checkboxes)

### 高级引用隐藏标题

```css
.internal-embed {
  /*禁用嵌入笔记标题*/
  & .markdown-embed-title,
  /*禁用嵌入小标题*/
  .print & :first-child:is(h1, h2, h3, h4, h5, h6),
  & .mod-header+ div > :is(h1, h2, h3, h4, h5, h6) {
    display: none;
  }
}
```

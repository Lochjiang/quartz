---
tags:
  - 资料
---
### 建站攻略

- $ [Welcome to Quartz 4](https://quartz.jzhao.xyz/)

### 设置 ip

这是为了防止连接失效，但还不清楚是否真的有用。

```
set http_proxy=http://127.0.0.1:7890
```

这个好像有用：

```
git config --global http.proxy socks5 127.0.0.1:7890
git config --global https.proxy socks5 127.0.0.1:7890
 
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
```

### 下载模板

```
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

v5:

gemini:

```shell
git fetch upstream
git checkout v5
npm install
```

官网:

```shell
git clone https://github.com/jackyzha0/quartz.git
cd quartz
git checkout v5
npm ci
```

```shell
npx quartz create
```

### 本地渲染查看效果

```
npx quartz build --serve
```

### 自用布局设置

- 修改左上角名字
- 修改后缀 "--Loch's Feynman Space"
- 英文改中文
- 转移关系图谱
- 转移反向链接
- 去掉metadata
- 去掉阅读模式
- 注释掉尾部
- 修改小图标

### 设置

```
git remote set-url origin https://github.com/Lochjiang/lochjiang.github.io.git
 
git remote add upstream https://github.com/jackyzha0/quartz.git
```

### 第一次上传

```
npx quartz sync --no-pull
```

### 新增必要文件

```
quartz/.github/workflows/deploy.yml
```

- [新建文件](https://quartz.zituoguan.com/hosting)

### 每次更新

```
npx quartz sync
```

### 注意事项 

> [!warning] 注意
> 1. 用 `git config --global --list` 命令行查看 `user.name` 和 `user.email` 是否正确 
> 2. 仓库目录下使用 `git remote -v` 查看 `origin` 和 `upstream` 是否正确，`origin` 对应自己的网站。

### bat

#### 本地渲染

```
cd quartz
call npx quartz build --serve
pause
```

#### 更新上传

```
robocopy "C:\BaiduSyncdisk\OB_online" "quartz\content" /MIR
cd quartz
call npx quartz sync
pause
```
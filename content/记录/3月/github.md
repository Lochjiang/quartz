---
tags:
  - 记录
---
## 配置镜像

```
git config --global url."https://hub.fastgit.org/".insteadOf "https://github.com/"
```

## 查看镜像

```
git config --global --list
```

## 移除镜像

```
git config --global --unset-all url.https://gitclone.com/github.com/.insteadof
```
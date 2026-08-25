---
tags:
  - 笔记
---
曾经发生过这样一个问题：直接使用 `quartz\content` 文件夹作为 OB 的 Vault ，更新上传时因为网络问题发生了文件夹全部丢失情况。所以一定要做好备份工作。

### 建议使用bat指令，备份好文件夹再进行上传

```shell
robocopy "C:\BaiduSyncdisk\OB_online" "quartz\content" /MIR /XD ".obsidian"
cd quartz
call npx quartz sync
pause
```

在quartz文件夹下，创建一个.bat尾缀的运行文件，写入上述代码。打开 OB 主页，ctrl + 鼠标左键，拖动bat运行文件到 OB 的笔记页面中去，就会自动生成一个可运行的外链，点击就能直接上传。

注意修改「复制文件夹」和「目标文件夹」：

`robocopy "C:\BaiduSyncdisk\OB_online" "quartz\content" /MIR /XD ".obsidian"`

这个指令的含义是，将 `C:\BaiduSyncdisk\OB_online` 的「复制文件夹」内容复制粘贴到 `quartz\content` 「目标文件夹」中去，`/MIR` 为镜像复制，`/XD ".obsidian"` 即跳过 `.obsidian` 文件夹的复制。

> [!warning] 注意
> 镜像复制是完全复刻「复制文件夹」的内容到「目标文件夹」中去。这意味着：「目标文件夹」中相对「复制文件夹」多余的文件会被删除。

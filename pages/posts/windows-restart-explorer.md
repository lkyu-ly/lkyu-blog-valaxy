---
title: windows系统自动重启explorer.exe脚本
author: lkyu
hide: false
tags:
  - 教程
categories:
  - lkyu 的小教程
description: 开机重启桌面的批处理
date: 2021-07-18 00:00:00
updated: 2021-07-18 00:00:00
---

## 食用情景

1. windows 系统（主要是开机后）需要自动重启/刷新一次桌面的

   - 例如由于某种原因托盘图标无法完全加载，重新启动 explorer.exe 可能会解决问题。

2. 资源管理器卡死，无法操作的

   - 既然无法操作，可以用 ssh 连接到 cmd 然后执行脚本。

![Windows资源管理器已停止工作](https://pic.imgdb.cn/item/60fccc425132923bf86ca01b.png)_心肺骤停.jpg_

## 食用方法

### 步骤

1. 在**易于访问**的目录下新建文件 `explorer.bat`

   > 当然可以使用任意符合命名条件的名字，此处仅以 `explorer.bat` 为例。

2. 编辑 `explorer.bat` ，写入如下内容：

   ```sh
   @echo off
   ping 127.0.0.1 -n 8 >nul
   taskkill /f /im explorer.exe>nul
   ping 127.0.0.1 -n 3 >nul
   start explorer.exe
   exit
   ```

3. 保存运行即可。

### 一些注释

- `@echo off`：关闭显示，即不显示执行的命令

- `ping 127.0.0.1 -n 8 >nul`：“计时器”，大约一秒 ping 一次，`-n`是次数，即计时的大约秒数，`>nul`也是为了不显示输出

- `taskkill /f /im explorer.exe>nul`：强制杀死映像名为 explorer.exe 的进程，无输出

- `start explorer.exe`：重启 explorer.exe

- `exit`：退出

## 进阶设置

### 开机启动

将 `explorer.bat` 或其快捷方式放入 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` 或 `C:\Users\your-name\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` 文件夹下，系统启动后就会自动以默认方式执行此文件。

### 参数调节

`ping 127.0.0.7 -n`后面的数字表示执行上一条命令后等待的时间（约数），单位为秒。可以根据电脑配置自行调整。

> 若电脑配置较低，开机卡顿，则可以适当延长等待时间，防止产生上一条命令还未响应，下一条就已经执行的错误。

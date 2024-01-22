---
sidebar_position: 2
title: Phytium X100上编译安装fdeion
---

fdeion是Phytium X100 GPU专用的显存分配内核模块。如果你的系统使用的显卡不是Phytium X100 GPU，则可以直接忽略本教程。

一般情况下，fdeion模块可以通过在终端命令行界面中直接执行`apt install`命令就可以安装，该命令会自动从适当的软件源下载并安装所需的软件包。

当然，如果你想手动编译和安装fdeion，可以按照下面的步骤进行。

- 获取fdeion源码

```
cd ~ && git clone https://gitee.com/openfde/fdeion.git
```

- 安装dh-make

```
sudo apt-get install dh-make
```

- 安装dkms源

```
sudo apt-get install dkms
```

- 拷贝fdeion到指定目录

```
sudo cp -a fdeion /usr/src/fdeion-1.0
```

- 将fdeion 1.0版本添加到dkms源管理模块中

```
sudo dkms add -m fdeion -v 1.0
```

- 构建fdeion 1.0

```
sudo dkms build -m fdeion -v 1.0
```

- 将fdeion 1.0打包成deb包
  
```
sudo dkms mkdeb -m fdeion -v 1.0
```

其中“-v 1.0”表示所编译的fdeion的版本，如果你编译fdeion用于个人项目，版本号可以由你自己决定。

- 安装fdeion的deb包

```
sudo dpkg -i fdeion-dkms.deb
```


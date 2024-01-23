---
sidebar_position: 4
title: 树莓派安装OpenFDE
---

# 树莓派安装OpenFDE{#install-openfde-on-rasberry-pi}

## 一、Ubuntu22.04上安装OpenFDE{#install-on-ubuntu}

### 1. 系统要求{#requirements}

树莓派4B及其以上

### 2. 烧写Ubuntu22.04操作系统{#download-imager}

首先下载树莓派镜像烧入工具Raspberry Pi Imager,友情提供下载链接https://www.raspberrypi.com/software/

### 3. 配置Ubuntu{#config}

烧写完成后，在树莓派上启动系统，进入Ubuntu，根据设置向导完成配置。

### 4. 安装运行依赖{#install-dependencies}

- 更新软件源

```
sudo apt update
```

- 安装额外的linux内核模块
  
```
sudo apt install linux-modules-extra-`uname -r`
```

- 载入指定的linux模块

```
sudo modprobe binder_linux devices="binder,hwbinder,vndbinder"
```

- 安装相关依赖

```
sudo apt install mutter i3 phtyon3-pip lxc libibus-1.0-5 tigervnc-standalone-server
```

- 将Python3软链接到Python
  
```
sudo ln -sf /usr/bin/python3 /usr/bin/python
```
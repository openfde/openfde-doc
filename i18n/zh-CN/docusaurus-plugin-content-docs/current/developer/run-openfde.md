---
sidebar_position: 4
title: 运行OpenFDE
---

# 运行OpenFDE

## 1. 裁剪和安装Android镜像

## 2. 启动OpenFDE

接[AOSP源码编译中最后一步拷贝镜像到运行目标](./../quick-start#copy-img)，此时你的linux环境上已经有了system.ext.img和vendor.ext.img两个镜像文件。

- 创建images目录

```
sudo mkdir -p /usr/share/waydroid-extra/images
```

- 拷贝两个镜像文件到images目录下

```
sudo cp -a system.ext.img /usr/share/waydroid-extra/images/system.img  
```

```
sudo cp -a vendor.ext.img /usr/share/waydroid-extra/images/vendor.img
```

- 初始化waydroid

```
sudo waydroid init -f 
```

## 5. 启动OpenFDE

至此，OpenFDE已经编译完成啦，此时注销你当前系统的用户，进入到登录界面。右下角选择"FDE"，再输入密码即可登录进入OpenFDE。

<!-- 
### 7. 编译安装fdeion{#build-fdeion}

fdeion是Phytium X100 GPU专用的显存分配内核模块。如果不使用Phytium X100 GPU则可以直接跳过本小节。通常，该模块可以直接通过`apt install`命令安装。

```
git clone https://gitee.com/openfde/fdeion.git
sudo apt-get install dh-make
sudo apt-get install dkms
sudo cp -a fdeion /usr/src/fdeion-1.0
sudo dkms add -m fdeion -v 1.0
sudo dkms build -m fdeion -v 1.0
sudo dkms mkdeb -m fdeion -v 1.0
```

其中“-v 1.0”表示所编译的fdeion的版本，如果你编译fdeion用于个人项目，版本号可以由你自己决定。
-->

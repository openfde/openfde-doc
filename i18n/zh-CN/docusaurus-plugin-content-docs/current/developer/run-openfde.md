---
sidebar_position: 4
title: 运行OpenFDE
---

# 运行OpenFDE

## 1. 裁剪和安装Android镜像{#cropping-install-android-image}

## 1.1 裁剪Android镜像{#cropping-android-image}

- 安装openssh-server

```
sudo apt install openssh-server && sudo systemctl start ssh && sudo systemctl enable ssh
```

通过[AOSP源码编译最后一步拷贝镜像到运行目标](./quick-start#copy-img)，拷贝system.img和vendor.img镜像文件到linux环境的/home路径下。

- 进入home目录，获取make-deb源码

```
cd ~ && git clone https://gitee.com/openfde/make_deb.git 
```

- 将镜像文件拷贝到make_deb目录中
  
```
sudo cp system.img vendor.img make_deb/
```

- 打包和裁剪镜像

```
./packapk.sh
```

packapk.sh脚本会进行apk打包，并进行镜像的裁剪，打包过程中同时会将讯飞输入法和via浏览器打包进去。

## 1.2 安装Android镜像{#install-android-image}

- 创建images目录

```
sudo mkdir -p /usr/share/waydroid-extra/images
```

- 拷贝两个镜像文件到images目录下进行安装

```
sudo cp -a systemimg /usr/share/waydroid-extra/images/system.img
```

```
sudo cp -a vendorimg /usr/share/waydroid-extra/images/vendor.img
```

- 初始化waydroid

```
sudo waydroid init -f 
```

## 2. 启动OpenFDE{#run-openfde}

至此，就可以开始启动OpenFDE啦。此时注销你当前系统的用户，进入到登录界面。右下角选择"FDE"，再输入密码即可登录进入OpenFDE。

---
sidebar_position: 1
title: Kylin2303上编译Linux程序
---

# Kylin2303上编译Linux程序

## 1. 安装gbinder-python模块{#install-gbinder-python}

### 1.1 安装依赖libglibutil{#install-libglibutil}

- 更新软件源
  
```
sudo apt update
```

- 安装git、make、gcc、python3

```
sudo apt install git make gcc python3 -y
```

- 获取源码

```
git clone https://gitee.com/openfde/libglibutil.git
```

- 安装libglib2.0-dev

```
sudo apt install libglib2.0-dev -y
```

- 进入libglibutil目录编译

```
cd libglibutil && make  
```

- 安装libgulibutil

```
sudo make install && sudo make install-dev
```

- 编译完成后回到上级目录

```
cd -
```

### 1.2 安装依赖libgbinder{#install-libgbinder}

- 获取源码

```
git clone https://gitee.com/openfde/libgbinder.git
```

- 进入libgbinder目录并编译libgbinder
 
```
cd libgbinder && make
```

- 安装libgbinder

```
sudo make install && sudo make install-dev
```

- 编译完成后回到上级目录

```
cd -
```

### 1.3 安装gbinder-python模块{#install-gbinder-python}

- 获取源码
  
```
git clone https://gitee.com/openfde/gbinder-python.git 
```

- 安装pyhton3-pip、cython3、lxc、curl、ca-certificates

```
sudo apt install python3-pip cython3 lxc curl ca-certificates
```

- 进入gbinder-python目录

```
cd gbinder-python
```

- 编译gbinder-python
  
```
python3 setup.py build_ext --inplace --cython
```

- 安装gbinder-python
  
```
sudo python3 setup.py install 
```

- 安装pyclip

```
sudo pip3 install pyclip -i https://mirrors.aliyun.com/pypi/simple  
```

- 回到上级目录

```
cd -
```

## 2. 安装waydroid控制程序{#install-waydroid-program}

- 获取源码

```
git clone https://gitee.com/openfde/waydroid_waydroid.git
```

- 进入waydroid目录并编译

```
cd waydroid_waydroid && sudo make install 
```

- 回到上级目录

```
cd -
```

## 3. 安装fde_ctrl相关程序{#install-fde-ctrl}

### 3.1 下载和配置golang编译程序{#install-config-golang}

- 安装wget工具并下载golang编译工具

```
sudo apt install wget -y && wget https://go.dev/dl/go1.20.13.linux-arm64.tar.gz -O ~/go1.20.13.linux-arm64.tar.gz 
```

- 解压并拷贝到执行路径下

```
cd ~ && tar -xf ~/go1.20.13.linux-arm64.tar.gz && cd go && sudo cp -a bin/* /usr/bin/
```

- 设置环境变量并添加到bash环境变量中

```
export GOROOT=~/go && echo "export GOROOT=~/go" >> ~/.bashrc
```

- 创建gopath目录,并设置GOPATH环境变量，将其添加到bash环境变量中

```
mkdir ~/gopath && export GOPATH=~/gopath && echo "export GOPATH=~/gopath" >> ~/.bashrc
```

- 回到上级目录，并设置Go语言模块代理

```
cd - && go env -w GOPROXY=https://goproxy.cn,direct
```

### 3.2 安装fde_fs{#build-fde-fs}

- 获取源码

```
git clone https://gitee.com/openfde/fde_fs.git
```

- 安装libfuse和fuse

```
sudo apt install  libfuse-dev fuse3 -y
```

- 进入fde_fs目录并编译源码

```
cd fde_fs && make 
```
  
- 安装fde_fs

```
make install 
```

- 回到上级目录

```
cd -
```

### 3.3 编译安装fde_tigervncserver{#install-fde-tigervncserver}

- 获取源码后进入到fde_tigervncserver目录

```
git clone https://gitee.com/openfde/fde_tigervncserver.git && cd fde_tigervncserver
```

- 安装ubuntu版本的deb包

```
sudo dpkg -i xorg-server-source_2%3a1.20.13-1ubuntu1~20.04.8_all.deb
```

- 安装ARM64版本的deb包

```
sudo dpkg -i tigervnc-build-deps_1.10.1+dfsg-3_arm64.deb
```

这一步中如果报错“缺少依赖”可以忽略，后面的步骤会将依赖安装好。

- 自动安装损坏的或缺失的依赖包

```
sudo apt --fix-broken install  -y
```

- 安装equivs和devscripts
  
```
sudo apt install equivs devscripts --no-install-recommends -y
```

- 使用mk-build-deps工具创建构建依赖并自动安装
  
```
sudo mk-build-deps -i -t "apt-get" -r
```

- 指定构建选项并打包
  
```
sudo DEB_BUILD_OPTIONS="parallel=8" dpkg-buildpackage -b -uc -us
```

> -b：指定进行二进制包的构建
> -uc：跳过对软件包的数字签名操作
> -us: 跳过对源码代码修改记录的签名操作

- 回到上级目录，安装perl模块

```
cd - && sudo apt install libfile-readbackwards-perl
```

- 安装tigervncserver的arm64版deb包

```
sudo dpkg  -i  tigervnc-standalone-server_1.10.1+dfsg-3_arm64.deb
```

### 3.4 编译fde linux输入法{#build-fde-linux-ime}

- 获取源码

```
git clone https://gitee.com/openfde/fdeime.git
```

- 安装libibus

```
sudo apt install  libibus-1.0-dev -y
```

- 进入fdeime目录，编译和构建fdeime

```
cd fdeime && cmake . && make
```

- 安装fdeime

```
sudo make install 
```

- 回到上级目录

```
cd -
```

### 3.5 安装linux wayland窗口管理器mutter{#install-mutter}

- 获取源码，进入mutter目录

```
git clone https://gitee.com/openfde/mutter.git && cd mutter
```

- 安装相关依赖

```
 sudo apt install -y meson libgraphene-1.0-dev libgtk-3-dev gsettings-desktop-schemas-dev gnome-settings-daemon-dev libjson-glib-dev libgnome-desktop-3-dev libxkbcommon-x11-dev libx11-xcb-dev libxcb-randr0-dev libxcb-res0-dev libcanberra-dev libgudev-1.0-dev libinput-dev libstartup-notification0-dev sysprof xwayland gnome-settings-daemon
```

- 编译和构建meson

```
meson build && ninja -C build 
```

- 安装和配置mutter
  
```
sudo ninja -C build install && sudo ldconfig
```

- 回到上级目录

```
cd -
```

### 3.6 安装linux桌面控制程序fde_ctrl{#install-fde-ctrl}

- 获取源码

```
git clone https://gitee.com/openfde/fde_ctrl.git
```

- 安装libx11-dev i3

```
sudo apt install libx11-dev i3 -y
```

- 进入fde_ctrl目录进行编译和安装

```
cd fde_ctrl && make && make install
```

- 回到上级目录

```
cd -
```
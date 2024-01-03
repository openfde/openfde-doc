---
sidebar_position: 1
title: 快速开始
---

# 快速开始{#quick-start}

&emsp;&emsp;本文档用于指导OpenFDE开发爱好者如何快速编译OpenFDE源码。编译工作包括AOSP代码编译、Linux程序编译和Android APK编译三个部分。

## 1. AOSP源码编译 {#aosp-build}

### 1.1 准备环境 {#preparation}

&emsp;&emsp;AOSP源码编译需要准备一台<mark>多核的X86主机，内存要求16G，硬盘大小最低要求配备512G</mark>，这里建议优先使用固态硬盘，当然你也可以使用机械硬盘，但是编译速度可能会很慢。

### 1.2 安装Ubuntu22.04{#install-ubuntu22.04}

&emsp;&emsp;准备好主机后，需要在你的环境上安装Ubuntu22.04, 友情提供下载链接：https://ubuntu.com/download/server

### 1.3 下载repo脚本文件{#download-repo}

&emsp;&emsp;Android通常使用repo脚本管理源码树，方便大家用一个命令就可以下载几百个仓库。你需要依次执行下面的命令来下载repo脚本文件。

```
curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
chmod +x repo
sudo mv repo /usr/local/bin/repo
export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'
echo export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' >> ~/.bashrc
```

### 1.4 安装编译依赖库{#install-dependencies}

```
sudo apt install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip libncurses5
```

### 1.5 下载源码{#download-source-code}

```
mkdir fde && cd fde
repo init -u https://gitee.com/openfde/manifests -b 1.0.5 --git-lfs
repo sync -j24
```
  
### 1.6 编译源码{#build-source-code}

```
source build/envsetup.sh
lunch 46 
make -j24
```

如果在编译过程中出现下图中的编译错误，请忽略，不影响编译过程。

![build-warn](./img/build-warn.png)

## 2. Linux程序编译{#build-linux}

<mark>注意：Linux程序编译需要在ARMv8架构的主机上进行，</mark>你需要选定一个工程目录来编译和安装Linux相关程序，下面各小节的操作都在工程目录如`openfde-linux/`下进行。

### 2.1 编译安装libglibutil{#build-libglibutil}

首先需要在OpenFDE的Gitee仓库中下载libglibtuil源码。

```
git clone https://gitee.com/openfde/libglibutil.git
```

接着依次执行下列命令来编译和安装libglibutil。

```
cd libglibutil && sudo apt install libglib2.0-dev
make
sudo make install 
sudo make install-dev
```

### 2.2 编译安装libgbinder{#build-libgbinder}

首先获取源码```git clone https://gitee.com/openfde/libgbinder.git```, 接着依次执行下列命令来编译和安装libgbinder。

```
cd libgbinder
make
sudo make install
sudo make install-dev
```

### 2.3 编译安装python-gbinder模块{#build-python-gbinder}

在当前工程目录openfde-linux/下载python-gbinder源码```git clone https://gitee.com/openfde/gbinder-python.git```，接着依次执行下列命令来编译和安装python-gbinder。

```
sudo apt install python3-pip cython3 lxc curl ca-certificates
cd gbinder-python
python3 setup.py build_ext --inplace --cython
sudo cp -a gbinder.cpython-38-aarch64-linux-gnu.so /usr/lib/python3/dist-packages/
pip3 install pyclip
```

### 2.4 编译安装fde_ctrl{#build-fde-ctrl}

首先获取fde_ctrl源码```git clone https://gitee.com/openfde/fde_ctrl.git```, 接着依次执行下列命令编译安装fde_ctrl。

```
cd fde_ctrl
sudo make build && sudo make install
```

### 2.5 编译安装fde_fs{#build-fde-fs}

首先获取fde_fs源码```git clone https://gitee.com/openfde/fde_fs.git```, 接着依次执行下列命令编译安装fde_fs。

```
cd fde_fs
sudo make build && sudo make install
```

### 2.6 安装Waydroid_waydroid{#build-waydroid}

首先获取Waydroid_waydroid源码```https://gitee.com/openfde/waydroid_waydroid.git```，接着依次执行下列命令编译安装waydroid。

```
cd waydroid_waydroid
sudo make install
```

### 2.7 编译安装fdeion{#build-fdeion}

<mark>如果你的编译环境显卡不是Phytium X100，可以跳过此环节。</mark> 如果你是在Phytium X100显卡的环境上编译Linux程序，请继续执行下列操作。

- 获取fdeion仓库源码

```
git clone https://gitee.com/openfde/fdeion.git
```

- 依次执行下列命令编译和安装fdeion

```
sudo apt-get install dh-make
sudo apt-get install dkms
sudo cp -a fdeion /usr/src/fdeion-1.0
sudo dkms add -m fdeion -v 1.0
sudo dkms build -m fdeion -v 1.0
sudo dkms mkdeb -m fdeion -v 1.0
```

其中“-v 1.0”表示所编译的fdeion的版本，如果你编译fdeion用于个人项目，版本号可以由你自己决定。

## 3. Android APK编译{#build-android-apk}

### 3.1 编译fde_vnc{#build-fde-vnc}

首先获取源码```git clone https://gitee.com/openfde/remote-desktop-clients.git```。目前编译方式是支持在Android Studio中打开该源码目录，直接编译。

### 3.2 编译system_ui{#build-systemui}

首先获取源码```git clone https://gitee.com/openfde/boringdroidsystemui.git```，同样可以直接在Android Studio中打开该源码目录直接编译。
---
sidebar_position: 1
title: Quick Start
---

# Quick Start{#quick-start}

This document is intended to guide OpenFDE enthusiasts on how to quickly compile the OpenFDE source code.

## 1. Build AOSP Source Code{#aosp-build}

### 1.1 Preparation {#preparation}

Firstly, you need to prepare a multi-core X86 host with a minimum requirement of 16GB of RAM and a minimum disk size of 512GB for building AOSP source code. It is recommended to prioritize using a solid-state drive (SSD), although you can also use a hard disk drive (HDD), but the compilation speed may be slower.

### 1.2 Install Ubuntu22.04{#install-ubuntu22.04}

After preparing the host, you need to install Ubuntu 22.04 on your system. Here is a download link for your convenience: https://ubuntu.com/download/server

### 1.3 Download the Repo Script File{#download-repo}

Android typically uses the "repo" script to manage the source code tree, making it convenient for everyone to download hundreds of repositories with just one command. You need to execute the following commands in order to download the repo script file.

```
curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
chmod +x repo
sudo mv repo /usr/local/bin/repo
export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'
echo export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' >> ~/.bashrc
```

### 1.4 Install compilation dependencies{#install-dependencies}

```
sudo apt install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip libncurses5
```

### 1.5 Download Source Code{#download-source-code}

```
mkdir fde && cd fde
repo init -u https://gitee.com/openfde/manifests -b 1.0.5 --git-lfs
repo sync -j24
```
  
### 1.6 Build Source Code{#build-source-code}

```
source build/envsetup.sh
lunch 46 
make -j24
```
    
If you encounter the compilation error shown in the image below during the build process, please ignore it as it does not affect the compilation process.

![build-warn](./img/build-warn.png)

## 2. Build Linux Dependencies{#build-linux}

<mark>Notes: building linux dependencies requires an ARMv8 architecture-based host.</mark> You need to choose a project directory to compile and install Linux-related programs. The operations in the following sections should be performed under the project directory, such as openfde-linux/.

### 2.1 Build and Make Install libglibutil{#build-libglibutil}

First, you need to download the source code of libglibtuil from the OpenFDE repository on Gitee.

```
git clone https://gitee.com/openfde/libglibutil.git
```

Next, execute the following commands sequentially to compile and install libglibutil.

```
cd libglibutil && sudo apt install libglib2.0-dev
make
sudo make install 
sudo make install-dev
```

### 2.2 Build and Make Install libgbinder{#build-libgbinder}

You need to download the source code of libgbinder ```git clone https://gitee.com/openfde/libgbinder.git``` and execute the following commands sequentially to compile and install libgbinder.

```
cd libgbinder
make
sudo make install
sudo make install-dev
```

### 2.3 Build and Make Install python-gbinder{#build-python-gbinder}

Download the source code of python-gbinder in the current project directory openfde-linux/ 

```
git clone https://gitee.com/openfde/gbinder-python.git
```

And execute the following commands sequentially to compile and install  python-gbinder.

```
sudo apt install python3-pip cython3 lxc curl ca-certificates
cd gbinder-python
python3 setup.py build_ext --inplace --cython
sudo cp -a gbinder.cpython-38-aarch64-linux-gnu.so /usr/lib/python3/dist-packages/
pip3 install pyclip
```

### 2.4 Build and Make Install fde_ctrl{#build-fde-ctrl}

Download the source code of fde_ctrl ```git clone https://gitee.com/openfde/fde_ctrl.git```, and execute the following commands sequentially to compile and install fde_ctrl.

```
cd fde_ctrl
make
sudo make install
sudo make install-dev
```

### 2.5 Build and Make Install fde_fs{#build-fde-fs}

Download the source code of fde_fs ```git clone https://gitee.com/openfde/fde_fs.git```, and execute the following commands sequentially to compile and install fde_fs.

```
cd fde_fs
make
sudo make install
sudo make install-dev
```

### 2.6 Build and Make Install Waydroid_waydroid{#build-waydroid}

Download the source code of Waydroid_waydroid```https://gitee.com/openfde/waydroid_waydroid.git```，and execute the following commands sequentially to compile and install waydroid.

```
cd waydroid_waydroid
make
sudo make install
sudo make install-dev
```

### 2.7 Build and Make Install fdeion{#build-fdeion}

<mark>If your compilation environment does not have a Phytium X100 GPU, you can skip this step.</mark> And if you are compiling Linux programs on a Phytium X100 GPU environment, please proceed with the following steps.

- get fdeion source code

```
git clone https://gitee.com/openfde/fdeion.git
```

-  execute the following commands sequentially to compile and install fdeion

```
sudo apt-get install dh-make
sudo apt-get install dkms
sudo cp -a fdeion /usr/src/fdeion-1.0
sudo dkms add -m fdeion -v 1.0
sudo dkms build -m fdeion -v 1.0
sudo dkms mkdeb -m fdeion -v 1.0
```

The "-v 1.0" represents the version of the compiled fdeion. If you are compiling fdeion for a personal project, you can decide the version number yourself.

## 3. Build Android APK{#build-android-apk}

### 3.1 Build fde_vnc{#build-fde-vnc}

Get the source code ```git clone https://gitee.com/openfde/remote-desktop-clients.git``` at first. The current compilation method supports opening the source code directory in Android Studio and compiling it directly.

### 3.2 Build system_ui{#build-systemui}

Get the source code ```git clone https://gitee.com/openfde/boringdroidsystemui.git```, Similarly, you can directly open the source code directory in Android Studio and compile it.
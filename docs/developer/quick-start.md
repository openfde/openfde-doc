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

After preparing the host, you need to install Ubuntu 22.04 on your system. Here is a download link for your convenience: https://ubuntu.com/download/server.

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
sudo apt install git git-lfs -y
repo init -u https://gitee.com/openfde/manifests -b 1.0.5 --git-lfs
repo sync -j24
```

### 1.6 Build Source Code{#build-source-code}

```
source build/envsetup.sh
syncFdeApk
lunch 46 
make -j24
```

 The `syncFdeApk` command will download the APK matching the current version from the public object storage and place it in the corresponding location within the AOSP source tree. If you have made modifications to the APK source code and need to recompile it, please refer to [Build Android APK](./build-android-apk).

<mark>If you encounter the compilation error shown in the image below during the build process, please ignore it as it does not affect the compilation process.</mark>

![build-warn](./img/build-warn.png)

## 2. Build Linux Dependencies{#build-linux}

### 2.1 Requirements{#requirements}

Building linux dependencies requires an ARMv8 architecture-based host. You need to choose a project directory to compile and install Linux-related programs. The operations in the following sections should be performed under the project directory, such as openfde-linux/. <mark> If this is not your first time compiling, please make sure to synchronize and update the code of all dependent libraries to the latest version.</mark>

We will provide a detailed guide on compiling Linux programs on different operating systems.

### 2.2 Build Linux Dependencies on Kylin2023

You can execute the following command to compile Linux programs with a single command.

```
git clone https://gitee.com/openfde/quick_start_to_compile_linux_programs && cp -a quick_start_to_compile_linux_programs/build_linux_for_fde.sh . && ./build_linux_for_fde.sh
```

If you want to learn more about the detailed compilation process and specifics, please visit [Building Linux Programs on Kylin2303](./build-linux/build-linux-on-kylin2303).


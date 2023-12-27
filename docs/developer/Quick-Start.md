---
sidebar_position: 1
title: Quick Start
---

# Quick Start{#quick-start}

This document is intended to guide OpenFDE enthusiasts on how to quickly compile the OpenFDE source code.

### Preparation {#preparation}

Firstly, you need to prepare a multi-core X86 host with a minimum requirement of 16GB of RAM and a minimum disk size of 512GB. It is recommended to prioritize using a solid-state drive (SSD), although you can also use a hard disk drive (HDD), but the compilation speed may be slower.

### Install Ubuntu22.04{#install-ubuntu22.04}

After preparing the host, you need to install Ubuntu 22.04 on your system. Here is a download link for your convenience: https://ubuntu.com/download/server

### Download the Repo Script File{#download-repo}

Android typically uses the "repo" script to manage the source code tree, making it convenient for everyone to download hundreds of repositories with just one command. You need to execute the following commands in order to download the repo script file.

```
curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
chmod +x repo
sudo mv repo /usr/local/bin/repo
export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'
echo export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' >> ~/.bashrc
```

### Install compilation dependencies{#install-dependencies}

```
sudo apt install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip libncurses5
```

### Download Source Code{download-source-code}

```
mkdir fde && cd fde
repo init -u https://gitee.com/openfde/manifests -b 1.0.5 --git-lfs
repo sync -j24
```
  
### Build Source Code{#build-source-code}

```
source build/envsetup.sh
lunch 46 
make -j24
```
    


---
sidebar_position: 1
title: 快速开始
---

# 快速开始{#quick-start}

&emsp;&emsp;本文档用于指导OpenFDE开发爱好者如何快速编译OpenFDE源码。

### 准备环境 {#preparation}

&emsp;&emsp;首先你需要准备一台多核的X86主机，内存要求16G，硬盘大小最低要求配备512G，这里建议优先使用固态硬盘，当然你也可以使用机械硬盘，但是编译速度可能会很慢。

### 安装Ubuntu22.04{#install-ubuntu22.04}

&emsp;&emsp;准备好主机后，需要在你的环境上安装Ubuntu22.04, 友情提供下载链接：https://ubuntu.com/download/server

### 下载repo脚本文件{#download-repo}

&emsp;&emsp;Android通常使用repo脚本管理源码树，方便大家用一个命令就可以下载几百个仓库。你需要依次执行下面的命令来下载repo脚本文件。

```
curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo
chmod +x repo
sudo mv repo /usr/local/bin/repo
export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'
echo export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' >> ~/.bashrc
```

### 安装编译依赖库{#install-dependencies}

```
sudo apt install git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip libncurses5
```

### 下载源码{#download-source-code}

```
mkdir fde && cd fde
repo init -u https://gitee.com/openfde/manifests -b 1.0.5 --git-lfs
repo sync -j24
```
  
### 编译源码{#build-source-code}

```
source build/envsetup.sh
lunch 46 
make -j24
```
    
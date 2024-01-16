---
sidebar_position: 1
title: 快速开始
---

# 快速开始{#quick-start}

&emsp;&emsp;本文档用于指导OpenFDE开发爱好者如何快速编译OpenFDE源码。编译工作包括AOSP代码编译和Linux程序编译。

## 1. AOSP源码编译 {#aosp-build}

### 1.1 准备环境 {#preparation}

&emsp;&emsp;AOSP源码编译需要准备一台<mark>多核的X86主机，内存要求16G，硬盘大小最低要求配备512G</mark>，这里建议优先使用固态硬盘，当然你也可以使用机械硬盘，但是编译速度可能会很慢。

### 1.2 安装Ubuntu22.04{#install-ubuntu22.04}

&emsp;&emsp;准备好主机后，需要在你的环境上安装Ubuntu22.04, 友情提供下载链接：https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/22.04.3

### 1.3 安装和更新repo依赖{#install-repo}

&emsp;&emsp;Android通常使用repo脚本管理源码树，方便大家用一个命令就可以下载几百个仓库。

- 安装curl、repo、wget工具
  
```
sudo apt install curl repo wget -y
```

- 获取repo脚本文件

```
curl https://mirrors.tuna.tsinghua.edu.cn/git/git-repo -o repo && chmod +x repo && sudo mv repo /usr/bin/repo
```

- 把python3链接到python

```
sudo ln -sf /usr/bin/python3 /usr/bin/python
```

- 设置repo_url环境变量，以便后续repo检查更新

```
export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo'
```

- 将repo_url添加到bash环境变量
  
```
echo export REPO_URL='https://mirrors.tuna.tsinghua.edu.cn/git/git-repo' >> ~/.bashrc
```

### 1.4 安装编译依赖{#install-dependencies}

```
sudo apt install -y python-is-python3 git-core gnupg flex bison gperf build-essential zip curl zlib1g-dev gcc-multilib g++-multilib libc6-dev-i386 lib32ncurses5-dev x11proto-core-dev libx11-dev lib32z-dev libgl1-mesa-dev libxml2-utils xsltproc unzip libncurses5 simg2img meson glslang-tools pkg-config cmake python3-mako
```

### 1.5 下载源码{#download-source-code}

注意：从这一节开始，后续的操作都不要使用root用户，请务必**切换到普通用户操作**。

- 创建fde目录，并安装git工具

```
mkdir fde && cd fde && sudo apt install git git-lfs -y
```

- 配置git账号和邮箱

```
git config --global user.name openfde && git config --global user.email openfde@openfde.com
```

- 下载fde的mainifests仓库
  
```
repo init -u https://gitee.com/openfde/manifests -b 1.0.6 --git-lfs
```

该步骤会按照fde manifests仓库初始化android源码树目录结构，其中-u表示指定从中检索清单代码库的地址；-b表示指定代码版本，当前OpenFDE代码版本为1.0.6。

在执行repo init这条命令时，可能会出现```Testing colorized output (for 'repo diff', 'repo status'):
black red green yellow blue  magenta cyan  white bold  dim ul reverse Enable color display in this user account (y/N)? ```, 此时输入y继续执行即可。

  
- 同步代码库中的最新代码
  
```
repo sync -j4 
```

```repo sync```命令会耗时50min左右，这里需要用心等待，当然也会根据实际环境的网络情况耗时不同。如果执行失败，你可以尝试再次执行，直到成功。

### 1.6 编译源码{#build-source-code}

- 导入安卓编译环境变量
  
```
source build/envsetup.sh
```

- 同步APK源码

```
syncFdeApk
```

```syncFdeApk```命令会从公网对象存储中下载当前版本匹配的apk到aosp源码树对应位置。如果修改了对应的apk源码，需要重新编译apk源码，请参考[Android APK编译](./build-android-apk)。

- 选择编译选项，使用24线程执行编译
  
```
lunch 44 && make -j24
```

整个编译过程一般耗时在1小时10分钟左右，如果在这一步中断，需要从"导入安卓编译环境变量"```source build/envsetup.sh```开始重新执行整个编译环节。

<mark>如果在编译过程中出现下图中的编译错误，请忽略，不影响编译过程。</mark>

![build-warn](./img/build-warn.png)

### 1.7 转换镜像格式为linux ext格式{#to-linux-ext}

```
cd  out/target/product/fde_arm64/ && simg2img system.img system.ext.img && simg2img vendor.img vendor.ext.img
```

### 1.8 拷贝镜像到运行目标{#copy-img}

```
scp system.ext.img vendor.ext.img user@target:
```

`user@target：`表示后面用来编译Linux程序的ARMv8环境，其中user表示账户名，target表示机器的ip地址。<mark>这里务必加上后面的冒号！！！</mark>

## 2. Linux程序编译{#build-linux}

### 2.1 编译前准备{#requirements}

Linux程序编译需要在**ARMv8架构**的主机上进行，你需要选定一个工程目录来编译和安装Linux相关程序，下面各小节的操作都在工程目录如`openfde-linux/`下进行。<mark>如果不是首次编译，请确保将各个依赖库的代码同步更新到最新。</mark>

下面将详细介绍在不同的操作系统上编译Linux程序。

### 2.2 Kylin2303上编译Linux程序{#build-linux-on-kylin2303}

#### 2.2.1 设置要求{#settings}

开始编译之前，请先前往系统设置-安全中关闭网络保护、应用保护和设备安全保护。

![control](./img/control.png)

![protect](./img/protect.png)

#### 2.2.2 一键编译{#quick-build}

你可以执行下列命令进行一键编译Linux程序。

```
cd ~ && sudo apt install git -y && git clone https://gitee.com/openfde/quick_start_to_compile_linux_programs && cp -a quick_start_to_compile_linux_programs/build_linux_for_fde.sh . && ./build_linux_for_fde.sh
```

如果想要了解更详细的编译过程和细节，请前往[Kylin2303上编译Linux程序](./build-linux/build-linux-on-kylin2303)。
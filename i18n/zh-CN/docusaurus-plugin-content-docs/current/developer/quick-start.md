---
sidebar_position: 1
title: 快速开始
---

# 快速开始{#quick-start}

&emsp;&emsp;本文档用于指导OpenFDE开发爱好者如何快速编译OpenFDE源码。编译工作包括AOSP代码编译、Android APK编译和Linux程序编译三个部分。

## 1. AOSP源码编译 {#aosp-build}

### 1.1 准备环境 {#preparation}

&emsp;&emsp;AOSP源码编译需要准备一台<mark>多核的X86主机，内存要求16G，硬盘大小最低要求配备512G</mark>，这里建议优先使用固态硬盘，当然你也可以使用机械硬盘，但是编译速度可能会很慢。

### 1.2 安装Ubuntu22.04{#install-ubuntu22.04}

&emsp;&emsp;准备好主机后，需要在你的环境上安装Ubuntu22.04, 友情提供下载链接：https://ubuntu.com/download/server, 下载完成后运行容器。

```
docker pull ubuntu:22.04
docker run -it --name ubuntu_build_apk ubuntu:22.04
```

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
syncFdeApk
lunch 46 
make -j24
```

其中```syncFdeApk```命令会从公网对象存储中下载当前版本匹配的apk到aosp源码树对应位置。如果你修改了apk源码，需要重新编译apk源码，请参考[第三部分 Android APK编译](./quick-start#build-android-apk)。

<mark>如果在编译过程中出现下图中的编译错误，请忽略，不影响编译过程。</mark>

![build-warn](./img/build-warn.png)

## 2. Linux程序编译{#build-linux}

### 2.1 编译前准备{#requirements}

Linux程序编译需要在**ARMv8架构**的主机上进行，你需要选定一个工程目录来编译和安装Linux相关程序，下面各小节的操作都在工程目录如`openfde-linux/`下进行。<mark>如果不是首次编译，请确保将各个依赖库的代码同步更新到最新。</mark>

下面将详细介绍在不同的操作系统上编译Linux程序。

### 2.2 Kylin2303上编译Linux程序{#build-linux-on-kylin2303}

你可以执行下列命令进行一键编译Linux程序。

```
sudo apt-get install curl && curl -fsSL https://openfde.com/getopenfde/get-openfde.sh -o get-openfde.sh && sudo sh ./get-openfde.sh
```

如果想要了解更详细的编译过程和细节，请前往[Kylin2303上编译Linux程序](./build-linux/build-linux-on-kylin2303)。

## 3. Android APK编译{#build-android-apk}

<mark>环境准备：请确保Android APK在X86机器上运行Ubuntu容器里进行编译。要求多核的X86主机，内存要求16G，硬盘大小最低配备512G。</mark>

### 3.1 下载Android cmdline tools和ndk

```
apt update
cd ~
apt install wget zip openjdk-11-jre git openjdk-17-jre -y
wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
unzip commandlinetools-linux-10406996_latest.zip
export PATH=$PATH:/root/cmdline-tools/bin/
mkdir /root/sdk_root
export ANDROID_SDK_ROOT=/root/sdk_root/
sdkmanager --sdk_root=/root/sdk_root/ 'ndk;21.1.6352462'
```

如果命令执行过程中遇到"Accept?(y/N):"，请按y。

### 3.2 编译systemui apk{#build-systemui}

```
git clone https://gitee.com/openfde/boringdroidsystemui
cd boringdroidsystemui
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/
./gradlew build
```

**说明：** 由于sdkmanager要求java 17才能运行，而编译apk只能在java11上编译，所以这里需要重新设置JAVA_HOME为java11。如果使用java17编译的话会报如下错误：

> Unable to make field private final java.lang.String java.io.File.path accessible: module java.base does not "opens java.io" to unnamed module @71cff6a8.

编译完成后可以在`app/build/outputs/apk`目录下找到app/build/outputs/apk/release/BoringdroidSystemUI.apk文件。

### 3.3 编译fdevnc apk{#build-fde-vnc}

```
cd ~
git clone https://gitee.com/openfde/remote-desktop-clients 
cd remote-desktop-clients
./gradlew :bVNC-app:assembleRelease  -PVersionName="1.0.5"
```

###  3.4 拷贝apk到aosp源码目录{#copy-apk-to-aosp}

打开新的linux shell终端，将3.2节和3.3节编译好的apk文件从容器中拷贝出来。

```
docker cp ubuntu_build_apk:/root/boringdroidsystemui/app/build/outputs/apk/release/BoringdroidSystemUI.apk  $AOSP_TOP_DIR/vendor/prebuilts/bdapps/bin/BoringdroidSystemUI.apk
```

```
docker cp ubuntu_build_apk:/root/remote-desktop-clients/bVNC-app/build/outputs/apk/release/FdeVncClient.apk $AOSP_TOP_DIR/device/openfde/fde/fde_vnc/
```

其中$AOSP_TOP_DIR 表示aosp的源码树顶层目录。
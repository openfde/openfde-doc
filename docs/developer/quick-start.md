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
syncFdeApk
lunch 46 
make -j24
```

 The `syncFdeApk` command will download the APK matching the current version from the public object storage and place it in the corresponding location within the AOSP source tree. If you have made modifications to the APK source code and need to recompile it, please refer to [Part 3: Android APK Compilation](./quick-start#build-android-apk).

<mark>If you encounter the compilation error shown in the image below during the build process, please ignore it as it does not affect the compilation process.</mark>

![build-warn](./img/build-warn.png)

## 2. Build Linux Dependencies{#build-linux}

### 2.1 Requirements{#requirements}

Building linux dependencies requires an ARMv8 architecture-based host. You need to choose a project directory to compile and install Linux-related programs. The operations in the following sections should be performed under the project directory, such as openfde-linux/. <mark> If this is not your first time compiling, please make sure to synchronize and update the code of all dependent libraries to the latest version.</mark>

We will provide a detailed guide on compiling Linux programs on different operating systems.

### 2.2 Build Linux Dependencies on Kylin2023

You can execute the following command to compile Linux programs with a single command.

```

```

If you want to learn more about the detailed compilation process and specifics, please visit [Building Linux Programs on Kylin2303](./build-linux/build-linux-on-kylin2303).

## 3 Build Android APK{#build-android-apk}

### 3.1 Build fde_vnc{#build-fde-vnc}

```
git clone https://gitee.com/openfde/remote-desktop-clients.git
``` 

The current compilation method supports opening the source code directory in Android Studio and compiling it directly.

### 3.2 Build system_ui{#build-systemui}

```
git clone https://gitee.com/openfde/boringdroidsystemui.git
```

You can directly open the source code directory in Android Studio and compile it.


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
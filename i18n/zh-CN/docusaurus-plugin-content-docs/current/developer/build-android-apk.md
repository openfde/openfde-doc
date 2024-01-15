---
sidebar_position: 3
title: Android APK编译
---

# Android APK编译{#build-android-apk}

<mark>环境准备：多核的X86主机，内存要求16G，硬盘大小最低要求配备512G。</mark>（后续还会更新）

### 1. 下载ubuntu镜像并运行容器

```
sudo apt install docker.io
docker pull ubuntu:22.04
docker run -it --name ubuntu_build_apk ubuntu:22.04
```

### 2. 下载Android cmdline tools和ndk

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

### 3. 编译systemui apk{#build-systemui}

```
git clone https://gitee.com/openfde/boringdroidsystemui
cd boringdroidsystemui
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/
./gradlew build
```

**说明：** 由于sdkmanager要求java 17才能运行，而编译apk只能在java11上编译，所以这里需要重新设置JAVA_HOME为java11。如果使用java17编译的话会报如下错误：

> Unable to make field private final java.lang.String java.io.File.path accessible: module java.base does not "opens java.io" to unnamed module @71cff6a8.

编译完成后可以在`app/build/outputs/apk`目录下找到app/build/outputs/apk/release/BoringdroidSystemUI.apk文件。

### 4. 编译fdevnc apk{#build-fde-vnc}

```
cd ~
git clone https://gitee.com/openfde/remote-desktop-clients 
cd remote-desktop-clients
./gradlew :bVNC-app:assembleRelease  -PVersionName="1.0.5"
```

### 5. 拷贝APK到AOSP源码目录{#copy-apk-to-aosp}

打开新的linux shell终端，将3.3节和3.4节编译好的apk文件从容器中拷贝出来。

```
docker cp ubuntu_build_apk:/root/boringdroidsystemui/app/build/outputs/apk/release/BoringdroidSystemUI.apk  $AOSP_TOP_DIR/vendor/prebuilts/bdapps/bin/BoringdroidSystemUI.apk
```

```
docker cp ubuntu_build_apk:/root/remote-desktop-clients/bVNC-app/build/outputs/apk/release/FdeVncClient.apk $AOSP_TOP_DIR/device/openfde/fde/fde_vnc/
```

其中$AOSP_TOP_DIR 表示aosp的源码树顶层目录。
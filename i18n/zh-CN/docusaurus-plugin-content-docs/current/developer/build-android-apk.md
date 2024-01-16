---
sidebar_position: 3
title: Android APK编译
---

# Android APK编译{#build-android-apk}

<mark>环境准备：多核的X86主机，内存要求16G，硬盘大小最低要求配备512G。</mark>

### 1. 下载ubuntu镜像并运行容器{#download-ubuntu}

- 安装docker

```
sudo apt install docker.io
```

- 从docker镜像仓库中拉取ubuntu:22.04镜像

```
docker pull ubuntu:22.04
```

- 运行镜像

```
docker run -it --name ubuntu_build_apk ubuntu:22.04
```

### 2. 下载cmdline tools和ndk{#download-cmdline-ndk}

- 更新软件源

```
apt update
```

- 进入家目录，并安装相关工具
  
```
cd ~ && apt install wget zip openjdk-11-jre git openjdk-17-jre -y
```

- 下载cmdline安装包

```
wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
```

- 解压
  
```
unzip commandlinetools-linux-10406996_latest.zip
```

- 设置PATH环境变量

```
export PATH=$PATH:/root/cmdline-tools/bin/
```

- 设置ANDROID_SDK_ROOT环境变量

```
mkdir /root/sdk_root && export ANDROID_SDK_ROOT=/root/sdk_root/
```

- 安装android ndk21.1.6352462版本
```
sdkmanager --sdk_root=/root/sdk_root/ 'ndk;21.1.6352462'
```

如果命令执行过程中遇到"Accept?(y/N):"，请按y。

### 3. 编译systemui apk{#build-systemui}

- 获取源码，并进入boringdroidsystemui目录

```
git clone https://gitee.com/openfde/boringdroidsystemui && cd boringdroidsystemui
```

- 设置JAVA_HOME环境变量

```
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/
```

- 执行gradle构建apk

```
./gradlew build
```

**说明：** 由于sdkmanager要求java 17才能运行，而编译apk只能在java11上编译，所以这里需要重新设置JAVA_HOME为java11。如果使用java17编译的话会报如下错误：

> Unable to make field private final java.lang.String java.io.File.path accessible: module java.base does not "opens java.io" to unnamed module @71cff6a8.

编译完成后可以在`app/build/outputs/apk`目录下找到app/build/outputs/apk/release/BoringdroidSystemUI.apk文件。

### 4. 编译fdevnc apk{#build-fde-vnc}

- 回到家目录，获取fde-vnc源码

```
cd ~ && git clone https://gitee.com/openfde/remote-desktop-clients 
```

- 进入remote-desktop-clients目录，构建bVNC-app

```
cd remote-desktop-clients && ./gradlew :bVNC-app:assembleRelease  -PVersionName="1.0.5"
```

### 5. 编译gallery_fde{#compile-gallery-fde}

- 进入家目录，获取gallery-fde源码

```
cd ~ && git clone https://gitee.com/openfde/gallery_fde
```

- 进入gallery-fde目录，并修改目录权限

```
cd gallery_fde && chmod +x gradlew
```

- 构建应用
  
```
./gradlew  build -PappVersion=1.0.6
```

### 6. 拷贝apk文件到aosp源码目录{#copy-apk-to-aosp}

打开新的linux shell终端，将3.3节和3.4节编译好的apk文件从容器中拷贝出来。

```
docker cp ubuntu_build_apk:/root/boringdroidsystemui/app/build/outputs/apk/release/BoringdroidSystemUI.apk  $AOSP_TOP_DIR/vendor/prebuilts/bdapps/bin/BoringdroidSystemUI.apk
```

```
docker cp ubuntu_build_apk:/root/remote-desktop-clients/bVNC-app/build/outputs/apk/release/FdeVncClient.apk $AOSP_TOP_DIR/device/openfde/fde/fde_vnc/
```

其中$AOSP_TOP_DIR 表示aosp的源码树顶层目录。
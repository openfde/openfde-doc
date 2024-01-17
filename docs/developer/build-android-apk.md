---
sidebar_position: 3
title: Build Android APK
---

# Build Android APK{#build-android-apk}

<mark>a multi-core X86 host with a minimum requirement of 16GB of RAM and a minimum disk size of 512GB.
</mark>

### 1. Install Ubuntu and Run the Container{#install-ubuntu-and-run-the-container}


- Install docker

```
sudo apt install docker.io
```

- Pull ubuntu:22.04 from the docker repository

```
sudo docker pull ubuntu:22.04
```

- Run ubuntu:22.04

```
sudo docker run -it --name ubuntu_build_apk ubuntu:22.04
```
### 2. Install cmdline tools和ndk{#install-cmdline-and-ndk}

- Update the list of package

```
apt update
```

- Go to the `home` directory and install the related tools 
  
```
cd ~ && apt install wget zip openjdk-11-jre git openjdk-17-jre -y
```

- Install cmdline package

```
wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
```

- Unzip the file
  
```
unzip commandlinetools-linux-10406996_latest.zip
```

- Set PATEH environment variable

```
export PATH=$PATH:/root/cmdline-tools/bin/
```

- Set ANDROID_SDK_ROOT environment variable

```
mkdir /root/sdk_root && export ANDROID_SDK_ROOT=/root/sdk_root/
```

- Install android ndk21.1.6352462
  
```
sdkmanager --sdk_root=/root/sdk_root/ 'ndk;21.1.6352462'
```

If you encounter the prompt "Accept?(y/N):" during the command execution, please press 'y'.

### 3. Build Systemui APK{#build-systemui}

- Get the source code and go to the `boringdroidsystemui` directory

```
git clone https://gitee.com/openfde/boringdroidsystemui && cd boringdroidsystemui
```

- Set JAVA_HOME environment variable

```
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/
```

- Execute gradle and build the apk

```
./gradlew build
```

**Note:** Due to the requirement of sdkmanager to run on Java 17 and the limitation of compiling APKs on Java 11, it is necessary to reset JAVA_HOME to Java 11. Compiling with Java 17 will result in the following error.

> Unable to make field private final java.lang.String java.io.File.path accessible: module java.base does not "opens java.io" to unnamed module @71cff6a8.

After compilation is complete, you can find the `BoringdroidSystemUI.apk` file in the `app/build/outputs/apk/release` directory.

### 4. Build FdeVNC APK{#build-fde-vnc}

- Back to the `home` directory and get the source code of fde-vnc

```
cd ~ && git clone https://gitee.com/openfde/remote-desktop-clients 
```

- Go tot the `remote-desktop-clients` directory and build bVNC-app

```
cd remote-desktop-clients && ./gradlew :bVNC-app:assembleRelease  -PVersionName="1.0.5"
```

### 5. Compile gallery_fde{#compile-gallery-fde}

- Back to the `home` directory and get the source code of gallery-fde

```
cd ~ && git clone https://gitee.com/openfde/gallery_fde
```

- Go to the `gallery-fde` and change its mode

```
cd gallery_fde && chmod +x gradlew
```

- Build app
  
```
./gradlew  build -PappVersion=1.0.6
```

###  6. Copy APK to AOSP{#copy-apk-to-aosp}

Open a new Linux shell terminal and copy the compiled APK files from sections 3.3 and 3.4 out of the container.

```
docker cp ubuntu_build_apk:/root/boringdroidsystemui/app/build/outputs/apk/release/BoringdroidSystemUI.apk  $AOSP_TOP_DIR/vendor/prebuilts/bdapps/bin/BoringdroidSystemUI.apk
```

```
docker cp ubuntu_build_apk:/root/remote-desktop-clients/bVNC-app/build/outputs/apk/release/FdeVncClient.apk $AOSP_TOP_DIR/device/openfde/fde/fde_vnc/
```

`$AOSP_TOP_DIR` represents the top-level directory of the AOSP source tree.
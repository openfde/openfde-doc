---
sidebar_position: 1
title: Build Linux Dependencies on Kylin2303
---

# Build Linux Dependencies on Kylin2303

## 1. Install gbinder-python{#install-python-gbinder}

### 1.1 Install libglibutil{#install-libglibutil}

- Update the source 
  
```
sudo apt update
```

- Install git、make、gcc、python3

```
sudo apt install git make gcc python3 -y
```

- Get the source code

```
git clone https://gitee.com/openfde/libglibutil.git
```

- Install libglib2.0-dev

```
sudo apt install libglib2.0-dev -y
```

- Access to the `libglibutil` directory and compile.

```
cd libglibutil && make  
```

- Install libgulibutil

```
sudo make install && sudo make install-dev
```

- After the compilation is completed, return to the parent directory.

```
cd -
```

### 1.2 Install libgbinder{#install-libgbinder}

- Get the source code

```
git clone https://gitee.com/openfde/libgbinder.git
```

- Go to the `libgbinder` directory and compile.
 
```
cd libgbinder && make
```

- Install libgbinder

```
sudo make install && sudo make install-dev
```

- After the compilation is completed, return to the parent directory.

```
cd -
```

### 1.3 Install gbinder-python{#install-gbinder-python}

- Get the source code
  
```
git clone https://gitee.com/openfde/gbinder-python.git 
```

- Install pyhton3-pip、cython3、lxc、curl、ca-certificates

```
sudo apt install python3-pip cython3 lxc curl ca-certificates
```

- Accecc to the `gbinder-python` directory
  
```
cd gbinder-python
```

- Compile gbinder-python
  
```
python3 setup.py build_ext --inplace --cython
```

- Install gbinder-python
  
```
sudo python3 setup.py install 
```

- Install pyclip

```
sudo pip3 install pyclip -i https://mirrors.aliyun.com/pypi/simple  
```

- Back to the parent directory

```
cd -
```

## 2. Install the waydroid program{#install-waydroid-program}

- Get the source code

```
git clone https://gitee.com/openfde/waydroid_waydroid.git
```

- Go to the `waydroid` directory and compile

```
cd waydroid_waydroid && sudo make install 
```

- Back to the parent directory

```
cd -
```

## 3. Install fde_ctrl{#install-fde-ctrl}

### 3.1 Download and compile the golang program{#install-config-golang}

- Install wget and download the tool for golang compilation

```
sudo apt install wget -y && wget https://go.dev/dl/go1.20.13.linux-arm64.tar.gz -O ~/go1.20.13.linux-arm64.tar.gz 
```

- Unzip and copy to the execution path

```
tar -xf ~/go1.20.13.linux-arm64.tar.gz && cd go && sudo cp -a bin/* /usr/bin/
```

- Set an environment variable and add it to the bash environment variables

```
export GOROOT=~/go && echo "export GOROOT=~/go" >> ~/.bashrc
```

- create the GOPATH directory and set the GOPATH environment variable, adding it to the bash environment variables

```
mkdir ~/gopath && export GOPATH=~/gopath && echo "export GOPATH=~/gopath" >> ~/.bashrc
```

- Back to the parent directory and set up the agent

```
cd - && go env -w GOPROXY=https://goproxy.cn,direct
```

### 3.2 Install fde_fs{#build-fde-fs}

- Get the source code

```
git clone https://gitee.com/openfde/fde_fs.git
```

- Install libfuse and fuse

```
sudo apt install  libfuse-dev fuse3 -y
```

- Go to the `fde_fs` directory and compile the source code
  
```
cd fde_fs && make 
```
  
- Install fde_fs

```
make install 
```

- Back to the parent directory

```
cd -
```

### 3.3 Install fde_tigervncserver{#install-fde-tigervncserver}

- Get the source code and go to the `fde_tigervncserver` directory

```
git clone https://gitee.com/openfde/fde_tigervncserver.git && cd fde_tigervncserver
```

- Install the ubuntu version of the deb package

```
sudo dpkg -i xorg-server-source_2%3a1.20.13-1ubuntu1~20.04.8_all.deb
```

- Install the ARM64 version of the deb package

```
sudo dpkg -i tigervnc-build-deps_1.10.1+dfsg-3_arm64.deb
```

If you encounter an error stating "missing dependencies" during this step, you can ignore it as the subsequent steps will take care of installing the dependencies.

- Automatically install damaged or missing dependencies.

```
sudo apt --fix-broken install  -y
```

- Install equivs and devscripts
  
```
sudo apt install equivs devscripts --no-install-recommends -y
```

- Use the `mk-build-deps` tool to create build dependencies and automatically install them.
  
```
sudo mk-build-deps -i -t "apt-get" -r
```

- Specify the build options and package the software.
  
```
sudo DEB_BUILD_OPTIONS="parallel=8" dpkg-buildpackage -b -uc -us
```

> -b：specify the build process for the binary package.
> -uc：skip the digital signing process for the software package.
> -us: skip the signing process for the source code modification records.

- Back to the parent directory and install perl

```
cd - && sudo apt install libfile-readbackwards-perl
```

- Install the arm64 deb package of tigervncserver

```
sudo dpkg  -i  tigervnc-standalone-server_1.10.1+dfsg-3_arm64.deb
```

### 3.4 Compile the Linux input method {#build-fde-linux-ime}

- Get the source code

```
git clone https://gitee.com/openfde/fdeime.git
```

- Install libibus

```
sudo apt install  libibus-1.0-dev -y
```

- Enter the `fdeime` directory and compile/build `fdeime`

```
cd fdeime && cmake . && make
```

- Install fdeime

```
sudo make install 
```

- Back to the parent directory

```
cd -
```

### 3.5 Install the window manager of the linux wayland mutter{#install-mutter}

- Get the source code and go to the `mutter` directory

```
git clone https://gitee.com/openfde/mutter.git && cd mutter
```

- Install the related dependencies

```
 sudo apt install -y meson libgraphene-1.0-dev libgtk-3-dev gsettings-desktop-schemas-dev gnome-settings-daemon-dev libjson-glib-dev libgnome-desktop-3-dev libxkbcommon-x11-dev libx11-xcb-dev libxcb-randr0-dev libxcb-res0-dev libcanberra-dev libgudev-1.0-dev libinput-dev libstartup-notification0-dev sysprof xwayland gnome-settings-daemon
```

- Compile and build meson

```
meson build && ninja -C build 
```

- Install and config mutter
  
```
sudo ninja -C build install && sudo ldconfig
```

- Back to the parent directory

```
cd -
```

### 3.6 Install the Linux desktop control program fde_ctrl{#install-fde-ctrl}

- Get the source code

```
git clone https://gitee.com/openfde/fde_ctrl.git
```

- Install libx11-dev i3

```
sudo apt install libx11-dev i3 -y
```

- Go to the `fde_ctrl` directory and make install

```
cd fde_ctrl && make && make install
```

- Back to the parent directory

```
cd -
```

---
sidebar_position: 1
title: Kylin2303上编译Linux程序
---

# Kylin2303上编译Linux程序

### 1. 编译安装libglibutil{#build-libglibutil}

```
git clone https://gitee.com/openfde/libglibutil.git
cd libglibutil 
sudo apt install libglib2.0-dev -y 
make
sudo make install 
sudo make install-dev
```

### 2. 编译安装libgbinder{#build-libgbinder}

```
cd ../
git clone https://gitee.com/openfde/libgbinder.git
cd libgbinder
make
sudo make install
sudo make install-dev
```

### 3. 编译安装python-gbinder模块{#build-python-gbinder}

```
cd ../
git clone https://gitee.com/openfde/gbinder-python.git
cd gbinder-python
python3 setup.py build_ext --inplace --cython
sudo cp -a gbinder.cpython-38-aarch64-linux-gnu.so /usr/lib/python3/dist-packages/
pip3 install pyclip
```

### 4. 编译安装fde_ctrl{#build-fde-ctrl}

```
cd ../
sudo apt install golang -y
git clone https://gitee.com/openfde/fde_ctrl.git
cd fde_ctrl
sudo make build && sudo make install
```

### 5. 编译安装fde_fs{#build-fde-fs}

```
cd ../
git clone https://gitee.com/openfde/fde_fs.git
cd fde_fs
sudo make build && sudo make install
```

### 6. 安装Waydroid_waydroid{#build-waydroid}

```
cd ../
git clone https://gitee.com/openfde/waydroid_waydroid.git
cd waydroid_waydroid
sudo make install
```

### 7. 编译安装fdeion{#build-fdeion}

fdeion是Phytium X100 GPU专用的显存分配内核模块。如果不使用Phytium X100 GPU则可以直接跳过本小节。通常，该模块可以直接通过`apt install`命令安装。

```
git clone https://gitee.com/openfde/fdeion.git
sudo apt-get install dh-make
sudo apt-get install dkms
sudo cp -a fdeion /usr/src/fdeion-1.0
sudo dkms add -m fdeion -v 1.0
sudo dkms build -m fdeion -v 1.0
sudo dkms mkdeb -m fdeion -v 1.0
```

其中“-v 1.0”表示所编译的fdeion的版本，如果你编译fdeion用于个人项目，版本号可以由你自己决定。
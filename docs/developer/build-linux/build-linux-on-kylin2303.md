---
sidebar_position: 1
title: Build Linux Dependencies on Kylin2303
---

# Build Linux Dependencies on Kylin2303

### 1. Build and Make Install libglibutil{#build-libglibutil}

```
git clone https://gitee.com/openfde/libglibutil.git
cd libglibutil 
sudo apt install libglib2.0-dev -y 
make
sudo make install 
sudo make install-dev
```

### 2. Build and Make Install libgbinder{#build-libgbinder}

```
cd ../
git clone https://gitee.com/openfde/libgbinder.git
cd libgbinder
make
sudo make install
sudo make install-dev
```

### 3. Build and Make Install python-gbinder{#build-python-gbinder}

```
cd ../
git clone https://gitee.com/openfde/gbinder-python.git
cd gbinder-python
python3 setup.py build_ext --inplace --cython
sudo cp -a gbinder.cpython-38-aarch64-linux-gnu.so /usr/lib/python3/dist-packages/
pip3 install pyclip
```

### 4. Build and Make Install fde_ctrl{#build-fde-ctrl}

```
cd ../
sudo apt install golang -y
git clone https://gitee.com/openfde/fde_ctrl.git
cd fde_ctrl
sudo make build && sudo make install
```

### 5. Build and Make Install fde_fs{#build-fde-fs}

```
cd ../
git clone https://gitee.com/openfde/fde_fs.git
cd fde_fs
sudo make build && sudo make install
```

### 6. Make Install Waydroid_waydroid{#build-waydroid}

```
cd ../
git clone https://gitee.com/openfde/waydroid_waydroid.git
cd waydroid_waydroid
sudo make install
```

### 7. Build and Make Install fdeion{#build-fdeion}

<mark>If your compilation environment does not have a Phytium X100 GPU, you can skip this step.</mark> And if you are compiling Linux programs on a Phytium X100 GPU environment, please proceed with the following steps.

```
cd ../
git clone https://gitee.com/openfde/fdeion.git
sudo apt-get install dh-make
sudo apt-get install dkms
sudo cp -a fdeion /usr/src/fdeion-1.0
sudo dkms add -m fdeion -v 1.0
sudo dkms build -m fdeion -v 1.0
sudo dkms mkdeb -m fdeion -v 1.0
```

The "-v 1.0" represents the version of the compiled fdeion. If you are compiling fdeion for a personal project, you can decide the version number yourself.

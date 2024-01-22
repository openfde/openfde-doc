---
sidebar_position: 2
title: Build fdeion on Phytium X100
---

fdeion is a dedicated memory distribution kernel module for Phytium X100 GPUs. If your system is using a graphics card other than a Phytium X100 GPU, you can simply ignore this tutorial.

In general, the fdeion module can be installed by executing the 'apt install' command directly in the terminal command line interface, which automatically downloads and installs the required packages from the appropriate repositories.

Of course, if you want to compile and install FDEION manually, you can do so by following the steps below.

- Get the source code of fdeion

```
cd ~ && git clone https://gitee.com/openfde/fdeion.git
```

- Install dh-make

```
sudo apt-get install dh-make
```

- Install dkms

```
sudo apt-get install dkms
```

- Copy fdeion to the specified directory

```
sudo cp -a fdeion /usr/src/fdeion-1.0
```

- Add fdeion version 1.0 to the DKMS source management module

```
sudo dkms add -m fdeion -v 1.0
```

- Build fdeion 1.0

```
sudo dkms build -m fdeion -v 1.0
```

- Package fdeion 1.0 into a deb package
  
```
sudo dkms mkdeb -m fdeion -v 1.0
```

where "-v 1.0" indicates the version of the compiled fdeion, and if you compile fdeion for personal projects, the version number can be determined by you.
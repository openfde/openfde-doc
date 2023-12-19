---
sidebar_position: 2
title: Installation Guide
---

# Installation Guide{#install-guide}

This document provides an overview of the installation process of OpenFDE. It is suitable for all users of OpenFDE, especially those who are new to it or seeking a better understanding. This includes developers, administrators, and maintainers, among others. Users of this manual are expected to have a basic understanding of Linux system knowledge.

Certainly, if you wish to install OpenFDE quickly, you can visit the [Quick Start](./quick-start#preparation-before-install) guide for step-by-step instructions.

### 1. Hardware and Software Requirements{#requirements}

#### Hardware{#hard}

- Processor: Phytium D2000、FT2000/4
- Graphics Card：AMD Radeon、Phytium X100

> **Attention:** If your laptop with an x100 graphics card has **a kernel version lower than 5.4.18-85**, you need to upgrade your kernel before installing and running OpenFDE. Here are the steps to upgrade your kernel.

```
echo deb http://archive.kylinos.cn/kylin/KYLIN-ALL 10.1-2303-updates main restricted universe multiverse | sudo tee /etc/apt/sources.list.d/v10sp12303.list
sudo apt-get update -y
sudo apt-get full-upgrade -y
sudo apt-get autoremove -y 
sudo apt-get autoclean -y && reboot 
```

you must reboot your computer and wait for the new kernel to take effect before proceeding with further operation.

> **If you already have OpenFDE installed on your X100 laptop**：After upgrading the kernel and before installing OpenFDE, it's recommended to perform the step ```sudo apt purge fdeion-dkms```
> 
> If you are installing OpenFDE for the first time, after upgrading the kernel version, execute the command ```sudo apt install fdeion-dkms``` to install the OpenFDE DKMS source.

- RAM：At least 8GB. If you want to enjoy a smoother experience, I recommend choosing 16GB or more of RAM. 
  
#### Software{#software}

- Operating System：Kylin, UOS, and Ubuntu.

Notes：other Linux operating systems have not been fully adapted and tested yet. You can also try manually compiling and installing OpenFDE and see if it can be installed on other operating systems.If you encounter any issues, please provide feedback [here](https://gitee.com/openfde/problem-feedback/issues)。

### 2. Installation Preparation{#preparation-before-install}

Before starting the installation of OpenFDE, it is necessary to obtain the complete software repository and configure the installation source and certificates.

**Attention**: This operation is only required during the initial installation of OpenFDE. If it is not the first time installing OpenFDE, you can skip the "Installation Preparation" section.

#### 2.1 Install wget and gpg{#install-wget-gpg}
```
sudo apt-get install wget gpg
```

#### 2.2 Download the encryption key file from the official website and decrypt it locally.{#download-keys}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 2.3 Copy the decrypted key file to the key folder of your local apt tool.{#decrypted-keys}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 2.4 Configure the software repository address for OpenFDE{#config-source-address}

- For Kylin:
  
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/kylin/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

<!-- 
- 对于ubuntu系统
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ubuntu/ \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```
-->

#### 2.5 Delete the downloaded key file{#remove-keys}

```
rm -f packages.openfde.gpg
```

### 3. Install OpenFDE{#installation}

#### 3.1 Update software source{#apt-update}

```
sudo apt-get update
```

#### 3.2 download and install OpenFDE{#install-openfde}

```
sudo apt-get install openfde 
```

### 4. Update OpenFDE{#update-openfde}

The steps to upgrade OpenFDE are the same as the third section, "Install OpenFDE".
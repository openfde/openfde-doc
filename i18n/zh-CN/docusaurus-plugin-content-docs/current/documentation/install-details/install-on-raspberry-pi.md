---
sidebar_position: 4
title: 树莓派安装OpenFDE
---

# 树莓派安装OpenFDE{#install-openfde-on-rasberry-pi}

## 一、Ubuntu22.04上安装OpenFDE{#install-on-ubuntu}

### 1. 系统要求{#prerequisites}

在树莓派Ubuntu22.04操作系统上安装OpenFDE,请确保你满足下面的要求。

#### 操作系统{#os}

- Ubuntu Jammy 22.04.3(LTS)，支持ARM64架构。

#### 内核{#kernel}

- 树莓派4B版本及其以上

&emsp;&emsp;我们研究测试和适配通过的<mark>内核版本为5.15.0-1044 raspi</mark>，如果你的内核是其他版本也可以尝试安装，如果在安装过程中遇到问题可以前往[反馈](https://gitee.com/organizations/openfde/issues)。

#### 内存{#memory}

&emsp;&emsp;建议越大越好。

### 2. 烧写Ubuntu22.04操作系统{#download-imager}

首先下载树莓派镜像烧入工具Raspberry Pi Imager,友情提供下载链接https://www.raspberrypi.com/software/ ，烧写过程部分示例：

![rapsi-imager](../img/raspi-imager.png)

### 3. 配置Ubuntu{#config}

烧写完成后，在树莓派上启动系统，进入Ubuntu，根据设置向导完成相关配置。

### 4. 配置安装源和证书{#prerequisites}

首次安装OpenFDE时，需要获取完整的软件源，并配置安装源和证书。

 **注意**：<mark>如果不是首次安装OpenFDE</mark>，可以跳过“配置安装源和证书”所有环节, 直接进入[安装](#install)。

#### 4.1 安装wget和gpg工具{#install-wget-gpg}

```
sudo apt-get install wget gpg
```

#### 4.2 从官网下载密钥文件并解密至本地{#download-keys}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 4.3 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 4.4 配置OpenFDE的软件源地址{#config-source-address}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ubuntu/ \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 4.5 删除下载的密钥文件{#remove-keys}

```
rm -f packages.openfde.gpg
```

### 5. 安装OpenFDE{#install}

- 更新软件源

```
sudo apt update
```

- 安装linux模块
  
```
sudo apt install linux-modules-extra-`uname -r`
```

- 安装OpenFDE

```
sudo apt install openfde
```

### 6. 升级OpenFDE{#update-openfde}

首先更新软件源.

```
sudo apt-get update
```

升级OpenFDE到最新版本

```
sudo apt-get install openfde
```
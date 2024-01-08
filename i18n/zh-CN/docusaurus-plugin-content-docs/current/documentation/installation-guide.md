---
sidebar_position: 2
title: 安装指引
---

# 安装指引{#install-guide}

## OpenFDE支持的平台

&emsp;&emsp;OpenFDE是一个基于AOSP、Waydroid、LineageOS打造的可运行android应用的linux桌面环境。它支持在不同的硬件平台下安装，并且根据不同的操作系统类型，安装方式可能不同。下面我们将详细介绍在不同的硬件平台和操作系统上安装OpenFDE的方法。

### Phytium D2000/FT2000平台{#D2000/FT2000}

  - [在Ubuntu上安装OpenFDE](./install-details/install-on-d2000-ft2000#install-openfde-on-kylin)
  - [在Kylin上安装OpenFDE](./install-details/install-on-d2000-ft2000#install-openfde-on-kylin)
  
### Phytium X100平台

  - [Kylin上安装OpenFDE](./install-details/install-on-x100)

### 树莓pi
  - [Ubuntu]

&emsp;&emsp;当然，如果你想快速安装OpenFDE,可以前往[快速入门](./quick-start#preparation-before-install)。

### 一、软硬件要求{#requirements}

#### 硬件要求{#hard}

- 处理器: 飞腾D2000、FT2000/4两种CPU型号
- 显卡：AMD Radeon、Phytium X100

> **注意！！！** <u>带x100显卡</u>，如果**内核版本低于5.4.18-85**，你需要首先升级你的内核版本才能正常安装和运行OpenFDE。升级内核步骤如下：
```
echo deb http://archive.kylinos.cn/kylin/KYLIN-ALL 10.1-2303-updates main restricted universe multiverse | sudo tee /etc/apt/sources.list.d/v10sp12303.list
sudo apt-get update -y
sudo apt-get full-upgrade -y
sudo apt-get autoremove -y 
```

<mark>这里必须要重启系统，待新内核生效后再进行后续操作</mark>

```
sudo apt-get autoclean -y && reboot
```

> 如果你的X100笔记本不是首次安装OpenFDE：在升级完内核后，安装OpenFDE之前，先执行```sudo apt purge fdeion-dkms```
> 
> 如果是首次安装OpenFDE：在升级完内核版本后，执行```sudo apt install fdeion-dkms`` 安装OpenFDE的dkm源

- 内存：最少8GB，推荐16GB及以上
  
#### 软件要求{#software}

- 操作系统：支持麒麟、统信、Ubuntu三种操作系统。

备注：其他Linux 操作系统尚未完全适配和测试，可以尝试手动编译安装，遇到问题请反馈至[这里](https://gitee.com/openfde/problem-feedback/issues)。



### 二、安装前准备{#preparation-before-install}

在开始安装OpenFDE之前，需要获取完整的软件源，并配置安装源和证书。

**注意**: 仅在首次安装OpenFDE时需要进行该操作，如果不是首次安装OpenFDE,则可以跳过"安装准备"环节

#### 1. 安装wget和gpg工具{#install-wget-gpg}
```
sudo apt-get install wget gpg
```

#### 2. 从官网下载密钥文件并解密至本地{#download-keys}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 3. 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 4. 配置openfde的软件源地址{#config-source-address}

- 对于麒麟系统：
  
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

#### 5. 删除下载的密钥文件{#remove-keys}

```
rm -f packages.openfde.gpg
```

### 三、开始安装{#installation}

#### 1. 更新软件源{#apt-update}

```
sudo apt-get update
```

#### 2. 下载并安装OpenFDE{#install-openfde}

```
sudo apt-get install openfde 
```

### 四、升级{#update-openfde}

升级OpenFDE步骤同第三部分"开始安装"。
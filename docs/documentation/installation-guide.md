---
sidebar_position: 2
---

# 安装指引

本文档主要介绍OpenFDE的安装方法，适用于所有使用OpenFDE的用户，特别是初次使用或想了解OpenFDE的用户，包括研发人员、管理员及维护人员等。使用本手册的用户需要具备基础的Linux系统知识。

### 一、软硬件要求

#### 硬件要求

- 处理器: 飞腾D2000、FT2000/4两种CPU型号
- 显卡：AMD Radeon、Phytium X100
- 内存：最少8GB，推荐16GB及以上
  
#### 软件要求

- 操作系统：支持麒麟、统信、Ubuntu三种操作系统。

备注：其他Linux 操作系统尚未完全适配和测试，可以尝试手动编译安装，遇到问题请反馈至[这里](https://gitee.com/organizations/openfde/issues)。

### 二、安装前准备

在开始安装OpenFDE之前，需要获取完整的软件源，并配置安装源和证书。

**注意**: 仅在首次安装OpenFDE时需要进行该操作，如果不是首次安装OpenFDE,则可以跳过"安装准备"环节

#### 1. 安装wget和gpg工具
```
sudo apt-get install wget gpg
```

#### 2. 从官网下载密钥文件并解密至本地

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 3. 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 4. 配置openfde的软件源地址

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

#### 5. 删除下载的密钥文件

```
rm -f packages.openfde.gpg
```

### 三、开始安装

#### 1. 更新软件源

```
sudo apt-get update
```

#### 2. 下载并安装OpenFDE

```
sudo apt-get install openfde
```

### 四、升级

升级OpenFDE步骤同第三部分"开始安装"。
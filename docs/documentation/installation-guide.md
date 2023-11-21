---
sidebar_position: 2
---

# 安装指引

本文档主要介绍OpenFDE的安装方法，适用于所有使用OpenFDE的用户，特别是初次使用或想了解OpenFDE的用户，包括研发人员、管理员及维护人员等。使用本手册的用户需要具备基础的Linux系统知识。

### 一、软硬件要求

#### 硬件要求

- CPU: 支持arm64架构
- 显卡：X100
  
#### 软件要求

- 操作系统：主要支持麒麟、统信、Ubuntu三种操作系统，其他操作系统也可自行使用安装，但可能会遇到安装问题

### 二、安装前准备

在开始安装OpenFDE之前，需要获取完整的软件源，并配置安装源和证书。

**注意**: 仅在首次安装OpenFDE时需要进行该操作，如果不是首次安装OpenFDE,则可以跳过"安装准备"环节

#### 安装wget和gpg工具
```
sudo apt-get install wget gpg
```

#### 从官网下载密钥文件并解密至本地

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 配置openfde的软件源地址

```
sudo sh -c 'echo "deb [arch=arm64 signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ beta main" > /etc/apt/sources.list.d/openfde.list'
```

#### 删除下载的密钥文件

```
rm -f packages.openfde.gpg
```

### 三、开始安装

#### 更新软件源

```
sudo apt-get update
```

#### 下载并安装OpenFDE

```
sudo apt-get install openfde
```
---
sidebar_position: 2
title: Phytium D2000/FT2000安装OpenFDE
---

# Phytium D2000/FT2000上安装OpenFDE

本手册分为[Kylin上安装OpenFDE](#install-on-kylin)和[Ubuntu上安装OpenFDE](#install-on-ubuntu)。

## 一、Kylin上安装OpenFDE{#install-on-kylin}

### 1. 系统要求{#system-requirements-on-kylin}

首先确认你的硬件为Phytium D2000/FT2000。

- 操作系统：银河麒麟V10(SP1)2203和2303版本，ARM64架构的也支持
- 内核：**linux-5.4.18-53及以上**
- 显卡：AMD Radeon
- 内存要求：最少8GB，推荐16GB及以上

### 2. 关闭安全控制{#disable-security-control}

&emsp;&emsp;为顺利安装和启动OpenFDE，在开始安装OpenFDE之前，你需要关闭当前系统所有的安全控制，在当前系统中选择设置-安全，进入安全中心。

![control](./../img/control.png)

以网络控制为例，关闭应用联网控制。同时，建议关闭应用保护、设备安全的相关控制。

![protect](./../img/protect.png)

### 3. 配置安装源和证书（可选）{#prerequisites-on-kylin}

首次安装OpenFDE时，需要获取完整的软件源，并配置安装源和证书。

 **注意**：<mark>如果不是首次安装OpenFDE</mark>，可以跳过“配置安装源和证书”所有环节, 直接进入[安装](#installation-on-kylin)。

#### 3.1 安装wget和gpg工具{#install-wget-gpg-on-kylin}

```
sudo apt-get install wget gpg
```

#### 3.2 从官网下载密钥文件并解密至本地{#download-keys-on-kylin}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 3.3 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys-on-kylin}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 3.4 配置OpenFDE的软件源地址{#config-source-address-on-kylin}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/kylin/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 3.5 删除下载的密钥文件{#remove-keys-on-kylin}

```
rm -f packages.openfde.gpg
```

### 4. 安装OpenFDE{#installation-on-kylin}

#### 4.1 更新软件源{#apt-update-on-kylin}

```
sudo apt-get update
```

#### 4.2 下载并安装OpenFDE{#apt-get-install-on-kylin}

```
sudo apt-get install openfde 
```

### 5. 升级OpenFDE{#update-on-kylin}

首先更新软件源.

```
sudo apt-get update
```

升级OpenFDE到最新版本

```
sudo apt-get install openfde
```

## 二、Ubuntu上安装OpenFDE{#install-on-ubuntu}

### 1. 系统要求{#system-requirements}

- 操作系统：Ubuntu Jammy 22.04.3(LTS)，ARM64架构也支持
- 内核版本：linux-6.2(待确认)
- 内存要求：最少8GB，当然建议越大越好

### 2. 配置安装源和证书（可选）{#prerequisites-on-ubuntu}

**首次**在Ubuntu系统上安装OpenFDE时，需要获取完整的OpenFDE的安装源并配置证书。

当然，如果不是首次安装，可以跳过该小节，直接进入[安装](#installation-on-ubuntu)环节。

#### 2.1 安装wget和gpg工具{#install-wget-gpg-on-ubuntu}

```
sudo apt-get install wget gpg
```

#### 2.2 从官网下载密钥文件并解密至本地{#download-keys-on-ubuntu}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 2.3 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys-on-ubuntu}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 2.4 配置OpenFDE的软件源地址{#config-source-address-on-ubuntu}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ubuntu/ \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 2.5 删除下载的密钥文件{#remove-keys-on-ubuntu}

```
rm -f packages.openfde.gpg
```

### 3. 安装OpenFDE{#installation-on-ubuntu}

#### 3.1 更新软件源{#apt-update-on-ubuntu}

```
sudo apt-get update
```

#### 3.2 下载并安装OpenFDE{#apt-get-install-on-ubuntu}

```
sudo apt-get install openfde 
```

### 4. 升级OpenFDE{#update-on-ubuntu}

首先更新软件源.

```
sudo apt-get update
```

升级OpenFDE到最新版本

```
sudo apt-get install openfde
```
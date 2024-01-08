---
sidebar_position: 1
title: Phytium D2000/FT2000安装OpenFDE
---

# Phytium D2000/FT2000上安装OpenFDE

## Kylin上安装OpenFDE{#install-openfde-on-kylin}

### 1. 系统要求{#system-requirements}

首先确认你的硬件为Phytium D2000/FT2000。

- 支持的Kylin系统版本为：
- 内存要求：最少8GB，推荐16GB及以上

### 2. 安装前准备{#prerequisites}

首次安装OpenFDE时，需要获取完整的软件源，并配置安装源和证书。

 **注意**：<mark>如果不是首次安装OpenFDE</mark>，可以跳过“安装前准备”所有环节, 直接进入[安装](#installation)。

#### 2.1 安装wget和gpg工具{#install-wget-gpg}

```
sudo apt-get install wget gpg
```

#### 2.2 从官网下载密钥文件并解密至本地{#download-keys}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 2.3 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 2.4 配置openfde的软件源地址{#config-source-address}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/kylin/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 5. 删除下载的密钥文件{#remove-keys}

```
rm -f packages.openfde.gpg
```

### 3. 安装OpenFDE{#installation}

#### 3.1 更新软件源{#apt-update}

```
sudo apt-get update
```

#### 3.2 下载并安装OpenFDE{#install-openfde}

```
sudo apt-get install openfde 
```

### 4. 升级OpenFDE{#update-openfde}

首先更新软件源.

```
sudo apt-get update
```

升级OpenFDE到最新版本

```
sudo apt-get install openfde
```

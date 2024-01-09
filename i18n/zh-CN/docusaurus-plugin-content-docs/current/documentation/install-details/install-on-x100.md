---
sidebar_position: 2
title: Phytium X100安装OpenFDE
---

# Phytium X100上安装OpenFDE

本手册分为[Kylin上安装OpenFDE](#install-on-kylin)和[Ubuntu上安装OpenFDE](#install-on-ubuntu)。

## 一、Kylin操作系统{#install-on-kylin}

### 1. 确认内核版本{#kernel-requirements}

- 如果内核版本低于5.4.18-85，请首先升级你的内核版本[升级内核版本](#upgrade-kernel)。

- 如果内核版本在5.4.18-85及其以上，请直接点击跳转到[安装fdeion-dkms](#install-fdeion-dkms)。

#### 升级内核版本{#upgrade-kernel}

- 更新源列表
  
```
echo deb http://archive.kylinos.cn/kylin/KYLIN-ALL 10.1-2303-updates main restricted universe multiverse | sudo tee /etc/apt/sources.list.d/v10sp12303.list
```

- 获取最新的软件包
  
```
sudo apt-get update -y
```

- 升级所有可升级的包
  
```
sudo apt-get full-upgrade -y
```

- 删除不必要的软件
  
```
sudo apt-get autoremove -y 
```

- 重启系统：<mark>请务必重启系统，待新内核生效以后再安装OpenFDE</mark>。

```
sudo apt-get autoclean -y && reboot
```

内核版本升级完成后，继续执行[安装fdeion-dkms](#install-fdeion-dkms)。

### 2. 安装fdeion-dkms{#install-fdeion-dkms}

如果之前已经安装过OpenFDE，在升级完内核版本后，需要先清理旧的fdeion-dkms。

```
sudo apt purge fdeion-dkms
```

如果没有安装过OpenFDE，则可以直接安装fdeion-dkms。

```
sudo apt install fdeion-dkms
```

### 3. 配置安装源和证书{#prerequisites}

首次安装OpenFDE时，需要获取完整的软件源，并配置安装源和证书。

 **注意**：<mark>如果不是首次安装OpenFDE</mark>，可以跳过“配置安装源和证书”所有环节, 直接进入[安装](#installation)。

#### 3.1 安装wget和gpg工具{#install-wget-gpg}

```
sudo apt-get install wget gpg
```

#### 3.2 从官网下载密钥文件并解密至本地{#download-keys}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 3.3 将解密后的密钥文件拷贝到本地apt工具的密钥文件夹下{#decrypted-keys}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 3.4 配置OpenFDE的软件源地址{#config-source-address}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/kylin/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 3.5 删除下载的密钥文件{#remove-keys}

```
rm -f packages.openfde.gpg
```

### 4. 安装OpenFDE{#installation}

#### 4.1 更新软件源{#apt-update}

```
sudo apt-get update
```

#### 4.2 下载并安装OpenFDE{#install-openfde}

```
sudo apt-get install openfde 
```

### 5. 升级OpenFDE{#update-openfde}

首先更新软件源.

```
sudo apt-get update
```

升级OpenFDE到最新版本

```
sudo apt-get install openfde
```

## 二、Ubuntu上安装OpenFDE{#install-on-ubuntu}

研究适配中，后期继续补充。
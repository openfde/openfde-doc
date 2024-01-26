---
sidebar_position: 2
title: Install OpenFDE on Phytium D2000/FT2000
---

# Install OpenFDE on Phytium D2000/FT2000

This guide includes two sections: [Installing OpenFDE on Kylin](#install-on-kylin) and [Installing OpenFDE on Ubuntu](#install-on-ubuntu).

## 1. Install OpenFDE on Kylin{#install-on-kylin}

### 1.1 System Requirements{#system-requirements-on-kylin}

First, confirm that your hardware is Phytium D2000/FT2000.

- Operating System: Galaxy Kylin V10 (SP1) versions 2203 and 2303, also supported on ARM64 architecture.
- Kernel: linux-5.4.18-53 and above.
- Graphics：AMD Radeon
- Storage：Minimum 8GB. Recommended 16GB or higher

### 1.2 Disable Security Control{#disable-security-control-on-kylin}

To ensure a smooth installation and startup of OpenFDE, before you begin installing OpenFDE, you need to disable all security controls on your current system. In your current system, go to Settings and navigate to Security. Enter the Security Center or Security Settings.

![control](./../img/control.png)

Using network control as an example, you should disable application internet access control. Additionally, it is recommended to disable controls related to application protection and device security.

![protect](./../img/protect.png)

### 1.3 Configure Installation Source And Certificates{#prerequisites-on-kylin}

When installing OpenFDE for the first time, you will need to obtain the complete software source and configure the installation source and certificates.

**Note**: <mark>If this is not your first time installing OpenFDE</mark>, you can skip the "Configure Installation Source and Certificates" section and proceed directly to the [installation steps](#install-on-kylin).

#### 1.3.1 Install wget and gpg{#install-wget-gpg-on-kylin}

```
sudo apt-get install wget gpg
```

#### 1.3.2 Download the encryption key file from the official website and decrypt it locally{#download-keys-on-kylin}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 1.3.3  Copy the decrypted key file to the key folder of your local apt tool{#decrypted-keys-on-kylin}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 1.3.4 Configure the software repository address for OpenFDE{#config-source-address-on-kylin}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/kylin/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 1.3.5 Delete the downloaded key file{#remove-keys-on-kylin}

```
rm -f packages.openfde.gpg
```

### 4. Install OpenFDE{#installation-on-kylin}

#### 4.1 Update Software Source{#apt-update-on-kylin}

```
sudo apt-get update
```

#### 4.2 Install OpenFDE{#apt-get-install-on-kylin}

```
sudo apt-get install openfde 
```

### 5. Upgrade OpenFDE{#update-on-kylin}

Firstly update the software source.

```
sudo apt-get update
```

Upgrade OpenFDE to the latest version.

```
sudo apt-get install openfde
```

## 2. Install OpenFDE on Ubuntu{#install-on-ubuntu}

### 2.1 System Requirements{#system-requirements-on-ubuntu}

- Operating System: Ubuntu Jammy 22.04.3(LTS), also supported on ARM64 architecture.
- Kernel Version: linux-6.2 (to be confirmed).
- Memory Requirement: Minimum 8GB, but it is recommended to have a larger amount if possible.

### 2.2 Configure Installation Source And Certificates{#prerequisites-on-ubuntu}

When installing OpenFDE for the first time, you will need to obtain the complete software source and configure the installation source and certificates.

**Note**: <mark>If this is not your first time installing OpenFDE</mark>, you can skip the "Configure Installation Source and Certificates" section and proceed directly to the [installation steps](#installation-on-ubuntu).

#### 2.2.1 Install wget and gpg{#install-wget-gpg-on-ubuntu}

```
sudo apt-get install wget gpg
```

#### 2.2.2 Download the encryption key file from the official website and decrypt it locally{#download-keys-on-ubuntu}

```
wget -qO-  http://openfde.com/keys/openfde.asc | gpg --dearmor > packages.openfde.gpg
```

#### 2.2.3  Copy the decrypted key file to the key folder of your local apt tool{#decrypted-keys-on-ubuntu}

```
sudo install -D -o root -g root -m 644 packages.openfde.gpg /etc/apt/keyrings/packages.openfde.gpg
```

#### 2.2.4 Configure the software repository address for OpenFDE{#config-source-address-on-ubuntu}
 
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ubuntu/ \
  "$(. /etc/os-release && echo "$PROJECT_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```

#### 2.2.5 Delete the downloaded key file{#remove-keys-on-ubuntu}

```
rm -f packages.openfde.gpg
```

### 3. Install OpenFDE{#installation-on-ubuntu}

#### 3.1 Update Software Source{#apt-update-on-ubuntu}

```
sudo apt-get update
```

#### 3.2 Install OpenFDE{#apt-get-install-on-ubuntu}

```
sudo apt-get install openfde 
```

### 4. Upgrade OpenFDE{#update-on-ubuntu}

Firstly update the software source.

```
sudo apt-get update
```

Upgrade OpenFDE to the latest version.

```
sudo apt-get install openfde
```
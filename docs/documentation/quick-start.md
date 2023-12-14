---
sidebar_position: 1
title: Quick Start
---

# Quick Start

OpenFDE(Open Fusion Desktop Environment) is a cool Linux open-source desktop environment. It allows you to run Android software on Linux systems and enjoy Linux applications on Android systems.

Now let me guide you on an easy and enjoyable exploration of OpenFDE! This guide will quickly introduce you to OpenFDE and help you experience its charm in both work and leisure. It's a simple and fun process! Are you ready?

<video width="720" height="405" controls>
    <source src="/img/install-guide.mp4" type="video/mp4" />
</video>

For more detailed information on installation and usage, you can continue reading the text version below.

## 1. Installation Preparation{#preparation-before-install}

Before starting the installation of OpenFDE, you need to check if your computer whether meets the following system requirements.

**Hardware:**
- Processor：Phytium D2000、FT2000/4
  
> **Attention:** Currently, we have conducted research, development, and adaptation for the two CPU models mentioned within the Phytium ecosystem. We also welcome everyone to conduct their own research and exploration, enabling OpenFDE to be compatible with a broader range of CPU types! You can proceed to [Build and Development](./../developer/Quick-Start) to start your exploration and research.

- Graphics Card：AMD Radeon、Phytium X100

> **Attention:** If your laptop with an x100 graphics card has **a kernel version lower than 5.4.18-85**, you need to upgrade your kernel before installing and running OpenFDE. Here are the steps to upgrade your kernel:

```
echo deb http://archive.kylinos.cn/kylin/KYLIN-ALL 10.1-2303-updates main restricted universe multiverse | sudo tee /etc/apt/sources.list.d/v10sp12303.list
sudo apt-get update -y
sudo apt-get full-upgrade -y
sudo apt-get autoremove -y 
sudo apt-get autoclean -y && reboot # 这里必须要重启系统，待新内核生效后再进行后续的操作
```

**If you already have OpenFDE installed on your X100 laptop**：After upgrading the kernel and before installing OpenFDE, it's recommended to perform the step ```sudo apt purge fdeion-dkms```

- RAM：At least 8GB. If you want to enjoy a smoother experience, I recommend choosing 16GB or more of RAM. 
  
**Software**:
- Operating System：Currently, we have researched and adapted OpenFDE for three operating systems: **Kylin, UOS, and Ubuntu**. However, other Linux operating systems have not been fully adapted and tested yet.

You can also try manually compiling and installing OpenFDE and see if it can be installed on other operating systems. If you have any better ideas, you can join the discussion [here](https://groups.io/g/openfde/topics) and share your feedback! We look forward to hearing from you!

## 2. Installation Steps{#installtion-steps}

Let's take the example of Kylin operating system. First, make sure you have opened the terminal of your current system. Execute the following command for a one-click installation:

```
sudo apt-get install curl 

curl -fsSL https://openfde.com/getopenfde/get-openfde.sh -o get-openfde.sh && sudo sh ./get-openfde.sh
```

During the installation process, you may be prompted to enter "y" to confirm certain actions. Simply follow the prompts and enter the requested input as necessary. If you want detailed installation instructions, please refer to the [installation guide](./installation-guide#preparation-before-install) provided by the OpenFDE project.

<!-- 
- 对于ubuntu系统
```
sudo echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/packages.openfde.gpg] http://openfde.com/repos/ubuntu/ \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" main" | \
  sudo tee /etc/apt/sources.list.d/openfde.list > /dev/null
```
-->

## 3. Get Started{#happy-use}

### 3.1 Disable Security Controls{#close-security-control}

To ensure a smoother experience while using OpenFDE, it is recommended to disable the security controls on your current system before entering OpenFDE. In the case of Kylin system, you can follow these steps:

- Select "Settings" from the menu.
- Go to "Security" to access the Security Center.
  
![control](./img/control.png)

Using network control as an example, you should disable application internet access control. Additionally, it is recommended to disable controls related to application protection and device security.

![protect](./img/protect.png)

### 3.2 Login and Logout{#login-and-logout}

#### 3.2.1 Login{#login}

- Accessing the Login Page: After completing the initial installation of OpenFDE, follow these steps to reach the login page:
  - Log out of your current system.
  - Return to the login screen.
  - Select the OpenFDE option: enter your username and password in the designated fields.
  
![login](./img/login.jpg)

- Switching to OpenFDE Login System: On the login screen, locate the "OpenFDE" option. You will be prompted to enter your account credentials. And the system will switch to the OpenFDE desktop environment. 
- The account and password for OpenFDE are the same as your current system's account and password.

![start](./img/start.jpg)

#### 3.2.2 Logout{#logout}

Clicking on the Start menu, then clicking on the power button icon in the top right corner will bring up three buttons in sequence: Shutdown, Restart, and Logout. Clicking on the Logout button will allow you to exit to the login screen.

![logout](./img/logout.png)

### 3.3 Configure Input Method{#config-ime}

OpenFDE comes with the default input method of 'iFlytek Voice Input Method'. To quickly open the iFlytek Voice Input Method, locate it in the Start menu. Selecting the iFlytek Voice Input Method option allows you to enable it and agree to the summary of privacy terms. You can configure input methods, keyboard layouts, and skin fonts according to your preferences.

### 3.4 Configure Network{#config-network}

OpenFDE can directly utilize external systems such as Kylin, UOS, Ubuntu for networking. Users can click on the OpenFDE icon in the bottom left corner and open Start Menu, Fusion Linux Application to find the Linux Settings. In the Linux Settings, you can configure the network settings for the system.

![net-start](./img/net-start.png) 

#### 3.4.1 Wired Network Configuration{#config-wired-network}

In the wired network settings, click on Advanced Settings. A pop-up window titled "Ethernet Settings" will appear on the right side.

- Add a New Wired Network: To add a new wired network connection, click on the "+" button located in the bottom left corner.
- Configure an Existing Wired Network: select the desired wired network connection, then click on the Settings button located in the bottom left corner. This will open a window where you can modify the configuration of the current network connection.

![ipv4](./img/net-set1.jpg)

#### 3.4.2 Wireless Network Configuration{#config-wlan}

In the wireless network settings, click on Advanced Settings. A pop-up window titled "Wireless LAN Settings" will appear on the right side.

- Add a New Wireless Network: To add a new wireless network connection, click on the "+" button located in the bottom left corner.
- Configure an Existing Wireless Network: select the desired wireless network connection, then click on the Settings button located in the bottom left corner. This will open a window where you can modify the configuration of the current network connection.

![wlan](./img/wlan.jpg)

#### 4.3 VPN Configuration{#config-vpn}

&emsp;&emsp;OpenFDE支持安卓系统和Linux系统VPN互通，也是需要远程办公的办公族一大福利。我们以常见的VPN软件EasyConnect为例，你可以在安卓系统下的应用宝或者浏览器直接下载安卓版的EasyConnect。安装成功后，配置连接上你的办公VPN，重点是在Linux端无需再配置VPN啦，即刻开启你的远程办公啦。

### 3.5 安装应用{#install-app}

#### 5.1 安装安卓应用{#install-android-app}

安装安卓应用有两种方式：

- 方式一：OpenFDE内置via浏览器，在“开始菜单”中打开via浏览器，可以直接在浏览器搜索想要安装的应用软件包。
- 方式二：使用方式一安装安卓应用市场如"应用宝"，再从应用宝中安装各种安卓应用。

#### 5.2 安装linux应用{#install-linux-app}

&emsp;&emsp;OpenFDE融合Linux应用到安卓系统中，内置独立的Linux融合应用窗口。在开始菜单点开企鹅图标"Fusion Linux Application"，就可以打开Linux融合应用窗口。Linux融合应用窗口和正常的Linux图形系统使用方式是一样的，可以直接运行Linux GUI、命令行等，这里不再赘述。

### 3.6 操作技巧{#use-skills}

&emsp;&emsp;和一般pc桌面的键鼠操作方式不同，OpenFDE有自己的特别之处，这里给大家列一些基本的操作tips，**很重要！**

#### 单击打开应用{#open-app}

- 安装好的应用通常会在桌面显示应用图标，你只需要在桌面**单击应用图标**，就可以快速打开应用啦。
- 你也可以在开始菜单的应用列表里找到目标应用，同样只需要**单击**就可以打开应用。

#### 右键开启应用快捷菜单{#right-click}

- 在桌面上鼠标放置在目标应用图标上，右键，会显示"打开"和"移除"。
  - 点击打开，即可快速打开应用。
  - 点击移除，就会将该应用的快捷方式在桌面上移除。
- 你也可以在开始菜单的应用列表里，将鼠标放置在目标应用图标上，右键，会显示"打开"、"快捷方式","卸载"。
  - 点击打开，即可快速打开应用。
  - 点击快捷方式，即可将应用图标添加快捷方式到桌面。
  - 点击卸载，即可直接卸载应用。

#### 图标拖动{#drag-icon}

&emsp;&emsp;如果你想拖动桌面的应用图标或者小组件，首先你需要用鼠标放在目标应用或组件上，然后**长按**，再开始拖动图标到你想去的位置。

## 四、更多了解{#know-more}

你可以继续使用OpenFDE来帮助你办公和娱乐啦！更多详细的使用指导参见[用户手册](./user-manual)。
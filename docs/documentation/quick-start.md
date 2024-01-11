---
sidebar_position: 1
title: Quick Start
---

# Quick Start

OpenFDE is a Linux desktop environment built on AOSP (Android Open Source Project), Waydroid, and LineageOS. It supports the installation on different hardware platforms, allowing you to run Android applications on Linux systems and vice versa. With OpenFDE, you can enjoy Android apps on Linux and also run Linux applications on Android systems.

<video width="720" height="405" controls>
    <source src="/img/install-guide.mp4" type="video/mp4" />
</video>

## 1. System Requirements{#system-requirements}

We have researched and adapted OpenFDE to support installation on various hardware platforms and operating systems. Currently, we have identified the following hardware platforms and operating systems. Please ensure that your device meets one of the following requirements.

<table style={{textAlign: 'center'}}> 
  <tr>
    <th>Hardware</th>
    <th>Graphics</th>
    <th>Operating System</th>
    <th>Kernel</th>
    <th>Storage</th>
  </tr>
  <tr>
    <td rowspan="2">Phytium D2000、FT2000/4</td>
    <td rowspan="2">AMD Radeon</td>
    <td>Galaxy Kylin v10 SP1 2203/2303(ARM64)</td>
    <td>linux-5.4.18-53 and above</td>
    <td>Minimum 8GB. Recommended 16GB or higher</td>
  </tr>
  <tr>
    <td>Ubuntu(ARM64)</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <td rowspan="2">Phytium X100 Notebook</td>
    <td rowspan="2">Phytium X100</td>
    <td>Galaxy Kylin v10 SP1 2303(ARM64)</td>
    <td>linux-5.4.18-85 and above</td>
    <td>Minimum 8GB. Recommended 16GB or higher</td>
  </tr>
  <tr>
    <td>Ubuntu(ARM64)</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <td>Rapberry Pi</td>
    <td>/</td>
    <td>Ubuntu(ARM64)</td>
    <td>/</td>
    <td>/</td>
  </tr>
</table>

If your device meets the above requirements, you can proceed with the following steps for a quick installation.

## 2. Disable Security Controls{#close-security-control}

To ensure a smooth installation and startup of OpenFDE, before you begin installing OpenFDE, you need to disable all security controls on your current system. In your current system, go to Settings and navigate to Security. Enter the Security Center or Security Settings.

![control](./img/control.png)

Using network control as an example, you should disable application internet access control. Additionally, it is recommended to disable controls related to application protection and device security.

![protect](./img/protect.png)

## 3. Quick Installation Steps{#installtion-steps}

We provide a script for one-click installation of OpenFDE. You can open a new terminal interface and follow the steps below to fetch the script from a remote server and execute it for quick installation of OpenFDE.

#### Step1. install curl{#install-curl}

```
sudo apt-get install curl
```

#### Step2. download the script to your local{#get-script}

```
curl -fsSL https://openfde.com/getopenfde/get-openfde.sh -o get-openfde.sh 
```

#### Step3. execute the script file{#execute-script}

```
sudo sh ./get-openfde.sh
```

> During the installation process, you may be prompted to enter "y" to confirm certain actions. Simply follow the prompts and enter the requested input as necessary.

For more detailed instructions, please refer to the [Quick Start Guide](./install-details/installation-guide) for step-by-step guidance！

## 4. Get Started{#happy-use}

### 4.1 Login and Logout{#login-and-logout}

#### 4.1.1 Login{#login}

- Accessing the Login Page: After completing the initial installation of OpenFDE, follow these steps to reach the login page:
  - Log out of your current system.
  - Return to the login screen.
  - Select the OpenFDE option: enter your username and password in the designated fields.
  
![login](./img/login.jpg)

- Switching to OpenFDE Login System: On the login screen, locate the "OpenFDE" option. You will be prompted to enter your account credentials. And the system will switch to the OpenFDE desktop environment. 
- The account and password for OpenFDE are the same as your current system's account and password.

![start](./img/start.jpg)

#### 4.1.2 Logout{#logout}

Clicking on the Start menu, then clicking on the power button icon in the top right corner will bring up three buttons in sequence: Shutdown, Restart, and Logout. Clicking on the Logout button will allow you to exit to the login screen.

![logout](./img/logout.png)

### 4.2 Configure Input Method{#config-ime}

OpenFDE comes with the default input method of 'iFlytek Voice Input Method'. To quickly open the iFlytek Voice Input Method, locate it in the Start menu. Selecting the iFlytek Voice Input Method option allows you to enable it and agree to the summary of privacy terms. You can configure input methods, keyboard layouts, and skin fonts according to your preferences.

<mark>A tip: If you encounter a problem similar to the input box in the figure below that covers the text content in the process of using the iFlytek Voice Input Method, you can hover the mouse over the input method prompt word box, and then press and hold the left and right mouse buttons at the same time, so that you can drag the input method prompt word box to other positions.</mark>

![ime-tips](./img/ime-tips.jpg)

### 4.3 Configure Network{#config-network}

OpenFDE can directly utilize external systems such as Kylin, UOS, Ubuntu for networking. Users can click on the OpenFDE icon in the bottom left corner and open Start Menu, Fusion Linux Application to find the Linux Settings. In the Linux Settings, you can configure the network settings for the system.

![net-start](./img/net-start.png) 

#### 4.3.1 Wired Network Configuration{#config-wired-network}

In the wired network settings, click on Advanced Settings. A pop-up window titled "Ethernet Settings" will appear on the right side.

- Add a New Wired Network: To add a new wired network connection, click on the "+" button located in the bottom left corner.
- Configure an Existing Wired Network: select the desired wired network connection, then click on the Settings button located in the bottom left corner. This will open a window where you can modify the configuration of the current network connection.

![ipv4](./img/net-set1.jpg)

#### 4.3.2 Wireless Network Configuration{#config-wlan}

In the wireless network settings, click on Advanced Settings. A pop-up window titled "Wireless LAN Settings" will appear on the right side.

- Add a New Wireless Network: To add a new wireless network connection, click on the "+" button located in the bottom left corner.
- Configure an Existing Wireless Network: select the desired wireless network connection, then click on the Settings button located in the bottom left corner. This will open a window where you can modify the configuration of the current network connection.

![wlan](./img/wlan.jpg)

#### 4.3.3 VPN Configuration{#config-vpn}

OpenFDE supports interoperability between Android and Linux systems for VPN connectivity, which is a major benefit for remote workers. Taking the popular VPN software EasyConnect as an example, you can directly download the Android version of EasyConnect from the app store or a browser on your Android device.

Once installed, configure the connection to your work VPN. The key point is that there is no need to configure the VPN on the Linux side. You can immediately start your remote work.

### 4.4 Install Application{#install-app}

#### 4.4.1 Install Android Application{#install-android-app}

There are two ways to install Android applications:

- OpenFDE comes with the built-in Via browser. To open Via browser, locate it in the Start Menu and launch it. You can directly search for the application package you want to install using the browser.

- Using the built-in Via browser, you can install Android app marketplaces like "AppGallery" and then proceed to install various Android applications from within the app marketplace.

#### 4.4.2 Install Linux Application{#install-linux-app}

OpenFDE integrates Linux applications into the Android system and provides a built-in standalone Linux Fusion Application window. To open the Linux Fusion Application window, click on the penguin icon labeled "Fusion Linux Application" in the Start Menu. The Linux Fusion Application window operates similarly to a regular Linux graphical system, allowing you to run Linux GUI, command-line interfaces, and more. The usage is identical to a typical Linux environment, and further elaboration is unnecessary.

### 4.5 Operational Tips{#use-skills}

Different from the typical PC desktop's keyboard and mouse operation, OpenFDE has its own unique features. Here are some basic operation tips.

#### Open Application by Single Click{#open-app}

- Installed applications are typically displayed on the desktop with their respective app icons. To quickly open an application, you simply need to **single-click the app icon** on the desktop.
- You can also find the desired application in the application list within the Start Menu. Similarly, you only need to **single-click** to open the application.

#### Open Application Shortcut by Right-Clicking{#right-click}

- When you place your mouse cursor over the target application icon on the desktop, right-clicking will display options such as "Open" and "Remove."
  - Clicking on "Open" will quickly launch the application.
  - Clicking on "Remove" will remove the shortcut of the application from the desktop.
- You can also place your mouse cursor over the target application icon in the application list within the Start Menu. Right-clicking will display options such as "Open," "Pin to Start," and "Uninstall."
  - Clicking on "Open" will quickly launch the application.
  - Clicking on "Pin to Start" will add a shortcut of the application to the Start Menu.
  - Clicking on "Uninstall" will directly uninstall the application.

#### Drag and Drop Icons{#drag-icon}

If you want to drag the desktop application icons or widgets, first, you need to place your mouse cursor over the target application or widget, then **long-press** it, and finally, start dragging the icon to the desired location.

## 5. Learn More{#learn-more}

You can continue using OpenFDE to assist you with work and entertainment! For more detailed usage instructions, please refer to the [User Manual](./user-manual)。

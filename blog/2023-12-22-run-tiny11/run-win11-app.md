---
slug: run-win11
title: OpenFDE玩转win11应用
description: 介绍如何在OpenFDE用上win11应用
date: 2024-01-24T14:00
author: zhaolixia
---

本博客介绍如何在OpenFDE使用win11应用，主要在OpenFDE安装phyvirt-fde，导入已有win11镜像qcow2创建虚拟机，下载win11应用包并安装使用
<!--truncate-->

### 软硬件资源{#resource}

* 内存>8G,硬盘>60G
* Kylin V10 SP1
* phyvirt-fde：
  * 目前版本仅支持Phytium CPU part为0x662和0x663的机器，可使用命令“cat /proc/cpuinfo”查看是否匹配
* win11虚拟机qcow2：tiny11-vm-vapp.qcow2（7.2GB）
  * 使用tiny11制作，它是一款对win11进行极致精简的定制系统,它的特点是在资源受限的情况下，用户依然能够获得流畅的使用体验
  * 该镜像用户名与密码都是pvuser,成功创建虚拟机后可自行修改
  * 文件存放于夸克网盘，下载链接：https://pan.quark.cn/s/d3b9e4cba2b4

### 安装前提{#prerequisites}

OpenFDE已安装完毕并登录OpenFDE桌面

### 搭建步骤{#steps}

1. 在OpenFDE中点击"开始菜单->Fusion Linux Application",找到linux的终端应用Konsole，输入以下命令安装phyvirt-fde
  ```
  sudo apt update
  sudo apt install phyvirt-fde -y
  ```

  ![Alt text](./img/image-7-1.png)

  ![Alt text](./img/image-14-1.png)

2. 在"开始菜单->Fusion Linux Application"中打开vapp-demo
   
  ![image](./img/image-7-1.png)

  ![](./img/IMG_20240102_100654.jpg)
   
3. 点击“基于已有镜像创建”，找到已有的win11虚拟机qcow2文件(tiny11-vm-vapp.qcow2)打开
   
  ![image](./img/image-4.png)

  ![](img/IMG_20240102_101913.jpg)

4. 输入虚拟机名，操作系统类型、CPU数量、内存大小等信息，点击右下角确认创建虚拟机后直接关闭vapp-demo
   
  ![image](./img/image-6.png)


5. 在OpenFDE桌面，点击"开始菜单->phyvirt"打开,可见有新建的虚拟机tiny11

  ![image](img/image-9-1.png)

  ![image](./img/image-9-1-1.png)

6. phyvirt上启动虚拟机

  ![image](img/image-13-1.png)

7. 待右下角状态为“就绪”，可点击“RDP”进入虚拟机
  
  ![image](img/image-12-1.png)


8. 将窗口全屏就可以正常使用了
  
    
  ![image](./img/image-26.png)

### 安装应用{#install-applications}
* 方法一
  镜像自带有浏览器Edge,可用此下载软件包安装使用

  ![image](./img/Screenshot_20231214-135649_aFreeRDP.png)

  ![image](./img/Screenshot_20231214-140355_aFreeRDP.png)

* 方法二
  phyvirt中默认的共享目录路径为“~/桌面/share",可将安装包放入其中，在虚拟机中点击安装
  ```
  cp ~/下载/exe/ ~/桌面/share/ -r
  ```
  
  ![Alt text](img/Screenshot_20240102-113151_PhyVirt.png)

  ![Alt text](img/Screenshot_20240102-133944_PhyVirt.png)

  ![Alt text](img/Screenshot_20240102-154048_PhyVirt.png)

### 应用展示{#application-use}
* Xmind
  
  ![Alt text](img/Screenshot_20240102-174640_PhyVirt.png)

* Xshell

  ![Alt text](img/Screenshot_20240102-180025_PhyVirt.png)

* QQ游戏
  
  ![Alt text](img/Screenshot_20240104-134435_PhyVirt.png)

  ![Alt text](img/Screenshot_20240104-134529_PhyVirt.png)

### 致谢{#thanks}
感谢飞腾公司小伙伴基于phyvirt基础上，为OpenFDE提供了phyvirt-fde
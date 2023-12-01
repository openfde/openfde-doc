---
sidebar_position: 4
---

# 探秘OpenFDE文件系统

## 写在前面

&emsp;&emsp;如果你对OpenFDE已经有一定的了解，你大概已经知道在OpenFDE里可以运行安卓系统，也可以运行Linux应用，OpenFDE的特色功能就是文件系统融合。你肯定会好奇OpenFDE的文件到底应该放在哪一端？应用数据和文件到底如何组织呢？

&emsp;&emsp;下面，我们来详细聊聊OpenFDE的文件系统。

### 总的原则

&emsp;&emsp;OpenFDE将Linux文件系统和Android的文件系统进行融合，两者之间文件系统可以互相访问。

### Android文件管理

&emsp;&emsp;在OpenFDE开始菜单打开"文件"，可以直观地看到文件管理界面，点开最大化按钮，以方便你可以更轻松地浏览和操作文件。

![android_file_sys](./../img/android_file_sys.jpg)

&emsp;&emsp;安卓文件管理器以图标和网格视图来展示文件和文件夹，你也可以选择切换成列表视图。文件管理界面左侧的包含一系列子文件夹：图片、视频、音频、文档和下载。在OpenFDE中下载的数据、图片、视频都会保存在对应的文件夹中。

![file_list](./../img/list-file.jpg)

### 挂载Linux卷

&emsp;&emsp;在文件管理界面左侧目录树中可以看到"Linux Volume"，Linux Volume可以看到Linux文件系统的分区。

&emsp;&emsp;OpenFDE将**Linux文件系统按卷挂载到Android文件系统**，Linux卷以文件夹的形式显示在"Linux Volume"界面下，其中文件夹的名字为当前卷的uuid。在下图示例中，Linux文件系统只有一个区，所以可以看到的只有一个文件夹。

![linux-sys](./../img/Linux-Volume.png)

&emsp;&emsp;点击目标卷，即可进入Liux的文件系统，可以看到Linux文件系统常见的一些文件目录。

![fenqu](./../img/fenqu-linux.png)

### 文件的拷贝和粘贴

### 文件和文件夹操作

### 文件共享和传输

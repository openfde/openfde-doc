---
sidebar_position: 4
title: Run OpenFDE
---

# Run OpenFDE

## 1. Cropping And Installing Android Images"

## 1.1 Cropping Android Images

- Install openssh-server

```
sudo apt install openssh-server && sudo systemctl start ssh && sudo systemctl enable ssh
```

In the final step of [copying the android images to the target device](./quick-start#copy-img) as mentiond in the AOSP source code compilation guide, the system.img and vendor.img are located in the `/home` directory of your linux environment.

- Access the `/home` in linux and get the source code of `make_deb`

```
cd ~ && git clone https://gitee.com/openfde/make_deb.git 
```

- Copy the images to `make_deb/`
  
``` 
sudo cp system.img vendor.img make_deb/
```

- Packing and cropping the images

```
./packapk.sh
```

The `packapk.sh` script will package the APK and perform image cropping. During the packaging process, it will also include the Xunfei Input Method and Via Browser.

## 1.2 Install Android Images

- create the `images` directory

```
sudo mkdir -p /usr/share/waydroid-extra/images
```

- Copy the two image files to the `images` directory for installation.

```
sudo cp -a systemimg /usr/share/waydroid-extra/images/system.img
```

```
sudo cp -a vendorimg /usr/share/waydroid-extra/images/vendor.img
```

- Init waydroid

```
sudo waydroid init -f 
```

## 2. Run OpenFDE

At this point, you can start OpenFDE. Logout from your current user session and navigate to the login screen. In the bottom right corner, select "FDE" and enter your password to log in to OpenFDE.
---
sidebar-position: 2
---

# 上传日志

如果你的环境无法运行OpenFDE, 可以尝试执行下面的脚本。我们将为你收集诊断日志，以便工程师们可以更好地为你解决问题。

```
curl -fsSL https://openfde.com/debug.sh | sudo bash 
```

上述命令会将收集的日志上传到OpenFDE的远程服务器，其中收集的日志信息仅包括：检测您的环境是否安装了OpenFDE、您的系统环境信息如GPU厂家、OpenFDE运行的日志、内核日志、fdeion驱动是否安装。

在收集日志的过程中我们不会收集任何用户的私有文件，也不会做任何安全破坏操作，您可以在您环境的/tmp目录下查看我们搜集的内容有哪些。如果您介意被收集上述日志信息，也可以直接将问题反馈到[issue](https://gitee.com/openfde/openfde/issues)。

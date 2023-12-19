---
sidebar-position: 2
---

# Upload logs

If your environment is unable to run OpenFDE, you can try executing the script below. We will collect diagnostic logs for you so that our engineers can better assist you in resolving the issue.

```
curl -fsSL https://openfde.com/debug.sh | sudo bash 
```

The above command will upload the collected logs to the remote server of OpenFDE. The collected log information includes: checking if OpenFDE is installed in your environment, system environment details such as GPU manufacturer, OpenFDE runtime logs, kernel logs, and the installation status of the fdeion driver.

During the log collection process, we will not collect any private user files or perform any security-compromising operations. You can review the collected content in the /tmp directory of your environment to see what information we have gathered. If you have concerns about the collection of the aforementioned log information, you can directly provide feedback on the [issue](https://gitee.com/openfde/openfde/issues).

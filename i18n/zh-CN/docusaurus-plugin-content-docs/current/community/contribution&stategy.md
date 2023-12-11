---
sidebar_position: 1
title: Contribution and Stategy
---

# 贡献和攻略{#contribution-and-stategy}

欢迎来到OpenFDE社区！

## 1. 体验OpenFDE{#try-openfde}

可以前往[OpenFDE官网](https://openfde.com)下载OpenFDE, 想要快速了解OpenFDE请前往[快速入门](./../documentation/quick-start)

## 2. 签署CLA{#sign-cla}

在参与社区贡献前，您需要签署OpenFDE社区贡献者许可协议（CLA）。根据您的参与身份，选择签署个人CLA、员工CLA或者企业CLA，请点击[这里](https://gitee.com/organizations/openfde/cla/open-fde-contributor-agreement)前往签署。

<!--
这里需要跳转到签署CLA的协议
- 个人CLA: 如果您是个人身份，请签署个人CLA
- 企业CLA: 以企业身份参加社区，请签署企业CLA
- 员工CLA：以企业员工的身份参加社区，请签署员工CLA
-->

## 3. 参与OpenFDE社区{#join-in-openfde}

### 3.1 参与社区活动{#join-in-activity}

更多社区活动正在筹备中.....敬请期待！！

<!-- 
您可以了解并参与丰富多彩的社区活动：
- 技术沙龙： 查看官网首页SIG的技术沙龙活动安排，可参与你感兴趣的沙龙活动
- 直播
- 峰会

### 3.2 找到你想参与的SIG

SIG，全称为Special Interest Group, OpenFDE社区按照不同的SIG来组织，以便于更好的管理和改善工作流程。

- SIG组是开放的，欢迎任何人加入并参与贡献。
- SIG都是针对特定的一个或多个技术主题而成立的。SIG内的成员推动交付成果输出，并争取让成果成为OpenFDE社区发行的一部分。
- SIG的核心成员主导SIG的治理。请查看[SIG的角色说明](./community-membership)
- 每一个SIG在Gitee上都会拥有一个或多个项目，这些项目拥有一个或多个Repository。SIG的交付成果会保存在这些Repository内。
- 可以在SIG对应的Repository内提交Issue、针对特定问题参与讨论，提交和解决问题，参与评审。
- 您也可以通过邮件列表、视频会议和SIG内的成员进行交流。

#### 3.2.1 了解SIG并找到您感兴趣的SIG

找到您感兴趣的SIG组，可以帮助您在正确的地方提出问题，并得到更快的社区相应。

**方式一**: 首先，查看[SIG列表](./SIG/sig-list)，它包含当前OpenFDE社区成立的所有SIG团队的清单。您可以通过该列表快速地定位到您感兴趣的领域所对应的SIG团队。同时还为您提供该SIG团队的如下信息：
- SIG下的项目以及Repository地址
- SIG内的交流方式，包括邮件列表。
- Maintainer的联系方式

**另一种方式**: 如果您知道感兴趣的项目名称，可以在OpenFDE的Repository列表下进行模糊搜索，从而快速定位到对应项目的首页地址。通常情况下，在该项目首页地址的README.md中，可以找到该项目所属的SIG信息、交流方式、成员和联系方式等。


如果上述方式定位不到您感兴趣的SIG，您可以发邮件求助【这里邮箱待定】。建议您在邮件列表内用"【开发过程疑问】"作为标题，在内容中写出你寻找的SIG或项目的特征，我们会为您提供帮助。

#### 3.2.2 成立新的SIG

如果在已有的SIG组列表里面没有找到您感兴趣的SIG，而您对某个方向有浓厚的兴趣，希望在OpenFDE社区成立一个新的相关SIG进行维护和发展，那您可以参考[申请新SIG流程指南](./SIG/apply-sig-guide)来申请创建新的SIG。

-->

### 3.2 参与社区贡献{#join-in-contribution}

#### 3.2.1 提交issue/处理issue任务{#commit-issues}

您可以点击[问题反馈](https://gitee.com/openfde/problem-feedback/issues),进入OpenFDE的问题反馈仓库。

- **提交issue**：点击"新建Issue"按钮，就可以新建Issue，记录你想提出的问题。
- **处理issue**：如果您愿意处理其中的一个issue，可以将issue分配给自己，将自己设置为负责人。
- **参与issue内的讨论**：每个issue下面可能已经有参与者们的讨论和交流，如果您感兴趣，也可以在评论框中发表自己的意见。

#### 3.2.2 贡献编码{#commit-codes}

- **准备OpenFDE的开发环境**
 
   如果您想参与编码贡献，需要准备OpenFDE的开发环境，请参考[开发环境准备](./contributor/dev-environment)

<!-- 
- 了解SIG和项目内的开发注意事项

  每个SIG内的项目使用的编码语言、开发环境、编码约定等可能存在差异。如果您想了解并参与到编码类贡献，可以先找到该项目给开发者提供的贡献者指南--这个指南一般是在该SIG的首页地址内，以CONTRIBUTING.md文件的形式提供，或者直接在该项目的README.md内。
-->

- **下载代码和拉取分支**
 
  如果想要参与代码贡献，您还需要了解如何在Gitee下载代码、通过PR合并代码等。OpenFDE使用的是Gitee代码托管平台，想了解具体的指导，请参考[Gitee Workflow Guide](https://gitee.com/openeuler/community/blob/master/zh/contributors/Gitee-workflow.md).该托管平台的使用方式和GitHub类似，如果您以前使用过GitHub，本节的内容您可以大致了解甚至跳过。

- **修改、构建和本地验证**

  在本地分支上完成修改后，进行构建和本地验证，请参考[构建软件包](./contributor/build-software-packages)

- **提交一个Pull-Request**

  当你提交一个PR的时候，就意味着您已经开始给社区贡献代码了。请参考[OpenFDE社区PR提交指导](./contributor/commit-pr)

#### 3.2.3 贡献软件包{#commit-packages}

如果您发现OpenFDE缺失了一个软件包，可以帮OpenFDE把这个软件包补上。实际上贡献软件包的过程就是版主OpenFDE提供更丰富功能的过程。

OpenFDE支持在Gitee新增软件包的同时自动在obs的OpenFDE:Factory上创建同名仓库，这样在向已创建的Gitee仓库提交代码时，会自动对代码编译进行检测。具体流程可参考[如何新增软件包](./contributor/add-software-packages)

#### 3.2.4 贡献原创开源项目{#commit-projects}

如果你想将自己原创的开源项目贡献到OpenFDE社区，成为OpenFDE发行版本的一份子，那么可参考以下几种方式：

- **方式一**: 在其他社区开发，集成到OpenFDE中。只需要按照[如何新增软件包](./contributor/add-software-packages),将软件加入到OpenFDE的repo仓即可。

- **方式二**: 在OpenFDE社区中开发，【方式待定】

#### 3.2.5 检视代码{#review-codes}

OpenFDE是一个开放的社区，我们希望所有参与社区的人都能成为活跃的检视者。

对于**贡献者**，为了使您的代码更容易被接受，您需要：<!-- 遵守SIG组的编码约定 -->
- 准备完善的提交信息
- 如果一次提交的代码量较大，建议将大型的内容分解为一系列逻辑上较小的内容，分别进行提交会更便于检视者理解您的逻辑
 <!--使用适当的SIG组和检视者标签去标记PR:社区机器人会给您发送消息，以方便您更好地完成整个PR的过程。-->

对于**检视者**，强烈建议本着[行为准则](./behavior-rules)，超越自我，相互尊重和促进协作。检视的重点可以参考[补丁审核的柔和艺术](https://sage.thesharps.us/2014/09/01/the-gentle-art-of-patch-review/)。检视的时候，可以重点关注包括：

1. 贡献背后的想法是否合理
2. 贡献的架构是否正确
3. 贡献是否完善

<!-- 注意：如果您的PR请求没有引起足够的关注，同样可以在SIG的邮件列表求助。-->

#### 3.2.6 测试{#test}

测试是所有贡献者的责任，详细攻略请参考[社区开发者测试贡献指南](./contributor/test-contribution-guides)

#### 3.2.7 文档贡献{#doc-contribution}

你可以向本社区贡献你的技术文章，前往OpenFDE的[博客入门指导](https://gitee.com/openfde/openfde-doc/blob/master/blog-guide.md)获取帮助。

#### 3.2.8 选择社区组件打包{#patch}

您也可以参与社区组件打包，请参考[如何打包](./contributor/patch-guides)

#### 3.2.9 社区安全问题披露{#find-security-risks}

- [安全处理流程](./security/security-process-rules)--简要描述了处理安全问题的过程。
- [安全披露信息](./security/report-security-risks)--如果您想要安全报告漏洞，请参考此页面。

<!-- 
## 4. 和社区一起成长

### 4.1 社区角色说明

社区不同角色对应不同的责任与权利，每种角色都是社区不可或缺的一部分，您可以通过积极贡献不断积累经验和影响力，并获得角色上的成长。更详细的角色说明与责任权利描述请查看[角色说明](./community-membership).

### 4.2 技术委员会

OpenFDE技术委员会(Technical Committee, 简称TC)是OpenFDE社区的技术决策机构，负责社区技术决策和技术资源的协调。详细请查看[OpenFDE技术委员会介绍]

-->



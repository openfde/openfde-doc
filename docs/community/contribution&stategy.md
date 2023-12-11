---
sidebar_position: 1
title: Contribution and Stategy
---

# Contributions and Strategies{#contribution-and-stategy}

Welcome tot OpenFDE Community！

## 1. Explore OpenFDE{#try-openfde}

To quickly learn about [OpenFDE](https://openfde.com), please click [here](./../documentation/quick-start).

## 2. Sign in CLA{#sign-cla}

Before participating in community contributions, you are required to sign the OpenFDE Contributor License Agreement (CLA). Depending on your role, you can choose to sign the Individual CLA, Employee CLA, or Corporate CLA. Please click in [here](https://gitee.com/organizations/openfde/cla/open-fde-contributor-agreement).

## 3. Join in OpenFDE Community{#join-in-openfde}

### 3.1 Participate in Community Activites{#join-in-activity}

More community activities are being prepared... Stay tuned for updates!

### 3.2 Participating in Community Contributions{#join-in-contribution}

#### 3.2.1 submit an issue/process an issue task{#commit-issues}

Your can clear [Feedback on Issues](https://gitee.com/openfde/problem-feedback/issues) to access the issue feedback repository for OpenFDE.

- **submit an issue**：Clicking on the "New issue" button allows you to create an issue and document the problem you want to raise.
- **process an issue**：If you are willing to handle one of the issues, you can assign the issue to yourself and set yourself as the assignee.
- **participate in discussions within an issue**：Under each issue, there may already be discussions and exchanges among participants. If you are interested, you can also share your opinions in the comment box.

#### 3.2.2 contribute codes{#commit-codes}

- **Set up the development environment for OpenFDE**
 
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



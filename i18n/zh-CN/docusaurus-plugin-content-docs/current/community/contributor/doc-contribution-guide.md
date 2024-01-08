---
sidebar_position: 8
title: 文档贡献指南
---

# 文档贡献指南{#doc-contribution-guide}

&emsp;&emsp;OpenFDE社区的文档由[openfde-doc](https://gitee.com/openfde/openfde-doc)仓库管理, 为用户提供OpenFDE丰富的文档资料，社区用户也可以自行编辑和贡献自己的技术文章和博客。OpenFDE社区文档资料包括文档和博客两种类型，并且支持国际化，其中默认语言为English。

- 文档目录为`docs/`，对应的中文目录为`i18n/zh-CN/docusaurus-plugin-content-docs`
- 博客目录为`blog/`, 对应的中文目录为`i18n/zh-CN/docusaurus-plugin-content-blog`

如果你想为OpenFDE社区贡献自己的特性文档或技术博客，可以参考markdown格式编辑你的文档内容。

### 上传文档源文件{#upload-original-document}

首先需要确认你上传的文档所属的类别，openfde-doc文档类别主要包括：

- 用户指南：如果你的文档主要为用户提供相关帮助和指导，请将你的文档上传到`docs/documentation`
- 开发者指南: 如果你的文档主要为开发者提供相关帮助和指导，请将你的文档上传到`docs/developer`
- 社区指南：如果你的文档与社区相关，请将你的文档上传到`docs/commnuity`
- 常见问题: 如果你的文档记录了在使用OpenFDE过程中遇到的通用问题和解决方法，请将你的文档上传到`docs/faq`
- 版本更新：如果你的文档涉及到OpenFDE版本更新的说明或其他指导内容，请将你的文档上传`docs/version`

### 上传博客源文件{#upload-source-for-blog}

&emsp;&emsp;如果你上传的源文件为博客类型的技术文章，请将你的文件上传到`blog/`目录下，其中文件夹和文件命名以及博客内容的格式请参考[博客编写规范](https://docs.openfde.com/zh-CN/blog/writing-standards)。

### 国际化{#internationalization}

&emsp;&emsp;在上传markdown源文件时，你需要同步提交中英文文档，其中中文的源文件上传到`i18n/zh-CN/docusaurus-plugin-content-docs`和`i18n/zh-CN/docusaurus-plugin-content-blog`对应类别的目录下，英文的源文件上传到`docs/`或`blog/`各自对应的目录下。

### 新建issue{#add-an-issue}

&emsp;&emsp;新建一个issue，描述你需要新增或修改的文档内容，openfde-doc仓库的管理员会在issue下进行回复并处理您的issue任务。

### 提交你的PR{#submit-your-pr}

&emsp;&emsp;确认文档需要添加的目标目录和版本后，就可以新建PR提交你的文档了。

### 验证文档的正确性{#validate-correctness-for-document}

&emsp;&emsp;提交PR后，openfde-doc仓库的管理员会进行审核，审核文档内容符合规范后会将你的文档内容合入到OpenFDE社区。



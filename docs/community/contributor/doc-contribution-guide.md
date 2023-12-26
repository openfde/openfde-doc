---
sidebar_position: 8
title: doc contribution guides
---

# Documentation Contribution Guide

The documentation for the OpenFDE community is managed by the [openfde-doc](https://gitee.com/openfde/openfde-doc) repository, providing users with abundant resources on OpenFDE. Community members are encouraged to contribute by editing and creating their own technical articles and blogs. The OpenFDE community documentation includes two types: documentation and blogs, and it supports internationalization with English being the default language.

- The documentation directory is `docs/`, and the corresponding Chinese directory is `i18n/zh-CN/docusaurus-plugin-content-docs`.
- The blog directory is `blog/`, and the corresponding Chinese directory is `i18n/zh-CN/docusaurus-plugin-content-blog`.

If you would like to contribute your own feature documentation or technical blog to the OpenFDE community, you can use markdown format to edit your document content.

### Upload your original document

Firstly, it is important to determine the category to which your uploaded document belongs. The categories for the openfde-doc documentation primarily include:

- User Guides: if your document primarily provides assistance and guidance to users, please upload the document to `docs/documentation`
- Developer Guides: if your document primarily provides assistance and guidance to developers, please upload the document to `docs/developer`
- Community Guides：if your document is related to the OpenFDE community, please upload the document to `docs/commnuity`
- FAQ: if your document records common issues and their solutions encountered during the use of OpenFDE,please upload the document to `docs/faq`
- Version Update：if your document is related to the updataion of OpenFDE，please upload the document to `docs/version`

### Upload the source file for the blog posts

If you are uploading source files for blog-type technical articles, please upload your files to the `blog/`. For folder and file naming conventions, as well as the format of the blog content, please refer to the [Blog Writing Guidelines](https://docs.openfde.com/blog/writing-standards).

### Internationalization

When uploading markdown source files, you need to submit both the Chinese and English documents. The Chinese source file should be uploaded to the corresponding directories of `i18n/zh-CN/docusaurus-plugin-content-docs` and `i18n/zh-CN/docusaurus-plugin-content-blog`, based on the category. The English source file should be uploaded to the respective directories of `docs/` or `blog/` based on its category.

### Add an issue

Create a new issue to describe the content you need to add or modify in the documentation. The administrators of the openfde-doc repository will respond and handle your issue task within the issue thread.

### Submit your PR

Once you have confirmed the target directory and version for the documentation that needs to be added, you can create a new pull request to submit your document.

### Validate the correctness of the document

After submitting the PR, administrators of the openfde-doc repository will review it. Once they confirm that the document content adheres to the guidelines, your document will be merged into the OpenFDE community.


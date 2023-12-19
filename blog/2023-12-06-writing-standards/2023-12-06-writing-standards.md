---
slug: writing-standards
title: Writing Standards
description: Please follow the guidelines for blog writing.
date: 2023-12-06T14:00
author: kuangyangyang
---

This blog introduces the guidelines you need to foloow for publishing blogs in the OpenFDE community, including how to add new blogs, blog naming conventions, and some common writing style tips.
<!--truncate-->

> The source files of blog posts are mainly markdown files and follow the rules of markdown writing.

## Add a New Blog{#add-new-blog}

First, create a new folder under openfde-doc/blog/ to store your markdown source files, and the folder naming format is as follows: ```YYYY-MM-DD-blog-title```

![blog-specification](./blog-specification.png)

- This website is built on Docusaurus, which automatically extracts the dates in the file name and displays the blog posts in chronological order.

- Create a separate folder for each blog post, and you can put your own blog post images and markdown files together for easy management.

## Front Matter{#front-matter}

If each blog post is written at the front, you can add a variety of metadata information such as the blog title, author information, blog date, etc. For example:

```
---
title: the title of the blog
descripiton: a brief summary of what this blog is about
slug: the name used for the URL display
author: the author of the blog
tags: [hello, world] The tag to which the blog belongs
---
```

## Edit the Current Blog{#edit-this-blog}

If you want to edit the current blog content, you can click ```Edit this page``` in the bottom left corner of this article to go to the Gitee repository to edit the content.



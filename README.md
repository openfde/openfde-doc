## Installation npm 

you need to configure some npm proxy options before you start openfde-docs. You need execute these commmands.

```bash
npm config get proxy
npm config get https-proxy
```

The above command is executed, it should all return null. If it does not return null, you need to configure it further.

```bash
npm config set registry https://registry.npm.taobao.org
```

## Get the code source

You need to git clone the openfde-doc to get all the documentatation resources.

```bash
git clone  https://gitee.com/openfde/openfde-doc.git
```

## Add a new documentation or a new blog

### Add a new documentation

Our website is currently available in English and Chinese. The default language is English. Theses documentations. The source files for the English version are located in the `docs` directory. And the source files for the Chinese version art located in the `i18n/zh-CN` directory.

Firstly, you should confirm the category to which your document belongs. The structure of document classification is as follows.
  
```bash
docs/
 - documentation
 - developer
 - community
 - faq
 - version

i18n/zh-CN
 - docusaurus-plugin-content-blog
 - docusaurus-plugin-content-docs/current
   - documentation
   - developer
   - community
   - faq
   - version
 - docusaurus-plugin-content-pages
 - docusaurus-theme-classic
```

- documentation: the documentations related to the users and the use guides of OpenFDE.
- developer: some ocumentations that developers may need.
- community: some community guides and rules you need to follow.
- faq: frequently asked questions.
- version: different version update notes of OpenFDE.

Steps to add a new documentation:
- Find the identified document category in the `docs/` directory.
- Add a new markdown file in the category subdirectory.
- Execute this command ```npm run write-translations -- --locale zh-CN``` in terminal.
- Copy your new file to the corresponding category subdirectory of the `i18n/zh-CN` directory.
  
Then You can edit the two new files above. Note that the two document versions should be kept in English and Chinese.

### Add a new blog

You can refer to [blog-guide](./blog-guide.md) to get some guides.

## Start the openfde-doc

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. The default is the English version of the website.

```bash
npm run start
```

If you want to start the zh-CN version of website, you need execute the following command.

```bash
npm run start -- --locale zh-CN
```

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. 

The `build` directory includes static files in multiple languages. You can find the subdirectory `zh-CN` which has static contents hosting service of the website in Chinese.
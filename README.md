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
npm run https://gitee.com/openfde/openfde-doc.git
```

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

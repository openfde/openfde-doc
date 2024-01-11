const nodePath = require('path');
const fs = require('fs');

/**
 * See related issue: https://github.com/facebook/docusaurus/issues/8118 .
 */
function patchPaginationTitleTranslation() {
  console.log('> Patch docusaurus for pagination title i18n bug');

  const filePath = nodePath.join(
    process.cwd(),
    'node_modules/@docusaurus/plugin-content-docs/lib/index.js'
  );

  const changes = [
    {
      from: 'docs: (0, docs_1.addDocNavigation)(docs, sidebarsUtils, versionMetadata.sidebarFilePath),',
      to: '// docs: (0, docs_1.addDocNavigation)(docs, sidebarsUtils, versionMetadata.sidebarFilePath),\ndocs,',
    },
    {
      from: '...version,',
      to: '...version,\ndocs: (0, docs_1.addDocNavigation)(version.docs, sidebarsUtils, version.sidebarFilePath),',
    },
  ];

  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = 0;
  changes.forEach(({ from, to }) => {
    if (content.includes(to)) {
      changed += 1;
    } else if (content.includes(from)) {
      content = content.replace(from, to);
      changed += 1;
    }
  });
  if (changes.length !== changed) {
    console.log(
      'Not fully patched, maybe the source file is changed after package is upgraded'
    );
    return;
  }
  fs.writeFileSync(filePath, content);
}

/** */
function patchStaticAbsolutePathWithI18n() {
  console.log('> Patch docusaurus for static resource URL with i18n');

  const filePath = nodePath.join(
    process.cwd(),
    'node_modules/@docusaurus/core/lib/commands/start.js'
  );

  const changes = [
    {
      from: 'static: siteConfig.staticDirectories.map((dir) => ({\n            publicPath: baseUrl,',
      to: 'static: siteConfig.staticDirectories.map((dir) => ({\n            publicPath: baseUrl.endsWith(cliOptions.locale+"/")?baseUrl.slice(0, -cliOptions.locale.length-1):baseUrl,',
    },
  ];

  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = 0;
  changes.forEach(({ from, to }) => {
    if (content.includes(to)) {
      changed += 1;
    } else if (content.includes(from)) {
      content = content.replace(from, to);
      changed += 1;
    }
  });
  if (changes.length !== changed) {
    console.log(
      'Not fully patched, maybe the source file is changed after package is upgraded'
    );
    return;
  }
  fs.writeFileSync(filePath, content);
}

/**
 * @deprecated
 * See related issue: https://github.com/facebook/docusaurus/issues/8118 .
 * With this patch, you might also set link.slug in each _category_.json file to fix the url path.
 */
function patchPaginationTitleI18n() {
  console.log('> Patch docusaurus for pagination title i18n bug');
  const filePath = nodePath.join(
    process.cwd(),
    'node_modules/@docusaurus/plugin-content-docs/lib/sidebars/index.js'
  );
  const line =
    'const categoriesMetadata = await readCategoriesMetadata(options.version.contentPath);';
  const target =
    'const categoriesMetadata = await readCategoriesMetadata(options.version.contentPathLocalized);';

  const content = fs.readFileSync(filePath, 'utf-8');
  const newContent = content.replace(line, target);
  if (newContent === content) {
    console.log('Not patched, maybe the source file is changed after upgraded');
    return;
  }

  fs.writeFileSync(filePath, newContent);
}

// patchPaginationTitleI18n();
patchPaginationTitleTranslation();
patchStaticAbsolutePathWithI18n();

module.exports = {
  'files': [
    './src/assets/images/svg/*.svg',
  ],
  'dest': './src/assets/fonts/',
  'cssDest': './src/assets/fonts/',
  'htmlDest': './src/assets/fonts/',
  'fontName': 'k-icon-font',
  'classPrefix': 'icon-',
  'baseSelector': '.icon',
  // 'types': ['eot', 'woff', 'woff2', 'ttf', 'svg'],
  'types': ['woff', 'woff2'],
  'fileName': 'app.[fontname].[hash].[ext]'
};

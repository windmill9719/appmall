const path = require('path');

module.exports = {
  chainWebpack: config => {
    //this path is specific to my project
    config.resolve.alias.set('assets', path.resolve('src/assets'));
    config.resolve.alias.set('img', path.resolve('src/assets/img'));
    config.resolve.alias.set('components', path.resolve('src/components'));
    config.resolve.alias.set('common', path.resolve('src/common'));
    config.resolve.alias.set('views', path.resolve('src/views'));
  },
};
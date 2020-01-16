module.exports = {
  exportTrailingSlash: true,
  assetPrefix: 'files',
  exportPathMap: function() {
    return {
      '/': { page: '' }
    };
  }
};
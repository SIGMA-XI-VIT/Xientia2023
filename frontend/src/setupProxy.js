const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://xientia23-api.onrender.com',
      changeOrigin: true,
    })
  );
};

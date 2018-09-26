const { createProxyMiddleware } = require('http-proxy-middleware');

const { REACT_APP_API_HOST = 'http://localhost:13002' } = process.env;

module.exports = app => {
  console.log('Setting proxy for', REACT_APP_API_HOST);
  app.use(
    '/api',
    createProxyMiddleware({
      target: REACT_APP_API_HOST,
      changeOrigin: true,
    })
  );
};

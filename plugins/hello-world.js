module.exports = {
  name: 'hello-world',
  version: '1.0.0',
  register: async function (server, options) {
      // 创建一个路由作为示例
      server.route({
          method: 'GET',
          path: '/test',
          handler: function (request, h) {
              return 'hello, world';
          }
      });
  }
};
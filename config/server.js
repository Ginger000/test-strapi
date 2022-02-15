module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

// module.exports = ({ env }) => ({
//   host: '127.0.0.1',
//   port: 1338,
//   url: 'https://strapi.local/api/',
//   admin: {
//     url: 'https://strapi.local/dashboard/',
//   },
// });
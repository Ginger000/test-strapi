module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59288ea9a13abd5d16ac6b86957d4b9f'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '94ac49d22b2534717d5a95d667db22ce'),
  },
});

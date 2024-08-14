module.exports = {
    port: process.env.PORT || 8000,
    jwtSecret: process.env.JWT_SECRET || 'tiger',
    emailConfig: {
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
  };
  
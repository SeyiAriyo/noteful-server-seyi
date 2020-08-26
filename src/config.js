module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful',
  API_TOKEN: process.env.API_TOKEN
};

//password: 52ac258e36cb88c7d1b63f974edb191a34cd73afd95bdf89d9a52540f4a6230e
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoDB: process.env.MONGODB,
  port: process.env.PORT || 3002,
  default_limit: +process.env.DEFAULT_LIMIT || 7, // Se le agrega el + ya que todas las variables de entornos se definen como string, y aquí se necesita que sea un número.
});

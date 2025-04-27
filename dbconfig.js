//Processo de apontar para o nosso bd SQL Express

const config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "2001guib",
    },
  },
  options: {
    encrypt: false,
    database: "Organize",
  },
  port: 55786,
};

export { config };

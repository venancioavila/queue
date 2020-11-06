import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  handle: async ({ data }) => {
    const { user } = data;

    await Mail.sendMail({
      from: "Fila testes",
      to: user.email,
      subject: "Cadastro de usuários",
      text: "Hey, man!",
      html: `Olá ${user.name}, bem vindo ao sistema de filas do venancio!`,
    });
  },
};

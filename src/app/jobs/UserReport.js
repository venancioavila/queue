export default {
  key: "UserReport",
  handle: async ({ data }) => {
    const { user } = data;

    console.log(user.name, "Foi criado com sucesso!");
  },
};

export default {
  key: "UserReport",
  handle: async ({ data }) => {
    const { user } = data;
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    const time = parseInt(Math.random() * 10000);

    console.log(user.name, "Espere", time);

    await sleep(time);

    console.log("pronto");
  },
};

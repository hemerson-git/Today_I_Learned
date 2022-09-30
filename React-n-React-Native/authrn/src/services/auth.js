export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asdjglkajsdhaljsflakoxchjasdfkklpsjhaklsdfhasdhgadf',
        user: {
          name: 'Hemerson',
          email: 'hemersondev@gmail.com',
        },
      });
    }, 2000);
  });
}

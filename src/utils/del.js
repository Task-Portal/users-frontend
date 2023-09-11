const val = {
  fails: {
    phone: [
      '"phone" with value "+3800666678719" fails to match the required pattern: /^[+]{0,1}380([0-9]{9})$/',
    ],
    email: ["email is not correct"],
  },
  
};

let response =""
for (let i in val.fails) {
//   console.log(i);
  response +=  `${val.fails[i][0]}\n`
}


console.log(response)

// // // const string = prompt("tell meyour name!!!");

// // // // const regExp = /[Yy]/;
// // // // const regExp = /y/i;
// // // const regExp = new RegExp("y", "i");

// // // console.log(string.match(regExp));

// // // const letter = "AaaaaaaBbbbbbCcccccDddddd";

// // // const regExp = /c/gi;

// // // console.log(letter.match(regExp));

// // const letter = "0123a456sd78D90f12g300ds98S76d5f";

// // // const regExp = /[0-9A-Za-z]/g;
// // const regExp = /\w/g;

// // console.log(letter.replace(regExp, "*"));

// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   if (phoneRegExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok :)";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok >:(";
//     phoneResult.style.color = "red";
//   }
// });

// // 20 @ 10
// // 4 30 Zz1

// let i = 0;

// const count = () => {
//   i++;
//   console.log(i);
//   if (i < 5000) {
//     count();
//   }
// };

// count();

const people = {
  John: {
    age: 25,
    parents: {
      Tony: {
        age: 50,
        parents: {
          Jin: {
            age: 70,
            parents: {
              Lucy: {
                age: 70,
                parents: {
                  Lucy: {
                    age: 70,
                    parents: {
                      Lucy: {
                        age: 70,
                        parents: {
                          Lucy: {
                            age: 70,
                            parents: {
                              Lucy: {
                                age: 70,
                                parents: {
                                  Lucy: {
                                    age: 70,
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Kelly: {
        age: 45,
      },
    },
  },
  Sam: {
    age: 15,
    parents: {
      Din: {
        age: 40,
      },
    },
  },
};

// const key = "Sam";
// console.log(people[key]);

const parentsList = (obj) => {
  if (obj.parents) {
    for (let key in obj.parents) {
      console.log(key);
      parentsList(obj.parents[key]);
    }
  } else {
    console.log("...ops");
  }
};

for (let key in people) {
  parentsList(people[key]);
}

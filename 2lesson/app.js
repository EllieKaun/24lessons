// // // // // // // // console.log("1");
// // // // // // // // console.log("2");
// // // // // // // // console.log("3");
// // // // // // // // console.log("4");
// // // // // // // // console.log("5");
// // // // // // // // console.log("6");
// // // // // // // // console.log("7");

// // // // // // // const btn = document.querySelector("button");

// // // // // // // btn.addEventListener("click", () => {
// // // // // // //   console.log("click");
// // // // // // // });

// // // // // // // console.log("1");

// // // // // // // setTimeout(() => {
// // // // // // //   console.log("timeout");
// // // // // // // }, 1000);

// // // // // // // console.log("2");

// // // // // // setTimeout(() => {
// // // // // //   console.log("0");
// // // // // // }, 0);

// // // // // // setTimeout(() => {
// // // // // //   console.log("1");
// // // // // // }, 1000);

// // // // // // setTimeout(() => {
// // // // // //   console.log("2");
// // // // // // }, 2000);

// // // // // // console.log("a");
// // // // // // console.log("b");
// // // // // // console.log("c");

// // // // // // setTimeout(() => {
// // // // // //   console.log("a");
// // // // // // }, 1000);

// // // // // // setTimeout(() => {
// // // // // //   console.log("b");
// // // // // // }, 1000);

// // // // // const btn = document.querySelector("button");

// // // // // const interval = setInterval(() => {
// // // // //   console.log("interval");
// // // // // }, 1000);

// // // // // // btn.addEventListener("click", () => {
// // // // // //   clearInterval(interval);
// // // // // // });

// // // // // setTimeout(() => {
// // // // //   clearInterval(interval);
// // // // // }, 5000);

// // // const box = document.querySelector(".box");

// // // let positonX = 0;
// // // let positonY = 0;

// // // const handleBoxMove = () => {
// // //   if (positonX <= 440) {
// // //     positonX += 16;
// // //     box.style.left = `${positonX}px`;
// // //     setTimeout(handleBoxMove, 100);
// // //   } else if (positonY <= 440) {
// // //     positonY += 16;
// // //     box.style.top = `${positonY}px`;
// // //     setTimeout(handleBoxMove, 100);
// // //   }
// // // };

// // // handleBoxMove();

// // // // const myFunc = () => 5;

// // // // const myFunc2 = () => {
// // // //   5;
// // // // };

// // // // console.log(myFunc());
// // // // console.log(myFunc2());

// // const doHomework = (subject = "math", callback = () => {}) => {
// //   alert(`Starting my ${subject} homework!`);
// //   callback();
// // };

// // // const finishHomework = () => {
// // //   alert("DONEE!!!!");
// // // };

// // // doHomework(undefined, finishHomework);

// // setTimeout(() => {}, 2000);

// // addEventListener("click", () => {});

// // const arr = [1, 2, 3, 4, 5, 6, 7];

// // console.log(arr[2]);

// // const res = arr.shift();
// // const res = arr.pop();
// // const res = arr.slice(4, 6);
// // console.log(arr);
// // console.log(res);

// // const res = arr.forEach((item, i) => {
// //   console.log(item, i);
// //   return item + 10;
// // });

// // // const res = arr.map((item, i) => {
// // //   console.log(item, i);
// // //   return item + 10;
// // // });

// // console.log(res);
// // console.log(arr);

// const arr = ["январь", "февраль", "март", "апрель", "май"];

// const colors = ["red", "green", "blue", "yellow", "brown"];

// const wrapper = document.querySelector(".wrapper");

// const data = arr.map((item, i) => {
//   item = `${item} месяц`;

//   const block = document.createElement("div");
//   block.style.width = "200px";
//   block.style.height = "50px";
//   block.style.backgroundColor = colors[i];
//   block.style.margin = "20px";

//   block.innerText = item;

//   wrapper.append(block);

//   return item;
// });

// console.log(data);

// const fruits = ["apple", "banana", "watermelon", "peach"];

// const res = fruits.filter((item) => item.length > 5);

// console.log(res);
// console.log(fruits);

const arr = [3, 16, 7, 90, 54, 8, 3];

const result = arr.reduce((prev, curr, i) => {
  console.log(prev, "prev", curr, "curr", i, "i");
  return prev + curr;
}, 0);

// const result = arr.reduce((prev, curr) => prev + curr);

console.log(result);

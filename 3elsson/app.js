// // // // // const let var

// // // // function varTest() {
// // // //     var x = 1
// // // //     console.log(x, "a")
// // // //     // if(true){
// // // //     //     var x = 2
// // // //     //     console.log(x, "b")
// // // //     // }
// // // //     function myFunc(){
// // // //         var x = 2
// // // //         console.log(x, "b")
// // // //     }
// // // //     myFunc()
// // // //     console.log(x, "c")
// // // // }

// // // // varTest()

// // // const letTest = () => {
// // //     let x = 1
// // //     console.log(x, "a")
// // //     if(true){
// // //         let x = 2
// // //         console.log(x, "b")
// // //     }

// // //     console.log(x, "c")
// // // }

// // // letTest()

// // console.log(b)

// // var b

// // myFunc()

// // // var myFunc = () => {
// // //     console.log("123")
// // // }

// // function myFunc(){
// //     console.log('1')
// // }

// const buttons = document.querySelectorAll("button")

// // console.log(buttons)

// // buttons.forEach((item) => {
// //     // console.log(item)
// //     item.addEventListener("click", ()=>{
// //         // console.log(item)
// //         // if(!item.classList.contains("red")){
// //         //     item.classList.add("red")
// //         // }else{
// //         //     item.classList.remove("red")
// //         // }
// //         item.classList.toggle("red")
// //     })
// // })

// const wrapper = document.querySelector(".wrapper")
// const newButton = document.createElement("button")

// newButton.innerText = "6"

// wrapper.append(newButton)

// wrapper.addEventListener("click", (e)=>{
//     console.dir(e.target)
//     if(e.target.tagName === "BUTTON"){
//     e.target.classList.toggle("red")
//     }
// })

const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

form.addEventListener("click", () => {
  alert("form");
});

div.addEventListener("click", () => {
  alert("div");
});

p.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("p");
});

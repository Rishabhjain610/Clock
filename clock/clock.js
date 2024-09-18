let btn1 = document.querySelector('.btn1');
let btndate = document.querySelector('.btndate');
let btntime = document.querySelector('.btntime');

btn1.addEventListener('click', () => {
  let mydate = new Date();  // Create a Date object
  btntime.innerText = mydate.toLocaleTimeString();  // Set the time correctly
  btndate.innerText=mydate.toLocaleDateString();
});

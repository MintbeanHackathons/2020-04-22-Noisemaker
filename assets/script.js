function main() {
  function buttonEvents() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.addEventListener("click", function () {
      console.log("button 1");
    });
    button2.addEventListener("click", function () {
      console.log("button 2");
    });
    button3.addEventListener("click", function () {
      console.log("button 3");
    });
  }
  buttonEvents();
}
main();

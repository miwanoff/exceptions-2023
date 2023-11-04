function raiser0() {
  //let x = my;   // помилка
  console.log("my=" + my); // цей оператор не виконається
}

function raiser() {
  try {
    //let my = 0;
    let x = my; // помилка
    console.log("my=" + my); // цей оператор не виконається
    //   try {
    //     raiser0();
  } catch (ex) {
    console.log("ERROR raiser " + ex.name + ": " + ex.message);
  }
}

try {
  //let my_var = 0;
  //let x = my_var; // помилка
  //console.log("my_var = " + my_var); // цей оператор не виконається
  raiser(); // помилка буде всередені функції raiser()
  console.log("after error"); // цей оператор також не виконається
} catch (ex) {
  console.log("ERROR " + ex.name + ": " + ex.message);
}

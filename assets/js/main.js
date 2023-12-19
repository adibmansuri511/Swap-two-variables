function swap() {

    // Take input from the user
    let a = parseInt(document.getElementById("valueOne").value);
    console.log(a);
    let b = parseInt(document.getElementById("valueTwo").value);
    console.log(b);

    // Create a temporary variable
    let temp;

    // Swap variables
    temp = a;
    a = b;
    b = temp;

    console.log(`The value of variable-1 after swapping: ${a}`);
    console.log(`The value of variable-2 after swapping: ${b}`);

    document.querySelector("#p1").innerHTML = `The value of variable-1 after swapping: ${a}`;
    document.querySelector("#p2").innerHTML = `The value of variable-2 after swapping: ${b}`;

}

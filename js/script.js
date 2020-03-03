function generate() {
    var userInput = document.getElementById("input").value;
    console.log(userInput);
    var array = userInput.split("");
    console.log(array);
    var i;
    var output = [];
    for (i = 0; i < array.length; i++) {
        output += "||" + array[i] + "||";
    }
    document.getElementById("output").value = output;
}
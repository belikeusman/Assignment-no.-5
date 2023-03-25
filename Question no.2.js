let fruit = prompt("Choose one fruit among of these. (Apple, Banana, Orange)");

fruit = fruit.toLowerCase();

switch (fruit) {
    case "apple":
    console.log("Red.");
    break;

    case "banana" :
    console.log("Yellow");
    break ;

    case "orange" :
    console.log("Orange");
    break ;
    
    default:
    console.log("You entered wrong fruit.");
}

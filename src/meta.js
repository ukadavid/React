var day = "Sunday";
switch (day) {
    case "Monday":
        console.log("aaaa")        
        break;
    case "Tuesday":
        console.log("bbbb")        
        break;
    case "Wednesday":
        console.log("cccc")        
        break;
    case "Thursday":
        console.log("dddd")        
        break;
    case "Friday":
        console.log("eeee")        
        break;
    case "Saturday":
        console.log("ffff")        
        break;
    case "Sunday":
        console.log("Do something")        
        break;
    default:
        console.log('There is no such day')
        break;
}

for (let i = 1; i<6; i++){
    console.log(i)
    if (i == 5){
        ('Counting completed!')
    }
}

for (let i = 1; i<=10; i++){
    switch (i) {
        case 1:
            console.log("Gold medal")        
            break;
        case 2:
            console.log("Silver medal")        
            break;
        case 3:
            console.log("Bronze medal")        
            break;
        default:
            console.log(i)
            break;
    }
}
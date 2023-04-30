// 3

while (true) {
    let word = prompt("Write a word");
    if (word == "країна"){
        alert("country");
    }else if (word == "привіт"){
        alert("hello");
    }else if (word == "бувай"){
        alert("bye");
    }else if (word == "гора"){
        alert("mountain");
    }else if (word == "місяць"){
        alert("month");
    }else if (word == "рік"){
        alert("year");
    }else if (word == "місто"){
        alert("city");
    }else if (word == "людина"){
        alert("human");
    }else if (word == "комп'ютер"){
        alert("computer");
    }else if (word == "екран"){
        alert("screen");
    }else if (word == null){
        break;
    }else{
        alert("Not yet in this dictionary!");
        console.log(word);
    }
}

// 4
let list = [1, 2, 3, 4, 5];
let All_list = [];

for (let i = 0; i < 5; i++){
    alert(list[i]);
    All_list.push(list[i]);
}
alert(All_list);
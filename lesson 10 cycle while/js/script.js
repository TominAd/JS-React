
//while

let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for (let i = 1; i < 10; i++){
    
    if (i === 6){
        //break; // остановить цикл на выбранном значении
        continue; //пропустить выбранное значание но не остановить цикл
    }
    
    console.log(i);
    
}
//napisz program, który wyświetla liczby od 1 do 100. Zamiast liczb podzielnych przez 3 niech program wyświetli Fizz. Zamiast liczb podzielnych przez 5 program wyświetli Buzz. Zamiast liczb podzielnych przez 15 Fizz-Buzz

//******************** Switche ***************************

document.write('<h1>Switche</h1>');

for (var i = 1; i < 101; i++) {
    
    switch (true) {

        case (i % 15 == 0):
            document.write('Fizz-Buzz<br>');
            break;

        case (i % 3 == 0):
            document.write('Fizz<br>');
            break;
            
        case (i % 5 == 0):
            document.write('Buzz<br>');
            break;
            
        default:
            document.write(i + '<br>');
    
    }
};


//******************** If-y ******************************

document.write('<h1>If-y</h1>');

for (var j = 1; j < 101; j++) {

        if (j % 15 == 0) {
            document.write('Fizz-Buzz<br>');
        }

        else if (j % 3 == 0) {
            document.write('Fizz<br>');
        }
            
        else if (j % 5 == 0) {
            document.write('Buzz<br>');
        }
            
        else {
            document.write(j + '<br>');
        };
};
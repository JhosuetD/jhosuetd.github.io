
/*
1 ORDENACIÓN DE TRES NÚMEROS
Construir un programa que pida por pantalla 3 números y luego
diga cuál es el mayor, el del medio y el menor de los números
ingresados.*/


        let num1 = parseInt(prompt('Ingrese el primer número'));
        let num2 = parseInt(prompt('Ingrese el segundo número'));
        let num3 = parseInt(prompt('Ingrese el tercer número'));
        let mayor; 
        let menor;
        let medio;
        if(num1 >= num2 && num1 >= num3){
            mayor = num1;
        }else if(num2 >= num1 && num2 >= num3){
            mayor = num2;
        }else{
            mayor = num3;
        }
            if(num1 <= num2 && num1 <= num3){
                menor = num1;
            }else if(num2 <= num1 && num2 <= num3){
                menor = num2;
            }else{
                menor = num3;}

                if(num1 >= num2 && num1 >= num3){
                    medio = num1;
                }else if(num2 >= num1 && num2 >= num3){
                    medio = num2;
                }else{
                    medio = num3;}   


        console.log(`El número mayor es: ${mayor}`);
        console.log(`El número menor es: ${menor} `);
        console.log(`El número medio es: ${medio} `);


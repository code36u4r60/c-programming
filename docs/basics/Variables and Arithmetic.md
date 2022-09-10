---
sidebar_position: 1
---

# Variables and Arithmetic

## You need to know

It is not my purpose to make a theoretical approach to language.
Therefore, I leave some links to the theoretical explanations that I consider essential to solve this notebook.

- [Program Structure](https://www.tutorialspoint.com/cprogramming/c_program_structure.htm)
- [Basic Sintaxe](https://www.tutorialspoint.com/cprogramming/c_basic_syntax.htm)
- [Data Types](https://www.tutorialspoint.com/cprogramming/c_data_types.htm)
- [Variables](https://www.tutorialspoint.com/cprogramming/c_variables.htm)
- [Constants and Literals](https://www.tutorialspoint.com/cprogramming/c_constants.htm)

## Challenges

1º Challenge: Write a program that reads an integer and prints it.

```c
#include<stdio.h>

int main()
{
    int value;
    printf("Enter an integer: ");
    scanf("%d", &value);
    printf("The value read is: %d", value);
    return 0;
}
```

2º Challenge: Write a program that reads a real number and prints it.

```c
#include<stdio.h>

int main()
{
    double value;
    printf("Enter an number: ");
    scanf("%lf", &value);
    printf("The value read is: %lf", value);
    return 0;
}
```

3º Challenge: Write a program that asks the user to enter three integer values and print their sum.

```c
#include<stdio.h>

int main()
{
    int valueOne, valueTwo, valueThree;
    
    printf("Enter three integer values. \n");
    printf("Values 1: ");
    scanf("%d", &valueOne);
    printf("Values 2: ");
    scanf("%d", &valueTwo);
    printf("Values 3: ");
    scanf("%d", &valueThree);
    
    int sum = valueOne + valueTwo + valueThree;
    
    printf("%d + %d + %d = %d", valueOne, valueTwo, valueThree, sum);
    
    return 0;
}
```

4º Challenge: Write a program that reads a real number and prints the result of that number squared.

```c
#include<stdio.h>

int main()
{
    float value;
    
    printf("Enter an values: ");
    scanf("%f", &value);
    
    float squared = value * value;
    
    // I used ".2f" to print the result with two decimal places
    printf("%.2f * %.2f = %.2f", value, value, squared);
    
    return 0;
}
```

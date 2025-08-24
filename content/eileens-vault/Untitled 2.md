---
publish: false
created: 2025-06-30T20:31:06.066+08:00
modified: 2025-08-23T23:55:39.3939+08:00
---
## Variables
### Primitive Types
1. int: integers
2. double: decimals
3. boolean: true or false
### Reference Types
1. string

## String 字符串

sequences of characters: letters, numvers, punctuation, spaces. . .

index: [0, length-1]

```
String name = "Eileen";
```

- numeric value can be concatenated to a string
- Whenever one of the arguments of the + operator is a string, the other one also becomes a string.
- ==括号优先，从左往右算，没有遇到string就按正常的加法算==

```
System.out.println(7 + 8 + (7 + 8) + "Hello" + 7 + 8 + (7 + 8))  
//the result should be 30Hello7815
```

### Escape Sequences 转义字符序列

![Pasted image 20241116143859.png](app://8c5401e450b8f0a1aa8984b5e36f9edefb87/C:/Users/gxs82/Documents/SFLS_AIP/Eileen's%20Vault/Images/Pasted%20image%2020241116143859.png?1731739139518)

### Compare Strings

1. ASCII code: ==digit< capital letter< lowercase letter==
2. String 的比较只能使用 .equals() 或者 compareTo()，不要使用 \=\=!

### String Concatenation

- substring 方法的范围截止到endIndex - 1
- ![Pasted image 20250420145938.png](app://8c5401e450b8f0a1aa8984b5e36f9edefb87/C:/Users/gxs82/Documents/SFLS_AIP/Eileen's%20Vault/Images/Pasted%20image%2020250420145938.png?1745132378377)

## Math Class

产生一个[k, p]之间的随机整数 `(int)(Math.random()*(p-k+1)+k);`

## Wrapper Class

- Autoboxing: automatic conversions between primitive values and corresponding wrapper objects

```
Integer obj3;
int num3 = 69;
obj3 = num3; //automatically creates an Integer object
```

- Unboxing: automatic conversions between wrapper objects and corresponding primitive values

```
Integer obj4 = new Integer(69);
int num4;
num4 = obj4; //automatically extracts the int value
```

## Method

### Method Overloading

several methods have the ==same method name with different parameter lists==

- consider:
    1. number of parameters
    2. order of parameters
    3. type of parameters

==Methods that are exactly the same cannot exist at the same time.== (When a method is called, Java decides which version of it to execute depending on the arguments given)

- ==return type 是 void 的method==
    - ==不能用来给变量赋值，return type 和 data type 要对应 （特殊情况是 int 和 double：int 可以给 double 变量赋值，但是 double 不能给 int 变量赋值，因为 double 的范围比 int 大）==
    - ==不能被打印==

## Boolean Expressions

![Pasted image 20241210190646.png](app://8c5401e450b8f0a1aa8984b5e36f9edefb87/C:/Users/gxs82/Documents/SFLS_AIP/Eileen's%20Vault/Images/Pasted%20image%2020241210190646.png?1733828806373)

- = is for assignment
- == is for equality testing

## Logical Operators

- && (and 且)
- || (or 或)
- ! (not 非)
- **运算顺序**
    1. arithmetic (+, -, x, /, %)
    2. relational (e.g. ==)
    3. logical (==先算 && 再算 ||==)
- 分配律
    - A || (B && C) = (A || B) && (A || C)

## 真值表

![Pasted image 20241211205337.png](app://8c5401e450b8f0a1aa8984b5e36f9edefb87/C:/Users/gxs82/Documents/SFLS_AIP/Eileen's%20Vault/Images/Pasted%20image%2020241211205337.png?1733921617985)

- **Applying logical operators**

```
  int age = 18;
  // if (12 <= age <= 18) // Error
  if (age >=12 && age <= 18) // Correct [12,18]
```

- **Short-circuited evaluation**
    - the second boolean value is not reached
    - e.g. false &&
    - e.g. true ||
    - can be used to **avoid NullPointerException**

```
	  String str = null;
	  if(str != null && str.length() > 10)
	  // if(str.length() > 10 && str != null) // you must check null first because if the string itself is null, evaluating "str.length()“ would cause a runtime error
	  {
	  System.out.println("something")
	  }
```

## De Morgan's Law 德摩根定理

- ! (A && B) is the same as !A || !B
- ! (A || B) is the same as !A && !B

## Order of Operation

![Pasted image 20250112182849.png](app://8c5401e450b8f0a1aa8984b5e36f9edefb87/C:/Users/gxs82/Documents/SFLS_AIP/Eileen's%20Vault/Images/Pasted%20image%2020250112182849.png?1736677729467)

## Math Class

- Math.abs(-3.2) returns 3.2 //returns input type
- Math.pow(3, 2.0) returns 9.0 //**returns a double** regardless of input type; (base, exponent)
- Math.sqrt(9) returns 3.0 //**returns a double**
- Math.PI
    - a public variable of the type double approximately equal to pi
- **Math.random() returns a random number [0,1)**
- **要产生一个[k, p]之间的随机整数:** **`(int)(Math.random()*(p-k+1)+k)`**
- Probability:
    - **General Rule: Math.random() < probability
    - e.g. 40%: Math.random() < 0.4
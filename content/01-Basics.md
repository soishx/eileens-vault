---
publish: true
created: 2024-12-10T18:58:27.2727+08:00
modified: 2025-08-29T10:17:45.4545+08:00
---
This note summarizes key points you need to know before [[05-Writing Classes|writing classes]].
## Variables
### Primitive Types
1. int: integers
2. double: decimals
3. boolean: true or false
### Reference Types
1. String
2. Objects

==The two types are different: Primitive Types store values, Reference Types store address (可以理解为快捷方式？==

## String 字符串

sequences of characters: letters, numbers, punctuation, spaces. . .

index: \[0, length-1]

```java
String name = "Eileen";
```

- numeric value can be concatenated to a string
- Whenever one of the arguments of the + operator is a string, the other one also becomes a string.
- ==括号优先，从左往右算，没有遇到String就按正常的加法算==

```java
System.out.println(7 + 8 + (7 + 8) + "Hello" + 7 + 8 + (7 + 8))  //the result should be 30Hello7815
```

### Escape Sequences 转义字符序列
![[Pasted image 20241116143859.png|400]]

### Compare Strings
1. [ASCII code](https://www.ascii-code.com/#:~:text=ASCII%20printable%20characters%20(character%20code%2032%2D127)): ==digit< capital letter< lowercase letter==
2. String 的比较只能使用 .equals() 或者 compareTo()，不要使用 \=\=!

### String Concatenations
- substring 方法的范围截止到 endIndex - 1
- ![[Pasted image 20250420145938.png]]

## Math Class
- `Math.abs(-3.2)` returns 3.2 //returns input type
- `Math.pow(3, 2.0)` returns 9.0  //**returns a double** regardless of input type; (base, exponent)
- `Math.sqrt(9)` returns 3.0  //**returns a double**
- `Math.PI`
	- a public variable of the type double approximately equal to $\pi$
- **Math.random() returns a random number \[0,1)**
- **要产生一个\[k, p\]之间的随机整数:**
  **`(int)(Math.random()*(p-k+1)+k)`**
- Probability: 
	- **General Rule: Math.random() < probability**
	- e.g. 40% (2 methods)
		1. Math.random() < 0.4
		2. (int)(Math.random()\*10)+1 <= 4

### Order of Operation

![[Pasted image 20250112182849.png|300]]

## Boolean Expressions
![[Pasted image 20241210190646.png]]
- = is for assignment
- == is for equality testing
### Logical Operators
- && (and 且)
- || (or 或)
- ! (not 非)
- **运算顺序**
	1. arithmetic (+, -, x, /, %)
	2. relational (e.g. \==)
	3. logical (==先算 && 再算 ||==)
- 分配律
	- A || (B && C) = (A || B) && (A || C)
  
### 真值表
![[Pasted image 20241211205337.png]]
- **Applying logical operators**
```java
  int age = 18;
  // if (12 <= age <= 18) // Error
  if (age >=12 && age <= 18) // Correct [12,18]
```

- **Short-circuited evaluation** ^8c5695
	- the second boolean value is not reached
	- e.g. `false && `
	- e.g. `true ||`
	- can be used to **avoid NullPointerException**
```java
	  String str = null;
	  if(str != null && str.length() > 10)
	  // if(str.length() > 10 && str != null) // you must check null first because if the string itself is null, evaluating "str.length()“ would cause a runtime error
	  {
	  System.out.println("something")
	  }
```

> [!IMPORTANT]
> ## De Morgan's Law 德摩根定理
> - ! (A && B)  is the same as  !A || !B
> - ! (A || B)  is the same as !A && !B
>
>  
>   

## Wrapper Class
- Autoboxing: automatic conversions between primitive values and corresponding wrapper objects
```java
Integer obj3;
int num3 = 69;
obj3 = num3; //automatically creates an Integer object
```
- Unboxing: automatic conversions between wrapper objects and corresponding primitive values
```java
Integer obj4 = new Integer(69);
int num4;
num4 = obj4; //automatically extracts the int value
```

## Method
### Method Overloading
several methods have the ==same method name with different parameter lists==

- consider:
	1. number of parameters
	2. order of parameters
	3. type of parameters

- ==Methods that are exactly the same cannot exist at the same time.== (when a method is called, Java decides which version of it to execute depending on the arguments given)

- ==return type 是 void 的 method==
	- ==不能用来给变量赋值，return type 和 data type 要对应 （特殊情况是 int 和 double：int 可以给 double 变量赋值，但是 double 不能给 int 变量赋值，因为 double 的范围比 int 大）==
	- ==不能被打印==

## Iteration 循环
### While Loops
- executes instructions repeatedly while the condition is true
- avoid infinite loops
- the **return statement** inside an iteration statement will **halt the loop** and exit the method or constructor

```java
while (condition)
{
    //statements
}
```
### For loops
- 可改写成 while loop, while loop 前需要 declaration

```java
for (initialization; condition; update)
{
    //statements
}
```
- e.g.
```java
for (int count = 1; count <= 5; count++)
{
	System.out.println (count);

```

## If-statements
1. if () {}
2. if () {} else {}
3. if () {} else if {} else {}
4. if () {} if () {}
**if statements 中，有 else 代表互斥，if 和 else 不能同时执行; 两个 if 代表并列**

## Common Algorithms
### Reverse a String
```java
public static void main(String[] args) {
	String str4 = "ap csa";
	String temp = "";
	for (int k = str4.length(); k > 0; k--) {
	
		temp = temp + str4.substring(k - 1, k);
	}
	System.out.println(temp);
}
```  

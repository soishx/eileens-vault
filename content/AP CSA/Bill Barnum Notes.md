---
publish: false
created: 2025-01-12T18:28:11.1111+08:00
modified: 2025-08-25T08:47:30.3030+08:00
---
- We can set a double variable equal to an integer, it will automatically convert into a double. But we **can't** set an integer variable equal to a decimal.
- **Casting**: e.g. a = (int) 3.99  //cuts everything off after the decimal point
-  System.out.println (5.0 / 3)  //result is a double
- System.out.println (5 / 0)  //error
- System.out.println (5 / 0.0)  //Infinity
- System.out.println (0.0 / 0.0)  //NaN (not a number)

## Order of Operation

![[Pasted image 20250112182849.png]]


## Escape Sequence

![[Pasted image 20250112185222.png]]
only the first three required in AP


## Objects
aka an instance of a class
1. states (fields in Java)
2. behaviors (methods in Java)

- Creating an object: e.g. 
	- in a lightbulb class: 
	  Lightbulb x = new Lightbulb();
	- String
	  String y = "Hello"; 
	  /*
		  identical string objects created this way points to the same location in memory
	  \*/
	  String z = new String ("Hello");
	   /*
		  identical string objects created this way create new strings each time in memory
	  \*/
	  ![[Pasted image 20250116150951.png]]
	  - **In sum, use == to compare primitive data types. Some objects can be accurately compared using the .equals() method**
- Methods that don't need an object, that can be called from the class are called **static methods** (can access only class variables)
- Methods that can only be accessed from an object (instance of a class) are called **non-static methods** (can access class variables or instance variables)

### Class variables (static fields)
certain states that belong to the class
- if you change a class variable anywhere, you change it **everywhere**

### Instance variables (non-static fields)
certain states that belong to the object
- only an object may have a value for instance variables
- changing the value of one object does NOT affect other objects



String g = "howdy";  //SOP is short for System.out.print
![[Pasted image 20250116151135.png]]

## Math Class
- Math.abs(-3.2) returns 3.2 //returns input type
- Math.pow(3, 2.0) returns 9.0  //**returns a double** regardless of input type; (base, exponent)
- Math.sqrt(9) returns 3.0  //**returns a double**
- Math.PI
	- a public variable of the type double approximately equal to pi
- **Math.random() returns a random number \[0,1)**
- **要产生一个\[k, p\]之间的随机整数:**
  **`(int)(Math.random()*(p-k+1)+k)`**
- Probability: 
	- **General Rule: Math.random() < probability**
	- e.g. 40% (2 methods)
		1. Math.random() < 0.4
		2. (int)(Math.random()\*10)+1 <= 4

## Reverse a String
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

## Nested Loop
a loop that is declared inside another loop
- each time the outer loop runs once, the inner loop will go thru a complete cycle
- 计算次数：
	- for (int i = 30; i < 300; i++)
	- i: \[30, 300) or \[30, 299]
	- 次数：300-30=270 or 299-30+1=270
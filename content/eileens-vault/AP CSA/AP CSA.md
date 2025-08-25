---
publish: false
created: 2025-05-07T10:44:35.3535+08:00
modified: 2025-08-25T08:45:38.3838+08:00
---
- remember that the **instance variable must be used in the conductor** (do NOT create new local variables and assign values)
- **when calling a method, parentheses must be added** regardless of whether the method has parameters or not)
- in general, **public methods** in a class **cannot** be called from another class unless:
	1. **The class is referenced explicitly** (e.g., `ClassName.method()` for static methods).
	2. **The method is called on an instance** of that class (e.g., `obj.method()` for instance methods).
## String 字符串

sequences of characters: letters, numbers, punctuation, spaces. . .

index: [0, length-1]

```java
String name = "Eileen";
```

- numeric value can be concatenated to a string
- Whenever one of the arguments of the + operator is a string, the other one also becomes a string.
- ==括号优先，从左往右算，没有遇到string就按正常的加法算==

```java
System.out.println(7 + 8 + (7 + 8) + "Hello" + 7 + 8 + (7 + 8))  //the result should be 30Hello7815
```

### Escape Sequences 转义字符序列

![Pasted image 20241116143859.png](app://af988e9c938226f95a61e63d91c2c18f463c/C:/Users/gxs82/Documents/%E6%B7%B1%E5%A4%96%E5%9B%BD%E9%99%85%E4%B9%A6%E9%99%A2/Eileen's%20Vault/Images/Pasted%20image%2020241116143859.png?1731739139518)

### Compare Strings

1. ASCII code: ==digit< capital letter< lowercase letter==
2. String 的比较只能使用 .equals() 或者 compareTo()，不要使用 ==!

### String Concatenation

- substring 方法的范围截止到endIndex - 1
- ![Pasted image 20250420145938.png](app://af988e9c938226f95a61e63d91c2c18f463c/C:/Users/gxs82/Documents/%E6%B7%B1%E5%A4%96%E5%9B%BD%E9%99%85%E4%B9%A6%E9%99%A2/Eileen's%20Vault/Images/Pasted%20image%2020250420145938.png?1745132378377)

## Math Class

产生一个[k, p]之间的随机整数 `(int)(Math.random()*(p-k+1)+k);`

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

several methods have the ==same method name with different parameter lists==

- consider:
    1. number of parameters
    2. order of parameters
    3. type of parameters

==Methods that are exactly the same cannot exist at the same time.== (When a method is called, Java decides which version of it to execute depending on the arguments given)

- ==return type 是 void 的method==
    - ==不能用来给变量赋值，return type 和 data type 要对应 （特殊情况是 int 和 double：int 可以给 double 变量赋值，但是 double 不能给 int 变量赋值，因为 double 的范围比 int 大）==
    - ==不能被打印==

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

产生一个[k, p]之间的随机整数 (int)(Math.random()*(p-k+1)+k)

# Array
- the size of an array **cannot** be changed

## For-each loop for traversing
- used for array and arraylist
- aka enhanced for loop
- **只读**，修改的是参数的副本，不影响参数（**这一性质只针对primitive types**, 不针对reference types）
```java
for (typeName variableName : arrayName){
	//statements
}
```
- 输出时直接输出variableName
- 不能输出arr\[x\]
```java
for (int x : arr){
	//statements
}
System.out.println(x);
```

## Common Algorithms
### Maximum / Minimum
用maximum举例
```java
int largest = values[0]; //initialize

//traverse the string to find max
for(int i = 1; i < values.length; i++){  
	if(values[i] > largest){
		largest = values[i];
	}
}
```
- 其中 line 1 有两种写法
	1. 一种如上：把初始值定为array里的一个数
	2. 另一种如下：取Integer class 的最小值 （找minimum时取MAX_VALUE）
```java
	   int largest = Integer.MIN_VALUE;
```

### Sum and Average
```java
double sum = 0;
for(int element : values){
	sum += element;
}
double average = 0;
//the array should have a length greater than zero
if(values.length > 0){
	average = sum / values.length;
}
```

### !! Check All Elements
```java
for(int element : values){
	if(element < 60){
		return false;
	}
}
return true;
```

### Count Numbers
```java
int count = 0;
for(int element : values){
	if(element > 90){
		count++;
	}
}
return count;
```

### !! Reverse Arrays
```java
int[] values = {1, 2, 3, 4, 5, 6, 7, 8};

int temp;
for(int i = 0; i < values.length / 2; i++){
//swap
	temp = values[values.length - 1 - i];
	values[values.length - 1 - i] = values[i];  //互换元素的index相加等于length - 1
	values[i] = temp;
}

for(int e: values){
	System.out.print(e + " ");
}
```

题型：
intended to return true if \[condition\], return false otherwise
- initialize: 两种 condition 中更难达到的那种
	- e.g. check if an int\[\] is decreasing --> initialize to true
- 用循环检查，发现反例则赋值为相反boolean value
# ArrayList
## Properties
- all elements has to be **reference type**
	- String
	- class
	- Integer / Double / Boolean
- **size is changeable**
- 可以直接打印（array不行）
## Declaration
example:
```java
ArrayList<String> names = new ArrayList<String>();
```

## Methods
### size
![[Pasted image 20250207104737.png]]
### add
![[Pasted image 20250207105303.png]]

![[Pasted image 20250207105521.png]]
valid index: \[0, size\]
### get and set
valid index: \[0, size - 1\]
![[Pasted image 20250207105618.png]]

![[Pasted image 20250207105737.png]]
### remove
![[Pasted image 20250207105951.png]]


![[222f12f1a6faff1b9e6978261dfdce0.jpg]] ^3781a7

## Common Algorithms
### max and min
![[Pasted image 20250207114047.png]]
### delete elements
**avoid skipping elements**
1. ==if-else==
- use while loop bc the number of loops is not fixed
- if removed, index doesn't ++ --> check same index (previously at the next index)
- if not removed, move on (index ++)
![[Pasted image 20250207114108.png]]
2. ==i--==
- if removed index --
![[Pasted image 20250207114736.png]]
1. ==from end to start==
![[Pasted image 20250207115027.png]]

## Compare
![[Pasted image 20250207115414.png]]

## Searching
### Linear Search
check each element in order until the desired value is found or all elements in the array or ArrayList have been checked
![[Pasted image 20250215153723.png]]

## Sorting
### Selection sort
![[Pasted image 20250215154733.png]]
### Insertion sort
![[Pasted image 20250215155309.png]]

# Bill Barnum Notes
- We can set a double variable equal to an integer, it will automatically convert into a double. But we **can't** set an integer variable equal to a decimal.
- **Casting**: e.g. a = (int) 3.99  //cuts everything off after the decimal point
-  System.out.println (5.0 / 3)  //result is a double
- System.out.println (5 / 0)  //error
- System.out.println (5 / 0.0)  //Infinity
- System.out.println (0.0 / 0.0)  //NaN (not a number)

## Order of Operation

![[Pasted image 20250112182849.png]]

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

## Nested Loop
a loop that is declared inside another loop
- each time the outer loop runs once, the inner loop will go thru a complete cycle
- 计算次数：
	- for (int i = 30; i < 300; i++)
	- i: \[30, 300) or \[30, 299]
	- 次数：300-30=270 or 299-30+1=270

# Inheritance
- for reusing code (复用代码；减少冗余度)
- It is a relationship between a more general class and a more specialized class
- superclass --> subclass
- only instance variables and methods can be inherited, constructors cannot

## Property
A subclass. . .
1. Inherits instance variables and methods of its superclass
2. Cannot inherit constructors
3. Can add new instance variables and methods
4. Cannot directly access private variables or methods in superclass (can be access through accessor or the key word "super")
5. Can **change / redefine** (override) a method of the superclass
A superclass cannot use variables or methods that are declared in the subclass
![[Pasted image 20250220155431.png]]

## Creating Subclasses
### key word: extends
 ![[Pasted image 20250220152629.png]]
 B继承自A

### key word: super
#### Syntax
`super()`
call a superclass's non-parameter constructor
`super(<parameter list>)`
call a superclass's constructors with parameters
`super.method(<parameter list>)`
call a superclass's methods
#### 用法1：constructor
- 把括号里的参数传到了父类的构造器中
- 用于子类构造器，若其中参数与父类构造器参数同名
- **必须放在子类构造器的第一行**，否则会报错
- if there's no explicit use of super in a subclass's constructor, Java calls the superclass's **no-argument constructor**; if it doesn't exist --> error
```java
\\superclass
public class Person{
	private String name;
	private int age;
	
	\\constructor
	public Person(String name, int age){
		this.name = name;
		this.age = age;
	}
}

\\subclass
public Student{
	private double gpa;
	
	\\constructor
	public Student(String name, int age, double gpa){
		super(name,age); \\代表把name,age传入了父类构造器
		this,gpa = gpa;
	}
}
```

#### 用法2：method
- 通过使用super.父类方法来进行override (重写)
- 可理解为在子类方法中调用了父类的方法写了一个同名方法，即可对子类中的变量进行操作

## Polymorphism 多态
means "having many forms"

```java
Person obj1 = new Person();
Person obj2 = new Student();
//declared type: Person  actual type: Student
//父在前，子在后，可以；反之，不行
```
A polymorphic reference can refer to different objects at different times
- At compile time  
methods in or inherited by the declared type determine the correctness of a non-static method call
- At run-time
the method in the actual object type is executed for a non-static method call
![[aa.png]]

# Recursion
A method that calls itself
## Recursive Searching and Sorting
(无须会写代码)
### Binary Search 二分查找
- data must be **sorted** in order
- 从ArrayList中间开始，每次砍半
- more **efficient** than sequential/linear search
- algorithm can be written either iteratively or recursively
  ![[Pasted image 20250222104748.png]]
1. target < middle --> 在小的数列找，上限下调
2. target > middle --> 在大的数列找，下限上调

loop![[Pasted image 20250222105521.png]]
recursion![[Pasted image 20250222105608.png]]

### Merge Sort 归并排序
divides the list in half, recursively sorts the two half lists, and then merges the two sorted half lists together![[Pasted image 20250222105853.png]]
![[Pasted image 20250222110013.png]]

## Errors

1. **Compile time error** (language)
	- syntax
	- type mismatch
	- spelling mistakes
	- accessing non-static fields in static context
	- incorrect method calls
	- ==声明只能有一次，赋值可以有多次==
2. **Run-time error** (logic)
	- Division by zero (`ArithmeticException`)
	- Accessing an array index out of bounds (`ArrayIndexOutOfBoundsException`)
	- Dereferencing a `null` object (`NullPointerException`)
	-  Infinite loops (logic error leading to non-termination)
	- Invalid type casts (`ClassCastException`)

## Unit 3
**Short-circuited evaluation** 
	- the second boolean value is not reached
	- e.g. false &&
	- e.g. true ||
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
> - e.g.
>   ![[Pasted image 20241212215942.png|400]]
>   



## If-statements
1. if () {}
2. if () {} else {}
3. if () {} else if {} else {}
4. if () {} if () {}
**if statements 中，有 else 代表互斥，if 和 else 不能同时执行; 两个 if 代表并列**
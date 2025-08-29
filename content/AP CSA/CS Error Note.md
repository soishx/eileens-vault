---
publish: false
created: 2025-04-23T19:51:27.2727+08:00
modified: 2025-08-29T12:06:59.5959+08:00
---
## Unit 1
Consider the following static method:
```
public static int calculate(int x) { 
	x = x + x; x = x + x; x = x + x; 
	return x;
} 
```
Which of the following can be used to replace the body of calculate so that the modified version of calculate will return the same result as the original version for all x ?
![[Pasted image 20250423195545.png]]

![[Pasted image 20250423195817.png]]

- **以上两道题：变量赋了新的值以后的计算要用新的值算**
---




![[Pasted image 20250423195729.png]]
- 9 / 4 默认为 int

## Unit 2
![[Pasted image 20250423211233.png]]
- possible range of rolling 2 cubes: \[2, 12]
- (int) (Math.random()\*6): \[0,5]

![[Pasted image 20250423211857.png]]
- the second parameter of printProduct is int but num2 is double

## Unit 3
![[Pasted image 20250424083332.png]]
- the representation of decimals in binary numbers cause tiny errors

![[Pasted image 20250424130343.png]]
- && 比 || 优先运算，所以最后一个 if 可以执行 [[Bill Barnum Notes#Order of Operation|Operator Precedence]]

Consider the following class declaration

```
public class SomeClass

{

  private int num;

  public SomeClass(int n)

  {

    num = n;

  }

  public void increment(int more)

  {

    num = num + more;

  }

  public int getNum()

  {

    return num;

  }

}
```

The following code segment appears in another class.
```
SomeClass one = new SomeClass(100);

SomeClass two = new SomeClass(100);

SomeClass three = one;

one.increment(200);

System.out.println(one.getNum() + " " + two.getNum() + " " +

                   three.getNum());
```
What is printed as a result of executing the code segment?
![[Pasted image 20250424131349.png]]
- three and one share the same memory address (object), which is incremented 200.
- only "new" keyword create new memory address (object)

Consider the following class definitions.

```
public class Person

{

private String name;

public String getName()

{  return name;  }

}

public class Book

{

private String author;

private String title;

private Person borrower;

public Book(String a, String t)

{

author = a;

title = t;

borrower = null;

}

public void printDetails()

{

System.out.print("Author: " + author + " Title: " + title);

if ( /* missing condition */ )

{

System.out.println(" Borrower: " + borrower.getName());

}

}

public void setBorrower(Person b)

{  borrower = b;  }

}
```
Which of the following can replace /* missing condition \*/ so that the printDetails method CANNOT cause a run-time error?

1. !borrower.equals(null)
2. borrower != null
3. borrower.getName() != null
![[Pasted image 20250424132731.png]]
- I and III throw NullPointerException [[Runtime & Compile-time Errors|Runtime & Compile-time Errors]]

Consider the following method.

##### public int mystery(int num)
##### {
##### int x = num;
##### while (x > 0)
##### {
##### if (x / 10 % 2 == 0)
##### return x;
##### x = x / 10;
##### }
##### return x;
##### }

What value is returned as a result of the call mystery(1034) ?
![[Pasted image 20250425081205.png]]
- if (x / 10 % 2 == 0) 注意：用 x 进行判断，没有改变 x 本身


## Unit 4
**!!!**
```
public static String abMethod(String a, String b)

{

int x = a.indexOf(b);

while (x >= 0)

{

a = a.substring(0, x) + a.substring(x + b.length());

x = a.indexOf(b);

}

return a;

}
```
What, if anything, is returned by the method call abMethod("sing the song", "ng") ?
![[Pasted image 20250425082235.png]]
- **Generally, str.substring(str.length()) returns an empty string.** It doesn't throw out of bounds error

Consider the following output.

![The output depicted in five lines.  Line 1: 1, 1, 1, 1, 1. Line 2: 2, 2, 2, 2. Line 3: 3, 3, 3. Line 4: 4, 4. Line 5: 5.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/e15b75173968c10f81ff33d50fedfdd4/original.jpg)

Which of the following code segments will produce this output?

（单选题）

- A .
    
    ![Option A shows an 8-line code segment that reads as follows. Line 1: for, open parenthesis, int j equals 1, semicolon, j less than or equal to 5, semicolon, j, plus, plus, close parenthesis. Line 2: open brace. Line 3: for, open parenthesis, int k equals 1, semicolon, k less than or equal to 5, semicolon, k, plus, plus, close parenthesis. Line 4: open brace. Line 5: System, dot, out, dot, print, open parenthesis, j plus, open double quote, space, close double quote, close parenthesis, semicolon. Line 6: close brace. Line 7: System, dot, out, dot, print l n, open parenthesis, close parenthesis, semicolon. Line 8: close brace.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/c70e8d3e18c7967dc28079a8d5684a29/original.jpg)
    
- B .
    
    ![Option B shows an 8-line code segment that reads as follows. Line 1: for, open parenthesis, int j equals 1, semicolon, j less than or equal to 5, semicolon, j, plus, plus, close parenthesis. Line 2: open brace. Line 3: for, open parenthesis, int k equals 1, semicolon, k less than or equal to j, semicolon, k, plus, plus, close parenthesis. Line 4: open brace. Line 5: System, dot, out, dot, print, open parenthesis, j plus, open double quote, close double quote, close parenthesis, semicolon. Line 6: close brace. Line 7: System, dot, out, dot, print l n, open parenthesis, close parenthesis, semicolon. Line 8: close brace.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/18ec36991a5f11c5f51b2de381fcee5d/original.jpg)
    
- C .
    
    ![Option C shows an 8-line code segment that reads as follows. Line 1: for, open parenthesis, int j equals 1, semicolon, j less than or equal to 5, semicolon, j, plus, plus, close parenthesis. Line 2: open brace. Line 3: for, open parenthesis, int k equals 5, semicolon, k greater than or equal to 1, semicolon, k, minus, minus, close parenthesis. Line 4: open brace. Line 5: System, dot, out, dot, print, open parenthesis, j plus, open double quote, space, close double quote, close parenthesis, semicolon. Line 6: close brace. Line 7: System, dot, out, dot, print l n, open parenthesis, close parenthesis, semicolon. Line 8: close brace.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/f0d1712655043546dfda64a97d4d32e7/original.jpg)
    
- D .
    
    ![Option D shows an 8-line code segment that reads as follows. Line 1: for, open parenthesis, int j equals 1, semicolon, j less than equal to5, semicolon, j, plus, plus, close parenthesis. Line 2: open brace. Line 3: for, open parenthesis, int k equals 5, semicolon, k greater than or equal to j, semicolon, k, minus, minus, close parenthesis. Line 4: open brace. Line 5: System, dot, out, dot, print, open parenthesis, j plus, open double quote, space, close double quote, close parenthesis, semicolon. Line 6: close brace. Line 7: System, dot, out, dot, print l n, open parenthesis, close parenthesis, semicolon. Line 8: close brace.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/a75af810636f418305343806d083ade3/original.jpg)
    
    ![correct](https://student.testdaily.cn/static/img/correct.20a18363.svg)
- E .
    
    ![Option E shows an 8-line code segment that reads as follows. Line 1: for, open parenthesis, int j equals 1, semicolon, j less than or equal to 5, semicolon, j, plus, plus, close parenthesis. Line 2: open brace. Line 3: for, open parenthesis, int k equals j, semicolon, k less than or equal to 5, semicolon, k, plus, plus, close parenthesis. Line 4: open brace. Line 5: System, dot, out, dot, print, open parenthesis, k plus, open double quote, space, close double quote, close parenthesis, semicolon. Line 6: close brace. Line 7: System, dot, out, dot, print l n, open parenthesis, close parenthesis, semicolon. Line 8: close brace.](https://assets.learnosity.com/organisations/537/media.academicmerit.com/248d5daf2d4c95027d5f4830e22a9d9c/original.jpg)
- ~~E~~ D
- E prints different numbers on the same line

## Unit 5

In the Toy class below, the raisePrice method is intended to increase the value of the instance variable price by the value of the parameter surcharge. The method does not work as intended.

```
public class Toy
{
private String name;
private double price;
public Toy(String n, double p)
{
name = n;
price = p;
}
public void raisePrice(double surcharge) // Line 12
{
return price + surcharge; // Line 14
}
```
Which of the following changes should be made so that the class definition compiles without error and the method raisePrice works as intended?

- A .
    Replace line 14 with surcharge += price;.
- B .![correct](https://student.testdaily.cn/static/img/correct.20a18363.svg)
    Replace line 14 with price += surcharge;.
- C .
    Replace line 14 with return price += surcharge;.
- D .
    Replace line 12 with public raisePrice (double surcharge).
- E .
    Replace line 12 with public double raisePrice (double surcharge).
- not E bc it doesn't change the value of price

**!!! cast时一定注意会不会损失小数部分**
Consider the following class that stores information about temperature readings on various dates.

```
public class TemperatureReading implements Comparable
{
   private double temperature;
   private int month, day, year;

   public int compareTo(Object obj)
   {
      TemperatureReading other = (TemperatureReading) obj;
      /* _missing code_ */
   }

   // There may be instance variables, constructors, and methods that are not shown.
}
```

Consider the following code segments that are potential replacements for /\* \_missing code\_ \*/.

I. 
```
   Double d1 = new Double(temperature); 
   Double d2 = new Double(other.temperature);

   return d1.compareTo(d2);
```

II. 
```
   if (temperature < other.temperature)
   {
      return -1;
   }
   else if (temperature == other.temperature)
   {
      return 0;
   }
   else
   {
      return 1;
   }
```

III. 
```
   return (int) (temperature - other.temperature);
```

Which of the code segments could be used to replace /* \_missing code\_ \*/ so that compareTo can be used to order TemperatureReading objects by increasing temperature value?
- A .
    II only
- B .
    ![correct](https://student.testdaily.cn/static/img/correct.20a18363.svg)
    I and II only
- C .
    I and III only
- D .
    II and III only
    ![wrong](https://student.testdaily.cn/static/img/wrong.13227cfd.svg)
- E .
    I, II, and III

## Unit 7
Consider the following statement, which is intended to create an ArrayList named values that can be used to store Integer elements.

/* missing code */ = new ArrayList<>();

Which of the following can be used to replace /* missing code */ so that the statement compiles without error?

1. ArrayList values
2. ArrayList\<int> values
3. ArrayList\<Integer> values
**Correct answer: 1 & 3**

---
Consider the following correct implementation of the selection sort algorithm.

public static void selectionSort(int[] elements)

{

for (int j = 0; j < elements.length - 1; j++)

{

int minIndex = j;

for (int k = j + 1; k < elements.length; k++)

{

if (elements[k] < elements[minIndex])

{

minIndex = k;

}

}

if (j != minIndex)

{

int temp = elements[j];

elements[j] = elements[minIndex];

elements[minIndex] = temp;    // Line 19

}

}

}

The following declaration and method call appear in a method in the same class as selectionSort.

int[] arr = {9, 8, 7, 6, 5};

selectionSort(arr);

How many times is the statement elements[minIndex] = temp; in line 19 of the method executed as a result of the call to selectionSort ?

**Correct answer: 2**

--- 
Consider the following correct implementation of the selection sort algorithm.

public static void selectionSort(int[] elements)

{

for (int j = 0; j < elements.length - 1; j++)

{

int minIndex = j;

for (int k = j + 1; k < elements.length; k++)

{

if (elements[k] < elements[minIndex])

{

minIndex = k;    // Line 11

}

}

if (j != minIndex)

{

int temp = elements[j];

elements[j] = elements[minIndex];

elements[minIndex] = temp;

}

}

}

The following declaration and method call appear in the same class as selectionSort.

int[] vals = {5, 10, 2, 1, 12};

selectionSort(vals);

How many times is the statement minIndex = k; in line 11 of the method executed as a result of the call to selectionSort ?

**Correct answer: 4**

---
## Unit 9

Consider the following class definitions.

public class A

{

    private int al;

    public void methodA()

    {

      methodB();     // Statement  I 

    }

}

public class B extends A

{

    public void methodB()

    {

                methodA();        // Statement II

                al = 0;                 // Statement III

           }

}

Which of the labeled statements in the methods shown above will cause a compile-time error?
- A .
    I only
- B .
    III only
- C .
    I and II
- **D .(correct)**
    I and III
- E .
    II and III
- methodB() is not declared in class A, so I is a error
- al is a private variable in class A, so III is a error

---
The following questions refer to the following classes:

public class First
{
   public String name()
   {
      return "First";
   }
}

public class Second extends First
{
   public void whoRules()
   {
      System.out.print(super.name() + " rules");
      System.out.println(" but " + name() + " is even better");
   }

   public String name()
   {
      return "Second";
   }
}

public class Third extends Second
{
   public String name()
   {
      return "Third";
   }
}

Consider the following code segment.

/* SomeType1 */ varA = new Second();
/* SomeType2 */ varB = new Third();

varA.whoRules();
varB.whoRules();

Which of the following could be used to replace /* _**SomeType1**_ */ and /* _**SomeType2**_ */ so that the code segment will compile without error?

|   |   |   |
|---|---|---|
||/* _**SomeType1**_ */|/* _**SomeType2**_ */|
|**I.**|First|Third|
|**II.**|Second|Second|
|**III.**|Third|Third|

- A .
    I only
- **B .(correct)**
    II only
- C .
    III only
- D .
    I and II
- E .
    II and III

- The declaration can help us cross out III
- but class First doesn't have a whoRules() method, so varA can't call it, so I is wrong
--- 

The following questions refer to the following classes:

public class First
{
   public String name()
   {
      return "First";
   }
}

public class Second extends First
{
   public void whoRules()
   {
      System.out.print(super.name() + " rules");
      System.out.println(" but " + name() + " is even better");
   }

   public String name()
   {
      return "Second";
   }
}

public class Third extends Second
{
   public String name()
   {
      return "Third";
   }
}

Consider the following code segment.

*Second varSecond = new Second();*
*Third varThird = new Third();*

*varSecond.whoRules();*
*varThird.whoRules();*

What is printed as a result of executing the code segment?

- A .
    First rules but Second is even better
    First rules but Second is even better
- **B .(correct)**
    First rules but Second is even better
    First rules but Third is even better

- **Method Overriding is dynamic (runtime)** ^b04da4
    - The method that gets called **depends on the actual object type**, not the variable type. (**dynamic dispatch** in Java.)
- **`super.name()`** means: "call the `name()` method from my superclass (`First`) **statically**" — this doesn't use dynamic dispatch.
- **`name()`** (without `super.`) means: "call the overridden version of `name()` ==**from the actual class of the object**==" — this **does** use dynamic dispatch.
The following is another question using this knowledge:
![[18e3f9bd0358ac8025a673c4aeee497.png]]

---

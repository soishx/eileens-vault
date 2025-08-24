---
publish: false
created: 2025-02-20T15:21:28.2828+08:00
modified: 2025-08-24T10:06:15.1515+08:00
---
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
```
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

```
Person obj1 = new Person();
Person obj2 = new Student();
\\declared type: Person  actual type: Student
\\父在前，子在后，可以；反之，不行
```
A polymorphic reference can refer to different objects at different times
- At compile time  
methods in or inherited by the declared type determine the correctness of a non-static method call
- At run-time
the method in the actual object type is executed for a non-static method call
![[aa.png]]

## Object Superclass


 

 
 
 
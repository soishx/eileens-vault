---
publish: false
created: 2025-02-22T09:51:10.1010+08:00
modified: 2025-08-25T08:48:09.099+08:00
---
A method that calls itself

## Examples
### Fibonacci
```java
public static int fibonacci(int n){
	//base case
	if(n==1 || n==2){
		return 1;
	}
	
	//recursion call
	else{
		return fibonacci(n-1)+fibonacci(n-2);
	}
}
```

### Factorial
#### Recursion
```java
public static int factorial(int n){
	//base case
	if(n==1){
		return 1;
	}
	
	//recursion call
	else{
		return n*factorial(n-1);
	}
}
```

#### Loop
```java
public static int factorial(int n){
	int product = 1;
	for(int i = n;i>=1;i--){
		product = product*1;
	}
	return product;
}
```

### Recursive Searching and Sorting
(无须会写代码)
#### Binary Search 二分查找
- data must be **sorted** in order
- 从ArrayList中间开始，每次砍半
- more **efficient** than sequential/linear search
- algorithm can be written either iteratively or recursively
  ![[Pasted image 20250222104748.png]]
1. target < middle --> 在小的数列找，上限下调
2. target > middle --> 在大的数列找，下限上调

loop![[Pasted image 20250222105521.png]]
recursion![[Pasted image 20250222105608.png]]

#### Merge Sort 归并排序
divides the list in half, recursively sorts the two half lists, and then merges the two sorted half lists together![[Pasted image 20250222105853.png]]
![[Pasted image 20250222110013.png]]

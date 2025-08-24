---
publish: true
created: 2025-02-03T16:07:26.2626+08:00
modified: 2025-08-24T10:17:34.3434+08:00
---
- the size of an array **cannot** be changed once it's created

## Declaration and Initialization
```
   int[] arr = new int[5]; // creates an array of length 5
   int[] arr2 = {1, 2, 3, 4, 5}; // direct initialization
```

## For-each loop
- used for array and arraylist
- aka enhanced for-loop
- **只读**，修改的是参数的副本，不影响参数（**这一性质只针对primitive types**, 不针对reference types）
```
   for (typeName variableName : arrayName){
	//statements
   }
```

## Common Algorithms
### Maximum / Minimum
用maximum举例
```
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
```
	   int largest = Integer.MIN_VALUE;
```

### Sum and Average
```
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
```
for(int element : values){
	if(element < 60){
		return false;
	}
}
return true;
```

### Count Numbers
```
int count = 0;
for(int element : values){
	if(element > 90){
		count++;
	}
}
return count;
```

### !! Reverse Arrays
```
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
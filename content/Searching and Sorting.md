---
publish: true
created: 2025-04-28T15:40:34.3434+08:00
modified: 2025-08-25T08:48:22.2222+08:00
---
## Searching
### Linear Search
check each element in order until the desired value is found or all elements in the array or array list have been checked
```java
public static int linearSearch(int[] numbers, int target){
	for (int index = 0; index < numbers.length; index++){
		if (target == numbers[index]){
			return index;
		}
	}
	return -1;
}
```

## Sorting
### Selection sort
For each element in an array,
- find the smallest number in remaining array
- swap the current value and the smallest value
```java
public static void selectionSort(int[] numbers){
	int min, temp;
	for(int index = 0; index < numbers.length — 1; index++){
		min = index;
		for(int scan = index + l; scan < numbers.length; scan++)
			if(numbers[scan] < numbers[min]) min = scan;

		// swap
		temp = numbers[min];
		numbers[min] = numbers[index];
		numbers[index] = temp;
	}
}
```
### Insertion sort
Starting from index 1,
- shift larger values to the right
- insert the current value in the proper position
```java
public static void insertionSort(int[] numbers){
	for(int index = 1; index < numbers.length; index++){
	int key = numbers[index];
	int position = index;

	// shift larger values to the right
	while(position > 0 && numbers[position - l] > key){
		numbers[position] = numbers[position - 1];
		position--;
	}
	numbers[position] = key;
	}
}
```



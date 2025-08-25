---
publish: false
created: 2025-08-24T08:16:43.4343+08:00
modified: 2025-08-25T08:44:06.066+08:00
---
## Selection Sort
```java
public static void selectionSort(int[] arr) {
	int n = arr.length;

	// One by one move the boundary of the unsorted part
	for (int i = 0; i < n - 1; i++) {
		int minIndex = i;

		// Find the minimum element in the unsorted part
		for (int j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}

		// Swap the found minimum element with the first element of unsorted part
		int temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
}
```

## Insertion Sort
```java
public static void insertionSort(int[] arr) {
	for (int i = 1; i < arr.length; i++) {
		int current = arr[i];
		int j = i - 1;

		// Shift elements of arr[0..i-1] that are greater than current
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}

		// Insert current into correct position
		arr[j + 1] = current;
	}
}
```
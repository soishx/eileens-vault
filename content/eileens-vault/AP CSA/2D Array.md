---
publish: true
created: 2025-02-15T16:35:01.011+08:00
modified: 2025-08-24T11:13:40.4040+08:00
---
## Declaration and Initialization
```
int[][] values = new int[3][4]; \\顺序是[行][列]
int[][] values = {{5,8,7,2},{0,1,-1,-3}{1,3,0,2}};
```

## Access
- access an individual element: `int number = values[i][j];`
- access the ith row: `int[]number = values[i];`
- get the number of rows: `int r = values.length;`
- get the number of columns: `int c = values[0].length;`

## Traversal
### row-major order 行优先遍历
```
for(int r = 0; r < values.length; r++){
	for(int c = 0; c < values[0].length; c++){
		//value[r][c]
	}
}
```

### column-major order 列优先遍历
```
for(int c = 0; c < values[0].length; c++){
	for(int r = 0; r < values.length; r++){
		//value[r][c]
	}
}
```

### for-each loops
```
for(int[] row: values){
	for(int element: row){
		System.out.print(element + " ");
	}
	System.out.println();
}
```

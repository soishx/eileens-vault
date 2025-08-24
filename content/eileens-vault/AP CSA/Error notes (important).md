---
publish: false
created: 2025-02-19T19:40:28.2828+08:00
modified: 2025-08-24T10:04:39.3939+08:00
---

- remember that the **instance variable must be used in the conductor** (do NOT create new local variables and assign values)
- **when calling a method, parentheses must be added** regardless of whether the method has parameters or not)
- in general, **public methods** in a class **cannot** be called from another class unless:
	1. **The class is referenced explicitly** (e.g., `ClassName.method()` for static methods).
	2. **The method is called on an instance** of that class (e.g., `obj.method()` for instance methods).

注意method的作用范围
![[Pasted image 20250222093606.png]]

**！题型：**
intended to return true if \[condition\], return false otherwise
- initialize: 两种 condition 中更难达到的那种
	- e.g. check if an int\[\] is decreasing --> initialize to true
- 用循环检查，发现反例则赋值为相反boolean value


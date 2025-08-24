---
publish: false
created: 2025-04-24T13:23:02.022+08:00
modified: 2025-08-24T10:04:53.5353+08:00
---
## 🧱 **Compile-Time Errors** (Detected during compilation)

> 🧠 Think: **"Syntax and type rules broken"** — Java can’t even build the program.

### 🔹 Types

1. **Syntax Errors**
    
    - Missing semicolons
        
    - Unmatched brackets/braces/parentheses
        
    - Incorrect use of Java keywords
        
2. **Type Errors**
    
    - Incompatible types (e.g., assigning a `double` to an `int` without a cast)
        
    - Calling a method with the wrong parameter types
        
    - Using undeclared variables
        
3. **Missing Class or Method Definitions**
    
    - Trying to instantiate an undefined class
        
    - Calling a non-existent method
        
4. **Access Errors**
    
    - Trying to access private members from outside the class
        
    - Using incorrect static vs. non-static context
        

---

## 💥 **Runtime Errors** (Occur while the program is running)

> 🧠 Think: **"Program builds but crashes during execution"**

### 🔸 Types

1. **NullPointerException**
    
    - Accessing a method or field of a `null` reference
        
2. **ArithmeticException**
    
    - Division by zero
        
3. **ArrayIndexOutOfBoundsException**
    
    - Accessing an array index that doesn’t exist
        
4. **ClassCastException**
    
    - Improper casting between unrelated types
        
5. **IllegalArgumentException**
    
    - Passing invalid arguments to methods (common in math/util libraries)
        
6. **StringIndexOutOfBoundsException**
    
    - Accessing invalid index of a string (e.g., `charAt(-1)` or `charAt(length)`)
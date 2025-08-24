---
created: 2024-11-11T21:16:05.055+08:00
modified: 2025-08-23T23:54:55.5555+08:00
publish: "false"
---
## Describing Scatterplot
- SOFA
	1. strength
	2. outliers
	3. form (linear or curved)
	4. association (+ or -)

### Correlation Coefficient (r)
- A quantitative assessment of the **strength** and **direction** of the **linear** relationship in bivariate, quantitative data
- Properties
	1. -1≤r≤1
		- r = 1: perfect linear positive
		- r = -1: perfect linear negative
		- r = 0: no linear correlation
	2. value of r is **not changed by any linear transformation** (but if the multiplying factor is negative, the result is -r)
	3. value of r does not depend on which of the two variables is labeled x
	4. value of r is **affected by extreme values**
	5. value of r is a measure of the extent to which x and y are **linearly** related

### Linear Regression
- a **line of best fit** always passes through the **mean point**, ($\bar{x}$, $\bar{y}$)
- LSRL:  $\hat{y}$ = a + bx
	- **affected by extreme values**
	- [[Interpretations#Slope of LSRL|interpretation of b]]
	- should **NOT** be used make predictions for y using x-values **outside** the range of the data set
	- regression line of y on x should **not be used to predict x** (bc it's not the line that minimizes the sum of the squared deviations in the ==x direction==)

### Coefficient of Determination ($r^2$)
- $0≤r^2≤1$

$r^2$ amount of **variation** in y is accounted for by the regression line (how well a regression line fits the data)

**Interpretation:** $r^2$ is the ==proportion of the variance== in the dependent variable that is ==predictable== from the independent variable(s).

### Residual
- residual = $y - \hat y$
- residual plot is a scatter plot of (x, residual) pairs
- **There shouldn't be a pattern on the residual plot if the linear model is appropriate**

**Compare**
- outlier: large residual (affects r)
- influential point: away in x-direction (affects slope of LSRL)


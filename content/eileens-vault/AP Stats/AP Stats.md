---
created: 2025-05-07T20:37:44.4444+08:00
modified: 2025-08-23T23:54:54.5454+08:00
publish: "false"
---
# Chapter 4 Bivariate Data
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

![[stats.png]]
# Find median, Q1, and Q3
## Odd Number of Data Points
- median: (n+1)/2
- Q1: exclude the median and find median of the lower half
- Q3: exclude the median and find median of the upper half

## Even Number of Data Points
- median: (n+(n+1))/2
- Q1: median of the first half of numbers (including the nth number), which is an odd number of numbers)
- Q3: median of the second half of numbers

# Interpretations
## How to interpret the **expected value** (mean) of a binomial distribution / geometric distribution?
1. BPD: The mean is the average amount of [context] that result from the long run of many, many trials of randomly selecting [context].
2. GPD: The mean is the average amount of [context] that result from the long run of many, many trials of randomly selecting [context] until success (context) or the xth trial is reached. (x is the maximum trial given in the table)

## Slope of LSRL
The average of [dependent variable] increases/decreases by approximately [slope] for each increase in [independent variable].

## Correlation Coefficient (r)
There is a strong/weak, positive/negative, linear relationship between [dependent variable] and [independent variable].

# Observation & Experiment

---

- **Observational studies** CAN be 
==generalized== to the population if the 
sample is randomly selected from the 
population of interest, but CANNOT 
show cause-effect relationships

- **Well-designed experiments** CAN show 
==cause-effect== relationships, but CANNOT 
be generalized to the population if the 
groups are volunteers or are not 
randomly assigned.

- - - 
## Compare
- **Extraneous Variables:** These are any unwanted variables that **could** affect the response but are controlled or blocked in the design.
- **Confounding Variables:** These are variables that have **already** affected the response and make it hard to tell if the change is due to the treatment or the confounder.
- - - 
- **Direct Control**: This means keeping extraneous variables **constant** across the experiment so they don't affect the outcome.
- **Blocking**: This is grouping subjects into blocks based on an **extraneous variable** (e.g. gender, age) and applying **all** treatments within each block to control its effect.
- - - 
- **Stratification** is used in **observational studies** to ensure all groups are represented proportionally.
- **Blocking** is used in **experiments** to control extraneous variables.
- - - 
- **Control group**: baseline group
- **Placebo**: a fake treatment given to the control group to rule out psychological effects
- - - 
- **Matched pairs**: Each "pair" consists of subjects that are **as alike as possible**, and one is randomly assigned to each treatment, or the same subject experiences both treatments.
- **Blocked experiment**: Subjects are grouped into blocks **based on an extraneous variable** (e.g., age, gender), and then treatments are **randomly assigned within each block**. This controls for differences between blocks but compares groups within blocks.
- - - 
- **Nonresponse bias**: people are chosen by researchers but refuse to participate
- **Voluntary response**: self-selected


## Sampling problems
1. selection bias
	1. undercoverage
	2. convenience sampling / voluntary response

## Non-sampling problems

2. response bias
3. nonresponse bias

- simple random sample: Every member and set of members has an equal chance of being included in the sample

- **Explanatory variable** are also called **factors**
- **Subjects/ Experimental units**: where treatment applied
- **Random assignment** of subjects to treatments or treatments to trials evenly spreads out extraneous variables that are not controlled to all treatment groups, so they are not confounding.
- **Replication**: multiple observations for each **treatment**

## Experimental Designs
1. completely randomized design: subjects are randomly assigned to different treatment groups
2. randomized block 
3. matched pairs

## Sampling Methods
1. Simple Random Sample: Every member and set of members has an equal chance of being included in the sample.
2. Stratified Random Sampling: The population is first split into groups. The overall sample consists of some members from every group. The members from each group are chosen randomly.
3. Clustered Random Sampling: The population is first split into groups. The overall sample consists of every member from some of the groups. The groups are selected at random.
4. Systematic Random Sampling: elements are selected from a larger population according to a fixed, periodic interval. This method is useful when a complete list of the population is available. (every nth of sth. is selected)
5. Convenience Sampling: a non-probability sampling method where samples are selected based on their ease of access, availability, or proximity to the researcher
6. 



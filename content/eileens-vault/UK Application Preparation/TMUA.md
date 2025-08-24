---
publish: false
created: 2025-08-02T14:30:23.2323+08:00
modified: 2025-08-23T23:55:27.2727+08:00
---
- $a^3-b^3=(a-b)(a^2+ab+b^2)$
- $a^3+b^3=(a+b)(a^2-ab+b^2)$
![[Pasted image 20250802151756.png]]
- ==Find complete squares under cube roots== 
- $-\frac{b}{2a}$==represents the vertex==
- **Factor Theorem**: If 𝒇(𝒙) is a polynomial in 𝒙, then 𝒇(𝒂) = 𝟎 if and only if 𝒙 − 𝒂 is a factor of 𝒇(𝒙)
- **Remainder Theorem**: 
	- When a polynomial 𝒇(𝒙) is divided by (𝒙 − 𝒃) the remainder is 𝒇(𝒃)
	- When a polynomial 𝒇(𝒙) is divided by ($px-q$) the remainder is 𝒇($\frac{q}{p}$)
- **Heavy focuses**
	- arithmetic progressions
	- geometric progressions

## Arithmetic Progressions p. 49
![[Pasted image 20250804144823.png]]

## Geometric Progressions p. 51
![[Pasted image 20250804144923.png]]

## Binomial Expansion p. 55
### Binomial Expansion for Positive Integer $n$

#### 1. Binomial Expansion of $(1 + x)^n$

For **positive integers** $n$, the expansion of $(1 + x)^n$ is:

$$
(1 + x)^n = \sum_{r = 0}^{n} \binom{n}{r} x^r = 1 + nx + \frac{n(n - 1)}{2!}x^2 + \cdots + x^n
$$

- Each coefficient is a **binomial coefficient**:  
  $\binom{n}{r} = \frac{n!}{r!(n - r)!}$
- $n!$ ("n factorial") is the product of all positive integers up to $n$.

#### 2. Binomial Expansion of $(a + f(x))^n$

This is an extension of the same idea. If $f(x)$ is a **simple function** (like $2x$, $3x^2$, or $-x$), then:

$$
(a + f(x))^n = \sum_{r = 0}^{n} \binom{n}{r} a^{n - r} (f(x))^r
$$

You:

- Use the same binomial coefficients  
- Replace $x$ with $f(x)$, which can involve simplifying expressions afterward

## Circular Function
Conditions:
- Standard form: $(x−h)^2+(y−k)^2=r^2$
- For equations with the form $A(x−h)^2+B(y−k)^2=r^2$:
	- A must be equal to B and they both must be greater than zero


## Circle Properties p. 77
1. The perpendicular from the centre to a chord bisects the chord; 
2. The tangent at any point on a circle is perpendicular to the radius at that point; 
3. The angle subtended by an arc at the centre of a circle is twice the angle subtended by the arc at any point on the circumference; 
4. The angle in a semicircle is a right angle; Angles in the same segment are equal; 
5. The opposite angles in a cyclic quadrilateral add to 180°; 
6. The angle between the tangent and chord at the point of contact is equal to the angle in the alternate segment.
### Useful Techniques
1. Angle chasing – filling in all the angles you can using the theorems above and by looking for isosceles triangles (often made up of two radii) or right angles triangles (in the semicircle). 
2. Rotating the diagram – this can often help you get insights into the question. 
3. Adding lines – sometimes adding a tangent or diameter or some other line (e.g., a chord) helps you to find the solution. 
4. Using dynamic methods – learning to move points around on your diagram in a way that does not affect the solution but makes the question easier to solve.

## Sine Rule (Law of Sines)
### Formula:
$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$

Where:
- $a, b, c$ are the sides of the triangle  
- $A, B, C$ are the angles **opposite** those sides

### Use cases:
- Find any other side given **two angles and one side (AAS or ASA)**  
- Find another angle given **two sides and a non-included angle (SSA)**

### Ambiguous Case (SSA case):
cuz 2 angles under 180 can have the same sine value

When given:
- Two sides and an angle **not between them**, i.e. angle-side-side

There may be:
- **No triangle**
- **One triangle**
- **Two possible triangles**

You must be able to:
- **Detect when two triangles are possible**
- Use the **height** (from the known angle to the opposite side) as a benchmark
- Handle **$\sin^{-1}$** values carefully to explore both possible configurations

## Cosine Rule (Law of Cosines)
### Formula:
To find a side:  
$c^2 = a^2 + b^2 - 2ab \cos C$

To find an angle:  
$\cos C = \frac{a^2 + b^2 - c^2}{2ab}$
### Use cases:
- Find the other third side given **two sides and the included angle (SAS)**  
- Find any angle given **three sides**
## Area of Triangle Using $ab \sin C$
### Formula:
$\text{Area} = \frac{1}{2} ab \sin C$

Where:
- $a$ and $b$ are two known sides  
- $C$ is the **included angle**
### Use cases:
- Efficient way to calculate area **without needing height**
- Works in **non-right-angled triangles**

## Radian Measure p. 89
- $\text {arc length} =r \alpha$
- $\text {area of sector} = \frac{1}{2}r^2\alpha$
- Must know proofs of the formulas using $\frac{\alpha}{2\pi}$

## Trigonometric Functions
### Key preliminary note (emphasized by examiners)
- The two given ranges are **different**:  
  - Degrees: $-720^\circ < x \le 720^\circ$ is equivalent to radians $-4\pi < x \le 4\pi$.  
  - Radians: $-2\pi < x \le 2\pi$ is equivalent to degrees $-360^\circ < x \le 360^\circ$.  
  Do not confuse them — the degree range is twice as wide as the radian range.
### General checklist (for each graph)
1. Zeros (x-intercepts)  
2. Amplitude (if applicable) — maximum/minimum $y$ values (sin, cos)  
3. Period — horizontal length of one full cycle  
4. Phase shift (horizontal translation)  
5. Vertical stretch/compression (outside multiplier such as 2)  
6. Tangent functions — vertical asymptotes and period changes  
7. Relative position when plotting sin and cos on same axes (phase shift and intersections)  
8. Difference between adding constants inside the input and multiplying the input by a constant (important for $\sin(2x+\alpha)$ vs $\sin 2(x+\alpha)$)
### Quick reference rules
- $\sin x$: amplitude 1, period $2\pi$, zeros at $x=k\pi$, max at $x=\frac{\pi}{2}+2k\pi$, min at $x=-\frac{\pi}{2}+2k\pi$.  
- $\cos x$: amplitude 1, period $2\pi$, zeros at $x=\frac{\pi}{2}+k\pi$, max at $x=2k\pi$, min at $x=(2k+1)\pi$.  
- Multiply outside by $2$ (e.g. $2\sin x$): amplitude becomes 2, period unchanged.  
- Multiply $x$ by $2$ (e.g. $\sin 2x$): period becomes $\pi$; zeros at $x=k\frac{\pi}{2}$ (degrees: period $180^\circ$).  
- $\tan x$: period $\pi$, zeros at $x=k\pi$, vertical asymptotes at $x=\frac{\pi}{2}+k\pi$.  
- $2\tan x$: same asymptotes, steeper slope.  
- $\tan 2x$: period $\frac{\pi}{2}$, vertical asymptotes at $x=\frac{\pi}{4}+k\frac{\pi}{2}$.
### Specific conclusions expected by examiners
- $2\sin x$ vs $\sin x$: same zeros and period, peaks at $\pm 2$. Same applies to $\cos$.  
- $\sin 2x$ or $\cos 2x$: twice as many cycles in the same interval, extrema every $\frac{\pi}{2}$.  
- $\tan 2x$: double the asymptote frequency (half the period).  
- On same axes, $\cos x = \sin(x+\frac{\pi}{2})$ so $\cos$ is ahead of $\sin$ by $\frac{\pi}{2}$.  
- Intersection points:  
  - $\cos x = \sin x \implies \tan x = 1 \implies x=\frac{\pi}{4}+k\pi$. In $-2\pi < x \le 2\pi$: $x\in\{-\frac{7\pi}{4},-\frac{3\pi}{4},\frac{\pi}{4},\frac{5\pi}{4}\}$.  
  - $\cos x = -\sin x \implies \tan x = -1 \implies x=-\frac{\pi}{4}+k\pi$. In $-2\pi < x \le 2\pi$: $x\in\{-\frac{5\pi}{4},-\frac{\pi}{4},\frac{3\pi}{4},\frac{7\pi}{4}\}$.
### About $\sin(2x+\frac{\pi}{6}),\; \sin(2x-\frac{\pi}{6}),\; \sin 2(x+\frac{\pi}{6}),\; \sin 2(x-\frac{\pi}{6})$
- Coefficient $2$ on $x$ makes the period $\pi$.  
- $\sin(2x+\frac{\pi}{6})=\sin\bigl(2(x+\frac{\pi}{12})\bigr)$ → same as $\sin 2x$ shifted **left** by $\frac{\pi}{12}$.  
- $\sin(2x-\frac{\pi}{6})=\sin\bigl(2(x-\frac{\pi}{12})\bigr)$ → shift **right** by $\frac{\pi}{12}$.  
- $\sin 2(x+\frac{\pi}{6})=\sin(2x+\frac{\pi}{3})$ → shift **left** by $\frac{\pi}{6}$.  
- $\sin 2(x-\frac{\pi}{6})=\sin(2x-\frac{\pi}{3})$ → shift **right** by $\frac{\pi}{6}$.  
- Key trap: the amount of horizontal shift differs depending on whether you add the constant **before** or **after** multiplying by 2.

### Final TL;DR (examiner’s intended takeaways)
- Quickly identify amplitude (outside multiplier), frequency/period (coefficient of $x$), phase shift (input offset), and vertical asymptote locations (tan).  
- When sketching, mark key points: zeros, extrema, and asymptotes, then copy the pattern for each period.  
- Understand the difference in phase shift between $\sin(2x+\alpha)$ and $\sin 2(x+\beta)$.  
- Convert between radians and degrees correctly, noting the interval size differences in the problem.  
- Remember the general solutions for $\cos x = \pm\sin x$ and the specific intersection points in the given range.



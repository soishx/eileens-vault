---
publish: false
created: 2024-11-17T20:04:50.5050+08:00
modified: 2025-08-24T09:12:35.3535+08:00
---
## Charging by Induction
![[Pasted image 20241117200528.png]]
The charged rod will always attract the neutral ball.
- Electroscope 验电器
![[Pasted image 20241117201702.png|100]]
叶片和被检测物体的电荷总是符号相反， 但正负无法确定

## Electric permittivity
- a measurement of the degree to which a material or medium is polarized in the presence of an electric field
- Electric permittivity of free space:![[Pasted image 20241117202949.png|200]]
- of given material: ![[Pasted image 20241117203136.png|80]]   where κ is dielectric (电介质; 等价于绝缘体) constant of the material, κ>1
  
## Coulomb's Law
![[Pasted image 20241117203800.png|100]]
- For any 2 objects that have m & q, electrostatic force is greater than gravitational force
- gravitational force dominate at larger scales bc large systems tend to be ==electrically neutral==

## Electric Field
![[Pasted image 20241119144759.png|400]]
![[Pasted image 20241119144913.png|180]]
- 电场与测试电荷无关
- E points away from + charges and to - charges
- ![[Pasted image 20241119145456.png]] 
	- ==正电荷受到的电场力与电场方向相同==
	- ==负电荷受到的电场力与电场方向相反==
- - -
- Uniform electric field: same (in strength & direction) at every point in the region of space
- ![[Pasted image 20241119151513.png|150]]
- 类似平抛运动
  ![[Pasted image 20241119151724.png|300]]

- Uniformly Charged Semicircle
![[Pasted image 20241120165544.png|450]]
- Uniformly Charged Ring
![[Pasted image 20241120165408.png|450]]

## Electric Flux
![[Pasted image 20241120101241.png|300]]
A的方向是垂直于平面向外
![[Pasted image 20241120101532.png|400]]

## Gauss's Law
- A Gaussian surface is a three-dimensional, closed surface.
- The **total flux** through a **closed Gaussian surface** is proportional to the **charge** enclosed by the Gaussian surface.
- ![[Pasted image 20241120181133.png|200]]
- ![[Pasted image 20241120183026.png|450 ]]
>[!NOTE] 
>导体球：内部电场为0，从表面开始有电场，在球外就好像所有电荷集中在球心
>
>非导体球：从球心处开始就有电场，球心处电场为0
>
>![[Pasted image 20241126141805.png|300]]

![[Pasted image 20241207143854.png]]![[Pasted image 20241207145624.png]]
![[Pasted image 20241207150225.png]]

## Electric Potential
![[Pasted image 20241126150727.png|400]]
- point charge: ![[Pasted image 20241126151059.png|80]]
- ![[Pasted image 20241126152644.png|100]]

### Potential Difference (Voltage 电压)
![[Pasted image 20241126193820.png|300]]
- ![[Pasted image 20241126193359.png|80]]
- 匀强电场：![[Pasted image 20241126154136.png|125]]
- notice the negative sign:
	- the positive plate is at a higher potential
	- **the potential decreases along the electric field lines**

### Conservation of Energy
![[Pasted image 20241126195430.png]]

> [!IMPORTANT]
> ### Relation between E & V
> ![[Pasted image 20241126205945.png|350]](W为电场力做功)
==电场线从电势高处指向电势低处==
- e.g. 两个板都是正电荷，板中间电场强度为0，板外侧电场线向外，指向电势减少的方向
![[Pasted image 20241127171227.png|400]]
### Equipotential Lines
- represent lines of equal electric potential
- aka isolines of electric potential 
- ![[Pasted image 20241126215331.png|550]]
- ΔV between every two lines are equal
- 性质
	- 越接近正电荷，V越接近正无穷
	- 越接近负电荷，V越接近负无穷
	- 在正负电荷的中点，V=0
- 越密集，电场强度E越大
- isolines are **perpendicular** to electric field vectors
- An electric field vector points in the direction of **decreasing** potential
- electric field is greater where isolines are denser

![[Pasted image 20241127102539.png|500 ]]

![[Pasted image 20241203124425.png]]![[Pasted image 20241203124842.png]]
![[Pasted image 20241203123844.png]]
![[Pasted image 20241203152448.png|400]]

## Capacitor
- equivalence
	- 串联和电阻并联算法相同
	- 并联和电阻串联算法相同
	- 两个串联的capacitor电荷量相同，equivalent capacitor 电荷量等于其中一个的电荷量

### calculate capacitance of capacitors of other geometry:
steps:
1. use Gauss's law to find the strength of the electric field between the plates
2. find the potential difference 
3. use potential difference to find the capacitance

![[Pasted image 20241203202323.png]]
![[Pasted image 20241203210403.png|400]]

## Current
![[Pasted image 20250115154752.png]]
- current is a scalar but has direction


![[Pasted image 20250115160212.png]]
- **For nonohmic resistors, $R ≠\frac{dV}{dI}$,  $R=\frac{V}{I}$** at that point

## Resistors in Series and Parallel
- in series: $R_{eq}=R_1+R_2 +R_3$
- in parallel: $\frac{1}{R_{eq}}=\frac{1}{R_1}+\frac{1}{R_2}+\frac{1}{R_3}$
- 串联正比分压
- 并联反比分流

## Electromotive Force
![[Pasted image 20250117150504.png]]
- ideal batteries have negligible internal resistance
- when there is current in a nonideal battery with internal resistance r, the potential difference across the terminals of the battery is$$\Delta V=\epsilon-Ir$$ $$\epsilon =Ir +IR$$

## Kirchhoff's Rules
- A junction in a circuit is a point where three or more conductors meet. 
- A loop is any closed conducting path

### The Junction Rule
aka current rule states that the total amount of current entering a junction must equal the total amount of current exiting that junction
$$\Sigma I_{in}= \Sigma I_{out}$$

### The Loop Rule
 aka voltage rule states that the sum of the potential differences across all circuit elements in a single closed loop must equal zero
 $$\Sigma \Delta V=0$$
 - It is bc of the **conservation of energy**: the net change of potential energy for a charge q making a round trip around a loop must be zero
 - ![[Pasted image 20250117161216.png]]
   (a)==emf方向与电流方向无关==


## Capacitors in Circuits (RC Circuits)
- **A fully charged capacitor acts like an open switch**
- **An uncharged capacitor acts like a wire**

### Charging
![[Pasted image 20250118162522.png]]
time constant tau is a measure of how quickly the capacitor will charge or discharge

$$\tau =R_{eq}C_{eq}$$
$$q(t)=Q_f(1-e^{-t/\tau})$$
![[Pasted image 20250118163313.png|300]]
- After a time equal to RC the capacitor reaches 0.632 of its final value $Q_f=C\epsilon$
$$i(t)=\frac{dq}{dt}=\frac{\epsilon}{R}e^{-t/RC}=I_0 e^{-t/\tau}$$
![[Pasted image 20250118163614.png|300]]

### Discharging
![[Pasted image 20250118163806.png]]
$$q(t)=Q_0e^{-t/\tau}$$
![[Pasted image 20250118164154.png|300]]
$$i(t)=-\frac{dq}{dt}=\frac{Q_0}{RC}e^{-t/RC}=I_0 e^{-t/\tau}$$
![[Pasted image 20250118164214.png|300]]


## Magnetic Field  $\overrightarrow{B}$
a **vector field** that describes the magnetic force exerted on moving charges, electric currents, or magnetic materials
- 同极相斥，异极相吸
- can be produced by magnetic dipoles or combinations of dipoles, but never by monopoles
- magnetic field lines 
	- are tangent to the direction of the field
	- must form **closed loops**
	- points from north pole to south pole externally
## Magnetism
- A **moving charge or a current** creates a magnetic field in the surrounding space 
- The magnetic field exerts a **force** on any **other moving charge or current** that is present in the field
- paramagnetic materials: magnetic dipoles of the material do not remain aligned after the external field is removed *e.g. aluminum, titanium, magnesium*
- ferromagnetic materials: can be permanently magnetized (**remain aligned after the external field is removed**) *e.g. iron, nickel, cobalt*

## Force on Moving Charges
### Magnetic force on moving charges
$$\overrightarrow F_M = q \overrightarrow v \times \overrightarrow B$$
- +q: $\overrightarrow F_M$ 方向和 $\overrightarrow v \times \overrightarrow B$ 方向相同
- -q:  $\overrightarrow F_M$ 方向和 $\overrightarrow v \times \overrightarrow B$ 方向相反
- Unit: tesla, T
- $|\overrightarrow F_M|=|q|vBsin\theta=|q|v_\perp B$
- magnetic force is **always perpendicular** to the velocity, which results in a **uniform circular motion** where  $$r=\frac{mv}{qB}$$
- Lorentz force law: $\overrightarrow F= q( \overrightarrow E + \overrightarrow v \times \overrightarrow B)$
- **Hall effect**: the potential difference created in a conductor by an external magnetic field$$V_{Hall}=E_Hd=v_dBd$$
  ![[Pasted image 20250119104747.png|180]]
### Magnetic force on current-carrying wires
$$\overrightarrow F_M = I \overrightarrow l \times \overrightarrow B$$
#### 两根平行导线之间的磁场力
- 同向电流互相吸引
- 异向电流互相排斥
### Force and torque on a current loop
![[Pasted image 20250119112016.png|400]]
- net force is 0: $F=IaB$
- $$\begin{gathered}
  \tau_{net}=2F \frac{b}{2}sin\phi =IBabsin\phi \\
  \tau_{net}=IBAsin\phi \\
  \end{gathered}$$
## Fields of Moving Charges
### Magnetic field 
- of a moving charged object: $$\overrightarrow B = \frac{\mu_0}{4\pi} \frac{q(\overrightarrow v \times \hat r)}{r^2}$$where $\hat r$ is the unit vector

- of long current-carrying wires: $$B=\frac{\mu_0}{2\pi} \frac{I}{r}$$ where r is the distance from the wire

## Biot-Savart Law
![[Pasted image 20250121120858.png]]
in vector form: $$d\overrightarrow B = \frac{\mu_0}{4\pi} \frac{I(d\overrightarrow l \times \hat r)}{r^2}$$
### Circular current loop

![[Pasted image 20250121133010.png]]

### Infinitely long straight wire

![[Pasted image 20250121133920.png]]

积分的方法
![[Pasted image 20250121134648.png]]

## Ampere's Law
- analogous to Gauss's Law
- $\overrightarrow B \cdot d \overrightarrow l=Bdl \cos \theta = B_\parallel dl$
- integrate along **a closed path** called Amperian loop
- $$\oint \overrightarrow B \cdot d \overrightarrow l = \mu_0 I_{enclosed}$$
- the direction of the integral path ($l$) is arbitrarily chosen but is typically the same direction as the magnetic field to avoid negative sign

## Solenoid
assumptions:
- very long
- B is uniform inside and negligible outside
- rectangular Amperian loop $$B_{sol}=\mu_0 nI=\mu_0 \frac{N}{L} I$$
  where N is the number of coils in the solenoid, and L is the length of the solenoid
  ![[Pasted image 20250123145045.png|250]]

## Electromagnetic Induction
### Motional EMF
![[Pasted image 20250123152626.png||200]]
- the rod is **cutting** magnetic field lines
- magnetic (↓) and electric force (↑) on **electrons** in the rod: $qvB=qE$
- potential difference: $\Delta V = Blv$   where $l$ is the length of the rod
- **the end with the higher potential: direction of  $\overrightarrow v \times \overrightarrow B$**

### Magnetic Flux
![[Pasted image 20250124105558.png|300]]

### Faraday's Law
describes the relationship between changing magnetic flux and the resulting induced emf in the system.
$$\begin{gathered}
|\epsilon_i|_{avg}=|\frac{\Delta\Phi_B}{\Delta t}| \\
|\epsilon_i|_{inst}=|\frac{d\Phi_B}{dt}| \\
\end{gathered}$$

Cause the flux to change:
- changing area ($A$)
- changing magnetic field ($B$)
- changing orientation ($\theta$)

### Lenz's Law
used to determine the direction of an induced emf resulting from a changing magnetic flux

2 expressions:
1. The direction of any magnetic induction effect is such as to oppose the cause of the effect
   *e.g. (refer to figure below) magnetic flux increases because the area increases, so magnetic force is to the left to prevent it*
2. **An induced emf generates a current that creates a magnetic field that opposes the change in magnetic flux**
3. 3 steps to apply Lenz's law:
	1. change in flux: increase/decrease, direction
	2. induced magnetic field: direction
	3. induced current: right-hand rule (4 fingers represent $I$)
	   ![[Pasted image 20250124114642.png|200]]
	   
	*e.g. flux increases into the page, so induced flux must be out of the page, so induced current is counterclockwise*

### Induced Electric Fields
There has to be an **induced electric field** in the conductor caused by the magnetic flux that push the charges around the loop.
![[Pasted image 20250124143358.png|200]]
- the work done on a charge q $$W=\oint \overrightarrow F \cdot d \overrightarrow l =\oint q\overrightarrow E \cdot d \overrightarrow l$$
- induced emf $$\epsilon =\frac{W}{q}= \oint \overrightarrow E\cdot d \overrightarrow l$$
- Faraday's law restated $$\oint \overrightarrow E \cdot d\overrightarrow l= - \frac{d\Phi_B}{dt}$$
- electrostatic fields (created by charges) are conservative (path-independent), **induced electric fields are not conservative** (there's no potential or potential energy associated with it)

## Inductance
the tendency of a conductor to oppose a change in electrical current.
- straight wires are typically modeled as having zero inductance
- inductors *e.g. solenoid* has significant inductance
![[Pasted image 20250124145647.png|250]]
 $$L = \frac{N\Phi_B}{I}=NA \frac{\mu_{core}nI}{I} = \frac{\mu_{core}N^2A}{l}$$
![[Pasted image 20250124152219.png|500]]
## RL Circuit
### Current growth
- **At initial state, the inductor acts like an open switch**
- **At steady state, the inductor acts like a wire**
- Apply Kirchoff's loop rule: $\epsilon -iR - L \frac{di}{dt}=0$
 ![[Pasted image 20250131160834.png|350]]
 ![[Pasted image 20250131160951.png|150]]
$$i = \frac{\epsilon}{R}(1- e ^{-\frac{t}{L/R}})$$
![[Pasted image 20250131162229.png|200]]
- time constant: $\tau = \frac{L}{R}$

#### Summary
- 电容: $\tau = RC$
- 电感: $\tau = \frac{L}{R}$

### Current decay
- **At initial state, the inductor acts like a battery**
- **At steady state, the inductor acts like a wire**
![[Pasted image 20250131195111.png|350]]
![[Pasted image 20250131195136.png|150]]
- Kirchhoff's loop rule: $-iR-L \frac{di}{dt}=0$
![[Pasted image 20250131200218.png|200]]
$$i = I_0e ^{-\frac{t}{L/R}}$$
## LC Circuit
### Electromagnetic oscillation
![[Pasted image 20250131204405.png]]
![[Pasted image 20250201151103.png|100]]
Kirchhoff's loop rule 

$$\frac{d^{2}q}{d t^{2}}=-\frac{1}{L C}q$$
$$\begin{gathered}
q=Q_0 \cos (\omega t+\phi)\\
i=-\omega Q_0 \sin (\omega t+\phi)\\
\end{gathered}$$
$$\begin{gathered}
\omega = \frac{1}{\sqrt{LC}} \\
T= 2\pi \sqrt{LC} \\
\end{gathered}$$

### Energy
magnetic-field energy + electric-field energy = total

$I_{max} = \sqrt \frac{1}{LC}Q_0=\omega Q_0$

conservation of energy 
$$\frac{1}{2} LI_{max}^2= \frac{Q_0^2}{2C}$$



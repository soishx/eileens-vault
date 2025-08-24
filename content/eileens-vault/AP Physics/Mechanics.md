---
publish: false
created: 2024-12-23T19:11:26.2626+08:00
modified: 2025-08-24T09:13:01.011+08:00
---
## Work
- scalar
- only the component of the force **parallel to the displacement** will change total energy
- The component of force **perpendicular to the direction** of the displacement of the system's center of mass can **change the direction of the system's motion without changing the system's KE** (e.g. circular motion)
- 力与运动方向相同：正功
- 力与运动方向相反：负功
- **Work-Energy Theorem**
	- the change in an object's KE is equal to the sum of the work (net work) being done by all forces exerted on the object
	- ![[Pasted image 20241223195158.png|200]]

- The work done by a conservative force is **path-independent** and **only depends on the initial and final configurations**
	- **conservative forces**: gravitational, elastic, electric
	- **nonconservative forces**: friction, air resistance, tension, motor propulsion, push or pull by a person

- **Potential Energy**
	- a system has potential energy if the objects within that system **only** interact with each other through **conservative forces**
	- ![[Pasted image 20241223210706.png|200]]
	- the total potential energy of a system is the **sum of** the potential energy of **each pair** of objects within the system

- **Conservation of Mechanical Energy**
	- if the **work done** on a selected system is **zero** and there are **no nonconservative interactions** within the system, the total mechanical energy of the system is constant

**For an object rotating on a vertical circular track: If the gravitational force is not fully used to provide centripetal force, the object will fall off the vertical track; in other words, the minimum speed at the top of the track is calculated using mv^2/r=mg.**

- **Conservation of Momentum**
	- If the net external force on a system is **zero**, the total momentum of the system is **constant**
	- **Momentum of a system**: the sum of each mass times each velocity or ==the total mass of the system times the velocity of the center of mass of the system.==
	- D ![[Pasted image 20241225125605.png]]
 
## Collisions
- **Elastic**: total kinetic energy of the system is **conserved**
	- 判定 for **elastic** collisions in **one dimension** only: 
		- $v_{1i}+v_{1f}=v_{2i}+v_{2f}$
		- If the **masses are equal**, the objects **swap velocities** after collision
		- If the incoming object is **lighter**, it **bounces back**, the target forward (slower)
		- If the incoming object is **heavier**, it **moves forward** (slower), the target forward
- **Inelastic**: total kinetic energy of the system **decreases**   
	- after: ==move in the same direction==
- **Perfectly inelastic**: the objects stick together and move with the **same velocity** after the collision 
- Momentum is conserved for both elastic and inelastic collisions

## Rotational Kinematics
### Rigid system
- holds its shape
- different points on the system move in different directions during rotation
- most motions can be described as some combinations of **translation** and **rotation**
- All points within a rigid system have the **same angular velocity and angular acceleration**

注意不要漏了+C
![[Pasted image 20250104151217.png]]



## Torque
- Right-hand rule:
  ![[Pasted image 20250104155358.png|250]]
- results only from the force component **perpendicular** to the position vector from the axis of rotation to the point of application of the force

## Rotational Equilibrium
- A system may exhibit rotational equilibrium without being in translational equilibrium **(constant $\omega$),** and vice versa.
- linear and rotational analyses need to be performed independently
- If a rigid system is in static equilibrium, conditions for **both translational and rotational equilibrium** must be met
	- $F_{net}=0$ 
	- $\tau_{net}=0$

支点的分力会提供一部分向上的支持力，这种情况分析torque
![[Pasted image 20250104163109.png]]



==If an object rotates with sliding, its angular momentum L is as follows:
$L=I\omega+rmv$==
(v is tangential velocity)

## Rotational Inertia
- For an object rotating a perpendicular distance r from an axis: $$I=mr^2$$
- For a solid that can be considered as a collection of differential masses: $$I=\int r^2dm$$
### Examples
1. a uniform rod of length L and mass M rotating about one end: $$I=\frac{1}{3}ML^2$$
   $$
   \begin{aligned}
   dm=\frac{M}{L}dr \\
   I=\int_{0}^{L}r^2\frac{M}{L}dr \\
    =\frac{1}{3}ML^2
   \end{aligned}
   $$
   2. about the center of the rod: $$I=\frac{1}{12}ML^2$$
   3. 
      ![[Pasted image 20250106181053.png|400]]
### Parallel-axis theorem
$I=I_{cm}+Md^2$
where M is the total mass of the body and d is the distance from the axis through the center of mass to the rotation axis

### Factors Affecting Rotational Inertia
1. A rigid system's rotational inertia is at a **minimum** when the rotational axis passes through the system's **center of mass**
2. **$r$ ↑, $I$ ↑**

---
- net torque is equal to the **slope** of the graph of angular momentum as a function of time
- angular impulse is equal to the **area under the curve** of the graph of the net external torque as a function of time

## Rolling

### Rolling Without Slipping
- $\Delta x_{cm}=r\Delta  \theta$
- $v_{cm}=r\omega$
- $a_{cm}=r\alpha$
![[Pasted image 20250209105839.png]]
**static friction** often provides the necessary torque
(for a object to roll without slip down a ramp, it must be rough)
#### Energy
$$\begin{array}{l}{{K=\frac{1}{2}m v_{\mathrm{{cm}}}^{2}+\frac{1}{2}I\omega^{2}}}\\ {{\ }}\\ {{=\frac{1}{2}m v_{\mathrm{{cm}}}^{2}+\frac{1}{2}I\left(\frac{v_{\mathrm{{cm}}}}{R}\right)^{2}}}\end{array}$$
- in ideal rolling without slipping: **frictional force does not dissipate any energy** from the rolling system

---
find $a_{cm}$ (2 methods)
1. N2L
	1. 移轴到边缘
	2. 受力分析
	3. F=ma
2. energy conservation
	1. 能量守恒求$v_{cm}$
	2. $v^2=v_0^2+2ax$

### Rolling With Slipping
![[Pasted image 20250301170514.png]]
![[Pasted image 20250301170737.png]]
![[Pasted image 20250301183653.png]]
$v_{cm}$和$\omega r$趋向于相等(变成rolling without slipping)

1. velocity of the contact point
	1. $v_{contact}=v_{cm}-r\omega$
2. compare (friction is in opposite direction from $v_{contact}$)
	1. if $v_{contact}>0$ (same as $v_{cm}$), friction decreases $v_{cm}$
	2. if $v_{contact}<0$ (opposite from $v_{cm}$), friction increases $v_{cm}$

## Motion of Orbiting Satellites
- ==Circular orbits==: the system's total mechanical energy, the system's gravitational potential energy, and the satellite's angular momentum and kinetic energy are constant.
- ==Elliptical orbits==: the system's total mechanical energy and the satellite’s angular momentum are constant, but the system's gravitational potential energy and the satellite's kinetic energy can each change.
--- 
- Total mechanical energy can be represented in terms of gravitational potential energy
  $$\begin{aligned}\\
U_{g}=- \frac{GMm}{r}\\
K=- \frac{1}{2} U = \frac{GMm}{2r} ( \frac{GMm}{r^2}=\frac{mv^2}{r})\\
E_{total}=K+U= \frac{1}{2} U= - \frac{GMm}{2r}
\end{aligned}$$

### Kepler's 1st Law
Planets follow elliptical orbits, with the Sun at one focus of the ellipse
### Kepler's 2nd Law
A line from the sun to a given planet sweeps out equal areas in equal times -->**conservation of angular momentum**
$mr_1v_1=mr_2v_2$
### Kepler's 3rd Law
ratio $\frac{T^2}{a^3}$ is constant for all planets orbiting the same star

$$\begin{aligned} 
\frac{GMm}{r^2}=mr\omega^2\\
\frac{GMm}{r^2}=mr\left( \frac{2\pi}{T} \right)^2\\
\frac{T^2}{a^3} = \frac{4\pi^2}{GM}\\
\end{aligned}
$$
### Escape Velocity
- the satellite's velocity such that the mechanical energy of the satellite-sun system is equal to zero
$$\begin{aligned} 
E_{total}=K+U=\frac{1}{2}mv^2- \frac{GMm}{r}\\
v_{esc}=\sqrt{\frac{2GM}{r}}\\
\end{aligned}
$$
## Oscillations
### Simple Harmonic Motion
- A special case of periodic motion where the magnitude of the restoring force is proportional to the object's displacements from its equilibrium position
#### Horizontal Mass-Spring System
- differential equation: $\frac{d^2x}{dt^2}=- \frac{k}{m}x$
- specific solution 1: $x=A \cos(\omega t)=A \cos ( \sqrt{\frac{k}{m}} t)$
- specific solution 2: $x=A \sin(\omega t)=A \sin ( \sqrt{\frac{k}{m}} t)$
- $T=2 \pi \sqrt{\frac{m}{k}}$
![[Pasted image 20250304113527.png]]
![[Pasted image 20250304113943.png]]

#### Vertical Mass-Spring System
![[Pasted image 20250305182808.png]]
![[Pasted image 20250305182853.png]]

## Pendulums
**!!IMPORTANT**![[Pasted image 20250305182923.png]]
![[Pasted image 20250305183015.png]]

**!!IMPORTANT**![[Pasted image 20250305211011.png]]



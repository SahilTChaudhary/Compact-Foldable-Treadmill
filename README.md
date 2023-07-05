# ABSTRACT

During the age of COVID’19, with the onset of social distancing and lockdowns, people had been restricted to their homes for months at a stretch. This had led to a sedentary lifestyle and a lack of daily exercise. It is proven that running and even walking is one of the most efficient methods of exercise. Unfortunately, most treadmills are very bulky, take up a lot of space, and are very difficult to transport from one place to another. So, the idea behind the project was to design a compact and foldable treadmill which can easily be stored under the bed or inside a cupboard, hence eliminating the problem of space and transportation.

---

**Work Done**

* Designed the CAD model using SolidWorks
* Designed a folding mechanism for the treadmill by folding the deck in half for easy storage
* Conducted Static Structural Analysis and Rigid Body Dynamics study using Ansys
* Static Structural Analysis was conducted considering Bearing Loads, Direct Force and Joint Moment
* Induced Stress, Total Deformation and Fatigue Life were determined
* The analyses were done using two materials - Carbon Steel and Aluminium Alloy

<img src='/Treadmill/Images/Rendered Image.png'>

<img src='/Treadmill/Images/Rendered Image (Folded).png'>


---

# CONCLUSION

The stress analyses and simulations show that the Treadmill will not fail. Analyses were done using two materials, Carbon Steel and Aluminium Alloy. The Fatigue Life Analysis showed that both the materials have infinite life cycle under the applied Impulse Load of 1440N (assuming a person of weight 100kg is operating the treadmill). Hence, Fatigue failure due to Completely Reversed Loads is not a criterion for concern. Furthermore, neither of the materials fail, as the induced stresses are less than their yield stresses. Motion loads were also analysed, with both materials faring well. However, Total Deformation in the Aluminium Rollers was almost 13mm, as compared to 8mm in the Steel Rollers, which is intuitively correct as Steel is stronger than Aluminium. The lowest Factor of Safety for both the Rollers was 4. Hence, it was decided to use Steel for the Rollers, and Aluminium for the body and frame.
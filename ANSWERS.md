1. Describe the biggest difference between `.forEach` & `.map`.
    A. Map creates a new array without altering the original array.  forEach alters the original array.

2. What is the difference between a function and a method?
    A. A method is a function.  The difference between the two is thtat methods define objects and classes while
        functions are defined outside of objects and classes.

3. What is closure?
    A. Closure is when a function first looks to its own scope.  If it can't find what it is looking for it continues to look 
        outside of the function.  Eventually it will look in the global/window scope.

4. Describe the four rules of the 'this' keyword.
    A. The 4 rules of the 'this' keyword are:
        1. Window Binding - 'this' 
        2. Implicit Binding - When a method is invoked on an object before the dot.
        3. New Binding - Used within a constructor with object properties.
        4. Explicit Binding - Used during .call, .apply, .bind.

5. Why do we need super() in an extended class?
    A. Super passes attributes back to the constructore of the parent object.
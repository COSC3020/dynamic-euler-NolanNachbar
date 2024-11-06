# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

Recall the given implementation, 
```js
function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}
```

This is inefficient because a new factorial is computed for every value $n, n - 1, ..., 1$ without using the previously computed factorials.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

Here are my functions,
```js
function factorial (n) {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
function e(n) {
    let factorial = 1;
    let euler = 0;
    for (let i = 0; i <= n; i++) {
      if (i > 0) factorial *= i;
      euler += 1 / factorial;
    }
    return euler;
}
```

In each function, there is only one for loop which will run ```n``` times. Thus my algorithm's worst-case big $\Theta$ time complexity is $O(n)$.

I used your code to find the expected values for the test cases. I did this independently but I used the slides to understand the concept of bottom up dynamic programming. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

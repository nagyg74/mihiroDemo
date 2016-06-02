# Tasks
### 1. Array diameter
In your favorite language please write a function which calculates a diameter of a given int array.
Diameter of the array here is the biggest difference between elements of the array.
e.g. [1, 2, 5] -> 4

You can find result in `task1.js`.

**Bonus:**
* estimate time complexity of the function.
    * Complexity estimation based on worst case:
4+2n for initialization and loop,
n(2*4) for min&max selection,
1 for return.
     * That makes O(8n+5) over all
* write tests to ensure the quality of the function.
  * Added some test in `task1Spec.js`.
  * Tested by Karma-Jasmine


### 2. Request demo
Write a web app, which demonstrates a simple interaction between client and server:

_For example of server client connection with REST Api, check out [my other repo](https://github.com/nagyg74/bbDemo.git). It uses Angular and Jasmine_

1. Client should be able to request list data from the server
     * I've made a service which mocks the server response
2. List data should be paged
	* Data located at `demodata.js`
	* I didn't want to use third party library, so I've decidod to work on a basic own solution
3. While loading new chunks of data loading indicator should be displayed.
     * Network latency can be edited in `demodata.js`, change `serviceLatency` to the desired value.
4. Data can be anything - like a list of fake companies with email addresses and phone numbers.

**Bonus:**
* Explain your choice of technology stack.
	* I've used Angular and Less. Angular is suitable for simple Ajax call, and data manipulating. I'm comfortable with Less, almost identical to Scss, but it don't need Ruby to be installed.
* Client can work on mobile.
	* Bootstrap can handle responsibility easily.
	* As I lack freetime, mobile view could handle a little more adjustment.
* Client looks nice :-)
	* Well as I'm not a designer, just applied a minimal design, and no fancy UI.

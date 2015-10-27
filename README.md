# Binary Search Tree - JavaScript

by [Matthew Yang](http://matthewgyang.com)

## Description
This repository is an exercise creating a Binary Search Tree written in JavaScript. ([Binary Search Tree definition](https://en.wikipedia.org/wiki/Binary_search_tree))

## Method
For this assignment I decided there would not be a node class and the entire binary search tree would be made up of other binary search tree objects.  I also made the decision that the 'leaves' of the tree would be made up of `null` value `Bst`'s.  This would make finding the end of a branch easier and prevent errors with trying to find values of `null`.

I began by creating a simple constructor called `Bst` which when instantiated takes optional arguments including a value and whether the `Bst` being created is the `root` of the tree.  In order to start a new tree, those to values need to be present.  If the new `Bst` is the `root`, it's `left` and `right` branches are set to `null` value `Bst`'s.

I then created the following methods:
### Insert
This method takes a value and instantiates a new `Bst`, as well as setting it's `left` and `right` branches as `null` value `Bst`'s.  Then starting at the `root`, it compares values and decides if it should traverse left or right until it finds the appropriate empty spot to be inserted.  (at this time, this binary search tree does not balance itself).

### Contains
The `Contains` method takes a value and returns true or false depending on if the value is present in the `Bst`.  It traverses the tree the same way as `Insert` in that it basically looks for where it would insert the search value and returns true if it finds the value is there.

### Size
`Size` is a method that takes no arguments and returns the total number of non-null value `Bst`'s in the tree.  This is done with a relatively simple recursive algorithm that is called on the left and the right branches of a `Bst`, starting at the `root`.

I wrote the two recursive statements as ternaries, which if the respective branch has a value (is not `null`), calls itself (`size`) on that branch.  this will traverse down the tree until it hits the final `Bst`.  It will then work it's way back up, returning a value of 1 if it is at the bottom level of the tree, and each subsequent `Bst` adds itself to the total of it's own left and right branches and returns it back up until it gets back to the `root` where it will return the total.

### Depth
`Depth` works very similarly, where it uses a similar recursive algorithm on each left and right branch, but instead of totaling the number of nodes, I have it return just the greater value from left or right since that would be the greater depth (or height, if you want to think of it that way).

### Balance
Again like `size` and `depth`, `balance` is a recursive strategy that returns an integer value of the left depth value minus the right depth value.  This way the balance of the tree can easily be established by whether it's a positive number (left side deeper) or negative number (right side is deeper) or 0, which would mean a perfectly even tree.

### `ToString`
I also added a `toString` method which returns a string of all the `Bst` values concatenated together.  I created this primarily to make testing easier, and it does have some flaws including leading/trailing spaces and double spaces between each value.

## Traversal
A [tree traversal](https://en.wikipedia.org/wiki/Tree_traversal) is a method of returning the values of the tree in a specific order
### Depth-first
There are three different depth-first tree traversals.  Each of these variations of the same recursive strategy used several times in the other methods above.  The reason they lend themselves to recursive solutions is because of the depth-first idea, meaning the algorithm recurses all the way to the bottom before returning values on the way back up.  The three variations below just return the values in a different order.  Given a `Bst` with 3 members (self, left branch, right branch), the methods return values as follows:

* Pre-order traversal - self, left, right
* In-order traversal - left, self, right
* Post-order traversal - left, right, self

### Breadth-first
Breadth first is easy enough to understand, it returns value for each level, starting at the root, then moves to the next level down, returning values from left to right.

Programming this, however, turned out to be much more difficult.  It does not lend itself to a recursive solution since it starts at the top, rather than the bottom of the tree.  I found a good explanation [here](http://stackoverflow.com/a/5262455) that helped me come up with my solution.

I first created an array and set `this` (the `root`) to the only value.  I then set up a for loop that would continue to iterate through the array as long as there were items in it.  I then push the value of the first element in the array (only the root at the moment) into a new `results` array.  Still within the loop, I then push the left and right branches of the current `Bst` into the back of the first array as long as they have a value (they aren't `null` value 'leaves').  Those `Bst`s are then iterated, pushing their values to `results` and adding their children to the first array, if they exist.

After all elements are iterated over and the first array is empty, I return the `results` array, which will have all the tree's values ordered breadth-first.

## Testing
There is a full test suite incorporating [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/).

For the traversal tests (`in_order`, `pre_order`, `post_order` and `breadth_first`) I was running into issues comparing whether arrays were equal or not.  They seemed to look equal to me, however they were returning false in testing.  In order to get around this I implemented a `compareArrays` function in the test file that takes two arrays and iterates through, returning `false` if their lengths are different, or if when comparing the values at the same index are different returning `false` as well.  If it makes it through both arrays it will then return `true`.

## Credit
[Tree Traversals: Wikipedia](https://en.wikipedia.org/wiki/Tree_traversal)

[Breadth First: Stack Overflow](http://stackoverflow.com/a/5262455)

# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator. When decrementing a counter below zero, the counter unexpectedly wraps around to a very large positive number instead of remaining at zero.  The issue arises from the implicit behavior of `$inc` when dealing with counter values.  The solution involves incorporating a check to ensure the counter doesn't go below zero.

## Bug Description
The provided code shows an update operation attempting to decrement a counter using the `$inc` operator.  The expectation is that if the counter is already zero, the operation would leave the counter at zero. However, the counter instead becomes a very large positive number.

## Solution
The solution involves using the `$min` operator along with an explicit check to make sure that the counter remains at zero or above.
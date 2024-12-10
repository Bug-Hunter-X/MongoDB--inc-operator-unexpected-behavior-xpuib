```javascript
//Correct usage of $min operator to prevent counter from going below zero
db.collection('myCollection').updateOne({"_id": ObjectId("6515f5620e82974d6d7c3596")},{$min:{counter: 0}}); 
```
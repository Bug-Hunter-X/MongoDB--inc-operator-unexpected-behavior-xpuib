```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id": ObjectId("6515f5620e82974d6d7c3596")},{$inc:{counter: -1}});
```
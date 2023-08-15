let arr = ["a", "b"];

arr.push(function () {
  alert(this); // this == caller == arr
});

arr[2](); // *
// เป็นการ alert arr ('a','b',function(){alert(this);})

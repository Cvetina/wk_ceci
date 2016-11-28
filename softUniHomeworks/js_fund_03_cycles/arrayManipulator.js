  var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40] ];

  for(i = 0; i < arr.length; i++){
  	console.log(typeof(arr[i]));
  };
   for(i = 0; i < arr.length; i++){
  	var type = (typeof(arr[i]) );
    if(type === 'number') 
      console.log(arr[i]);
  };

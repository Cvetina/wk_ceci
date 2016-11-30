function show_array(arr1) {
  for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
  };
  console.log('-------------------');
};

function arr_extract_numbers(arr1) {
  var arr_acumulator = [];
  for (i = 0; i < arr1.length; i++) {
    if ((typeof(arr1[i])) === 'number')
      arr_acumulator.push(arr1[i]);
  };
  return arr_acumulator;
};

function arr_max(arr1) {
  var max_acumulator = 0;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > max_acumulator)
      max_acumulator = arr1[i];
  };
  return max_acumulator;
};
 
function arr_min(arr1) {
  var min_acumulator = 100;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] < min_acumulator)
      min_acumulator = arr1[i];
  };
  return min_acumulator;
};

function most_frequent_number(arr1) {
	var count_frequency;
	var arr1_value;
	for ( arr1_value in arr1) {
		if( (arr1_value > arr1.length--) || ( arr1_value < arr1.length--) ){
			count_frequency = 0;
		}else {
			count_frequency += 1;
			console.log(count_frequency);
		}

	}

};

function mine() {
  var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount: 10 },
    [10, 20, 30, 40]
  ];

  show_array(arr);
  arr = arr_extract_numbers(arr);
  show_array(arr);
  console.log('max number:' + arr_max(arr));
  console.log('-------------------');
  console.log('min number:' + arr_min(arr));
  most_frequent_number(arr); 
};

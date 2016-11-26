var last_player;


  function switch_cell(cell_num) {
    var cellId = 'cell' + cell_num;
    var myCell = document.getElementById(cellId);

    if (myCell.innerHTML !== "")
      return;

    if (last_player === 'X' ) {
    	last_player = 'O';
    } else{
    	last_player = 'X';   	  	
    }
    myCell.innerHTML = last_player;
  };

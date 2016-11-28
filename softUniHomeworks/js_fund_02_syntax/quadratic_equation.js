
function quadraticEquation(coefA, coefB, coefC) {

	var descriminanta = (coefB * coefB - ( 4 * coefA * coefC));

	if ( descriminanta < 0 ) 
       return 'Nqma reshenie D=' + descriminanta;

	if( descriminanta === 0  ) 
       return (-coefB / 2*coefA).toFixed(2);

	var resultEquationX1 = ( -coefB + Math.sqrt(descriminanta) ) / 2*coefA;
	var resultEquationX2 = ( -coefB - Math.sqrt(descriminanta) ) / 2*coefA;

    return resultEquationX1.toFixed(2) + "<br/>" + resultEquationX2.toFixed(2);
};

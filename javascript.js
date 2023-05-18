let display = document.querySelector('.display');
let ac = document.querySelector('#clear');
let equal = document.querySelector('#equal');
let equation = '';


[...document.querySelectorAll('.number')].forEach(function(item){
	item.addEventListener('click', function(e){
		display.textContent += `${e.target.textContent}`;
		equation += `${e.target.textContent}`;
	});
});

[...document.querySelectorAll('.operator')].forEach(function(item){
	item.addEventListener('click', function(e){
		display.textContent += ` ${e.target.textContent} `;
		equation += ` ${e.target.textContent} `;
	});
});

ac.addEventListener('click', function(e){
	display.textContent = '';
	equation = '';
});

equal.addEventListener('click', function(e){
	let answer = equation.split(' ');

	
	let num1, num2, operator;

	while(answer.length > 1){

		num1 = parseInt(answer.shift());

		if(isNaN(num1)){
			display.textContent = "ERROR1";

			return;
		}
	
		operator = answer.shift();

		if(!isNaN(operator)){
			display.textContent = "ERROR2";

			return;
		}

		num2 = parseInt(answer.shift());

		if(isNaN(num2)){
			display.textContent = "ERROR3";

			return;
		}

		switch(operator){
			case '+':
				answer.unshift((num1+num2).toString());
				console.log(answer);
				display.textContent = answer;
				break;

			case '-':
				answer.unshift((num1-num2).toString());
				console.log(answer);
				display.textContent = answer;
				break;

			case '/':
				answer.unshift((num1/num2).toString());
				console.log(answer);
				display.textContent = answer;
				break;

			case '*':
				answer.unshift((num1*num2).toString());
				console.log(answer);
				display.textContent = answer;
				break;
		}

	}

});

/*
Leaves space before and after operators. Use this to split the string
and evaluate by pushing and popping the string (FIFO)
*/
	var balance,time,lastbetically,prevbet,prevbetical,bet,rand,step = 0;
	var prevbalance = 0;
	var win = 1;
	var min = 0; var max = 100;
	var maxstep = 6;
	var flag = 0;
	
	
	time = parseInt($('.bonus-game-timer > .inner').text());
	
	var timerId = setInterval( function() {
		
		lastbetically = parseInt($('.game-history-list > .game-roulette-history-item:first').text()); // получаем последнее выигравшее число
		nextbet = parseInt($('.game-history-list > .game-roulette-history-item:first').next().text());
		balance = parseFloat((($('.coins-component.middle-block').text()).replace(/,/,'.')).substr(1));
		
		if ((time > 0) && ((lastbetically != prevbet) || (lastbetically == nextbet)) && ($('[data-bet-type = red]').text() == "$0") && ($('[data-bet-type = black]').text() == "$0") && ($('[data-bet-type = zero]').text() == "$0")) { //Если игра закончилась и началась новая	
			if (((bet < 50) && (lastbetically > 0) && (lastbetically < 8)) || ((bet > 49) && (lastbetically > 7) && (lastbetically < 15))) { win = 1} else {win = 0} //Если поставили на красное и выиграло красное
			console.log('Победа: '+win);
			if (step > maxstep) { win = 1; step = 1; }; //Если шаг слишком большой, то сбрасываем и начинаем с нуля
			if (win == 0) { $('.buttons-list > .button.value.multiply').click(); value =value*2; step++;} else { $('.buttons-list > .button.clear').click(); value = 0.01; step = 1;}; //Если проиграли, то удваиваем, если выиграли то ставим стартовое значение
				console.log('Шаг: '+step);
				$('[rv-currency-value = value]').text(value)
				rand = min - 0.5 + Math.random() * (max - min + 1)
				bet = Math.round(rand);
				console.log('Выпало число: '+bet);
				setTimeout( function() {
				if (bet < 50) {
					$('[data-bet-type = red]').click(); 
					console.log('ставлю на красное ' + value);
				} else {
					$('[data-bet-type = black]').click(); 
					console.log('ставлю на черное ' + value);
				}
				}, 3000);
				prevbet = lastbetically;
		}
	}, 3000);
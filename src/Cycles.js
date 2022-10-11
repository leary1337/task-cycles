/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
	let evenSum = 0;
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			evenSum += i;
		}
	}
	return evenSum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
	let curValue = a;
	let iterCount = 0;
	while (curValue > 0.1) {
		curValue /= 2;
		iterCount++;
	}
	return iterCount;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
	let newMessage = '';
	let idx = 0;
	do {
		idx++;
		newMessage += idx % 3 ? message[idx - 1] : '_';
	} while (idx < message.length);
	return newMessage;
}

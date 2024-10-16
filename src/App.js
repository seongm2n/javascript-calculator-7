import { Console } from '@woowacourse/mission-utils';

class App {
	async run() {
		//1. 문자열 입력받아
		//2-1. 일반구분자와 커스텀구분자로 나누기  -> 고민 (1),(2)번의 순서를 어떻게 하는게 좋을지 모르곘음
		// (1) 문자열을 숫자로 바꿔야함
		// (2) 구분자가 쉼표,콜론 이거나 세미콜론인 경우로 나누기 -> split하면 어차피 쉽표로 나뉘니까 콜론으로만 나눠도 되나? 안됌
		//3-1. 구분자가 쉼표이거나 클론일경우 숫자 전부 추출 후 더하기
		//3-2. 문자열 앞부분에 //,\n 사이 위치할 경우 커스텀구분자는 세미클론이고 숫자 추출후 반환
		//4-1. 빈문자일경우 숫자 0 반환
		//4-2. 음수면 ERROR 발생  -> try catch로 예외상황 나눌까?

		const answer = await Console.readLineAsync(
			`덧셈할 문자열을 입력해 주세요.\n`
		);
		if (answer.includes('-')) {
			throw new Error('[ERROR] 음수는 허용되지 않습니다.');
		}
		try {
			if (answer.trim() === '') {
				Console.print(`결과: 0`);
			} else if (answer.startsWith('//')) {
				//커스텀 구분자
				const delimiter = answer.substring(2, 3);
				const numbers = answer.split('\\n')[1].split(delimiter);
				Console.print(numbers);
				const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
				Console.print(`결과 : ${sum}`);
			} else {
				//일반 구분자
				const numbers = answer.split(/[:,]/);
				Console.print(numbers);
				const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
				Console.print(`결과 : ${sum}`);
			}
		} catch (error) {
			Console.print(error.message);
		}
	}
}

export default App;

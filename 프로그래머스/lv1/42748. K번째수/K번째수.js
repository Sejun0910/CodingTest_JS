function solution(array, commands) {
    var answer = [];
    var i = 0;
    var j = 0;
    var k = 0;

    for(m=0; m<commands.length; m++){ // commands 안에 있는 숫자로 우리가 array를 골라내야 한다
        i = commands[m][0]; // commands 의 [m][0] 번째를 i로 지정해 자르는 첫번째 부분으로 변수로 지정 
        j = commands[m][1]; // commands 의 [m][1] 번째를 i로 지정해 자르는 마지막 부분으로 변수를 지정
        k = commands[m][2]; // commands 의 [m][2] 번째를 k로 지정해 자른 부분의 원하는 k번째를 뽑는 용도로 지정

        var sliced = array.slice(i-1, j); // 입력받은 i와 j를 사용해 i번째부터 j번째까지 자르는 코드
        // i-1을 쓴 이유 : 우리는 숫자를 셀때 1부터 세지만 컴퓨터는 0부터 시작하기 때문에 우리가
        // 원하는 i번째부터 j번째를 오려내기 위해선 -1 을 붙여야 우리가 원하는대로 잘라낸다
        
        var sorted = sliced.sort((a,b) => a-b); // 자른 i번째부터 j번째를 배열안에 있는 숫자를
        // 오름차순으로 정렬한다 sort((a,b) => a-b) 의 의미 : 정렬 순서를 지정하는 함수로 숫자 배열의 경우
        // 숫자 값의 오름차순으로 정렬해달라는 의미다

        answer.push(sorted[k-1]); // answer = sroted[k-1]; 이렇게 하면 안되는 이유
        // -> = 를 사용하면 answer에 입력될 때 배열이 아닌 숫자로 들어가기 때문에 값이 덮어써진다
        // 그래서 push를 사용해서 넣어줘야 배열형태로 들어간다
    }   

    return answer;
}
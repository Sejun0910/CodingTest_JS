function solution(d, budget) {
    var answer = 0; // 몇개의 부서에 지원할 수 있는지 담는 변수
    var result = 0; // 지원한 총 예산을 담을 변수
    d.sort((a,b) => a - b); // 일단 작은 값부터 하나씩 빼야 최대한 많은 부서에
    // 지원해줄 수 있기 때문에 오름차순으로 정렬한다 d의 값을 작은 수부터 높은 수 순서로 정렬한다는 의미다

    for(let i=0; i < d.length; i++){
        result += d[i] // result 지원해준 예산을 구하기 위해 for문이 돌 때마다 d[i]값을 변수에 저장한다
        answer++; // for문이 돌면 지원을 해줬다고 가정을 하고 지원 부서의 개수를 추가한다

        if(result > budget) // 만약 for문을 돌던중 result의 가격이 budget(내가 가진 총 예산)
        // 보다 커졌을 경우
            answer--; // 지원해준 부서의 개수를 -1 한다 
            // -1 을 하는 이유는 for문 바로 아래 지원해줬다는 가정을 하고 바로 +1 을 해줬기 때문인다
    }

    return answer; // 결과 출력
}
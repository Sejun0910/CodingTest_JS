function solution(n, m) {
    var answer = [];
    var x = 0;
    var y = 0;

    var num = n > m ? n : m

    for(let i=1; i<=num; i++){
        if(n%i == 0 && m%i ==0){
            x = i;
        }
    }
    y = n * m / x;
    answer = [x,y];
    return answer;
}
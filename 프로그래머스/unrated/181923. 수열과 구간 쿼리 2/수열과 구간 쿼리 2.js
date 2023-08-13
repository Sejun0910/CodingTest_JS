function solution(arr, queries) {
    var answer = [];
    
    for(const q of queries){
        let min = [];
        for(let i=q[0]; i<q[1]+1; i++){
            if(arr[i] > q[2]){
                min.push(arr[i]);
            }
        }
        
        if(min.length > 0){
            answer.push(Math.min.apply(null, min) );    
        }else{
            answer.push(-1);
        }  
    }
    
    return answer;
}
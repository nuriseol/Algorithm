function solution(array) {
    var answer = [];
    var top = 0;
    var topNum = 0;
    
    array.map((arr, i) => {
        if(top < arr) {
            top = arr;
            topNum = i;
        }
    });
    
    answer = [top, topNum];
    
    return answer;
}
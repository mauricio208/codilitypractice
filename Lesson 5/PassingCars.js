function solution(A) {
    // Implement your solution here
    const maxPairs = 1000000000
    let carsGoingE = 0
    let passingPairs = 0
    for(n of A){
        if( n == 0){
            carsGoingE++
        }
        if(n == 1){
            passingPairs += carsGoingE
            if(passingPairs > maxPairs) return -1
        }
    }
    return passingPairs
}

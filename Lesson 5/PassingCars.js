function solution(A) {
    // Implement your solution here
    // 33% wrong answer
    const maximumPairs = 1000000000
    let currentPassing = 0
    let cumulativePassing = 0
    let passing = false
    for(n of A){
        if(n == 0){
            passing = true
            cumulativePassing += currentPassing
            currentPassing = 0
            if(cumulativePassing > maximumPairs) return -1
        }
        if(!passing) continue
        if(n == 1){
            currentPassing += cumulativePassing+1
        }
    }
    if(A[A.length-1] == 1){
        cumulativePassing += currentPassing
        if(cumulativePassing > maximumPairs) return -1
    }
    return cumulativePassing
}

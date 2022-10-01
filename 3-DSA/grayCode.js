var grayCode = function(n) {
    let res = []
    const count = 1 << n
    
    for(let i = 0 ; i < count ; i++){
        
        num = i ^ ( i >> 1)
        
        res.push(num)
    }
    
    return res
};

// grayCode(2)
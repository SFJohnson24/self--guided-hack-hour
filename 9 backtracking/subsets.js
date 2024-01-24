var subsets = function(nums) {

    let results=[]
    let subset=[]
    
    const dps = function(index){
        if (index===nums.length){

            return results.push([...subset])
        }
        subset.push(nums[index])
        dps(index+1)
    
        subset.pop()
        dps(index+1)
    }
    dps(0);
    return results
    };
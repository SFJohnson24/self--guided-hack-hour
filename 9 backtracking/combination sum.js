var combinationSum = function(candidates, target) {
    let result = []
    let cache=[]

    const dps =(index, total)=>{
        if (total===target){
            return result.push([...cache])
        }
        if (index>=candidates.length || total>target){
            return
        }
        cache.push(candidates[index])
        //dont increment index because we can add this value again to try to get target
        dps(index, total+candidates[index])
        cache.pop()
        dps(index+1, total)
    }

dps(0, 0)
return result
};
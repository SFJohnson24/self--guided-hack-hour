var levelOrder = function(root) {
    if(!root) return []
    const queue = [root] 
    const res = []
    while(queue.length !== 0){
       const queueLength = queue.length
       const level = []
       for(let i = 0; i < queueLength; i++){
           const current = queue.shift()
           if(current.left){
               queue.push(current.left)
           }
           if(current.right){
               queue.push(current.right)
           }
           level.push(current.val)
       }
       res.push(level)
   }
    return res
}
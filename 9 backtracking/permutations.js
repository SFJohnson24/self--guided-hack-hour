var permute = function(nums) {
    const output = [];
  
    const dfs = (curr, rest) => {
      if (rest.length === 0) {
        output.push(curr);
        return;
      }
      for (let i = 0; i < rest.length; i++) {
        dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
      }
    }
    dfs([], nums);
    
    return output;
  };
/*
Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.
For example:
rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.
*/

const rps = (n, cache=[], result=[]) => {
  const throws = ['r', 'p', 's']
  if (n===0){
    return ['']
  }
  //goal
  if (cache.length===n){
    return result.push(cache.join(''))
  }
  for (const t of throws){
    cache.push(t)
    rps(n, cache, result)
    cache.pop()
  }
  return result
};

/*
Extension:
Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.
This is equivalent to returning all possible passwords of length n given a
character set 'chars'.
For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n, cache=[], result=[]) => {
  if (n===0){
    return ['']
  }
  //goal
  if (cache.length===n){
    return result.push(cache.join(''))
  }
  for (let i=0; i<chars.length; i++){
    cache.push(chars[i])
    passwords(chars, n, cache, result)
    cache.pop()
  }
  return result
};


module.exports = {rps, passwords};

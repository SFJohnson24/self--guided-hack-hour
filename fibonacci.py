from functools import lru_cache
# Function for nth Fibonacci number
@lru_cache(None)
def fibonacci(n: int, cache={}) -> int:
    if n <= 1:
        return n

    if n in cache:
        return cache[n]

    result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
    cache[n] = result
    
    return result

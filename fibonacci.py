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



def fibonacci(n):
    a = 0
    b = 1
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return a
    elif n == 1:
        return b
    else:
        for i in range(2, n+1):
            c = a + b
            a = b
            b = c
        return b
    
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
 

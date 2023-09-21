def recursive_count(num=0):
    # Base case: termination condition
    if num >= 10:
        return

    # Print the current number
    print(num)

    # Call the function recursively with modified arguments
    recursive_count(num + 1)

# Call the recursive function
recursive_count()

def recurse(x):
    if x > 0:
        print(x)
        recurse(x - 1)

# Call the function with an initial value of 10
recurse(10)
##two recursive functions: recursive_count and recurse
##ef recursive_count(num=0):

#Base case: termination condition
#if num >= 10:
#return

#Print the current number
#print(num)

#Call the function recursively with modified arguments
#recursive_count(num + 1)

#This function takes an optional parameter num with a default value of 0. It serves as a recursive countdown function that prints numbers from num to 9. The function has a base case that checks if num is greater than or equal to 10. If it is, the function returns, terminating the recursion. Otherwise, it prints the current value of num and recursively calls itself with an incremented value of num (num + 1).

#recurse function: def recurse(x): if x > 0: print(x) recurse(x - 1)
##This function takes a parameter x and serves as a recursive countdown function as well. It prints numbers from x to 1. The function has a base case that checks if x is greater than 0. If it is, it prints the current value of x and recursively calls itself with a decremented value of x (x - 1).
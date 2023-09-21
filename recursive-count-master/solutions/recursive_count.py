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
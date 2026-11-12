# ! find the maximum value
a = 90
b = 25
c = 75
def maximum(a,b,c):
    if b<a>c:
        return a
    elif a<b>c:
        return b
    return c
print(maximum(a,b,c))


# #####################################################################################################

#! Question 2: Even or Odd
# Easy

#! Given a number n, determine whether it is even or odd.

# Example:
# Input: 15
# Output: Odd

# Input: 24
# Output: Even

def evenOdd(num):
    return "Even" if num %2 == 0 else "Odd"

num=10
print(evenOdd(num))
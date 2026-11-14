# ! find the maximum value
# a = 90
# b = 25
# c = 75
# def maximum(a,b,c):
#     if b<a>c:
#         return a
#     elif a<b>c:
#         return b
#     return c
# print(maximum(a,b,c))


# #####################################################################################################

#! Question 2: Even or Odd
# Easy

#! Given a number n, determine whether it is even or odd.

# Example:
# Input: 15
# Output: Odd

# Input: 24
# Output: Even

# def evenOdd(num):
#     return "Even" if num %2 == 0 else "Odd"

# num=10
# print(evenOdd(num))


# #####################################################################################################

#!  13/11/26 Today's two coding challenges
# todo: Question 1 – Second-largest distinct element

# Given an array of integers, find the second-largest distinct element without sorting the array.
# let nums: number[] = [12, 35, 1, 10, 34, 35];

#  Expected output: 34

# nums=[36,12,35,1,10,34,35,37]

# def secondLargest(n):
#     f=n[0]
#     s=0
#     for i in n:
#         if f<i:
#             s=f
#             f=i
#         elif s<i<f:
#             s=i
#     return s
# print(secondLargest(nums))

#  # #####################################################################################################
# //! Question 2 – Move all zeros to the end

#  Move all zeros to the end of an array while maintaining the order of non-zero elements.
# let nums: number[] = [0, 1, 0, 3, 12];

#  Expected output: [1, 3, 12, 0, 0]

# num=[-1,0,1,0,3,12]

# def zero(num):
#     position=0
#     for i in range(len(num)):
#         if num[i]!=0:
#             num[position]=num[i]
#             position+=1
#     while position< len(num):
#         num[position]=0
#         position+=1
#     return num
# print(zero(num))



#  # #####################################################################################################
#! 1. What is the Two-Pointer Technique?
#! Two pointers means using two variables to track two different positions in an array.

#! Usually:
#! - left starts at the beginning.
#! - right starts at the end.
#! - We move one or both pointers depending on the problem.

# todo2. Worked example: Reverse an array
# Inpu
# [10, 20, 30, 40, 50]
# Expected output:
# [50, 40, 30, 20, 10]

# num= [10, 20, 30, 40, 50,60,70]


# def twoPointer(num):
#     left=0
#     right=len(num)-1
#     while left < right:
#         num[left],num[right]=num[right],num[left]
#         left+=1
#         right-=1
#     return num
# print(twoPointer(num))

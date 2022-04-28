swapping

# javascript code swap

# var arr = [1,3,5,7];
# var temp arr = arr[0];
# arr[0] = arr[1];
# arr[1] = temp;

# python code swap
arr = [1,3,5,7]
arr[0], arr[1] = arr[1], arr[0]
print(arr)


#bubble sort. sorts an array form lowest number to highest. 
# function help - go line by line printing as I go to see what is happening. Start small and build then troubble shoot 

# bubble sort with python swap

arr2 = [6,5,3,1,8,7,2,4]
print(arr2)
def bubble_sort(arr2):
    print('function works')
    for y in range (len(arr2)-1):
        for x in range (len(arr2)-1-y):
            print("index", x, "value", arr2[x])
            print("compairing", arr2[x], arr2[x+1])
            if arr2[x] > arr2[x+1]:
                arr2[x], arr2[x+1] = arr2[x+1], arr2[x]
                print("swaped", arr2[x], arr2[x+1])
                print("new array", arr2)
            else:
                print("no swap", arr2[x], arr2[x+1])
bubble_sort(arr2)

# function below is with comented out print statements 

arr2 = [6,5,3,1,8,7,2,4]
print(arr2)
def bubble_sort(arr2):
    # print('function works')
    for y in range (len(arr2)-1):
        for x in range (len(arr2)-1-y):
            # print("index", x, "value", arr2[x])
            # print("compairing", arr2[x], arr2[x+1])
            if arr2[x] > arr2[x+1]:
                # using the swap function in python
                arr2[x], arr2[x+1] = arr2[x+1], arr2[x]
                # print("swaped", arr2[x], arr2[x+1])
                # print("new array", arr2)
            # else:
            #     arr2[x] == arr2[x-1]
            #     print("no swap", arr2[x], arr2[x+1])
    return arr2
print(bubble_sort(arr2))


# bubble sort with temporary array

arr3 = [10,8,6,3,1,5,2,9,4,7]

def bub_sort(arr3):
    print("function works")
    # iterate though the whole sorted arr
    for j in range (len(arr3)-1):
        # iterate through the sub array 
        for i in range (len(arr3)-1-j):
            # compair the elements in the unsorted array to see which is the first element is lower than the second
            if arr3[i] > arr3[i+1]:
                # if is is lower hold the value in a temp arr and assign it the the next value in the array
                temp_arr = arr3[i]
                arr3[i] = arr3[i+1]
                arr3[i+1] = temp_arr
    return arr3
            # else:
            #     print("something")
print(bub_sort(arr3))


# selection sort. find the minimum value in the list and move it to the front

arr4 = [9,8,7,6,5,4,3,2,1]
print (arr4)

def sort(arr4):
    # sort through the entire array with x
    for x in range (len(arr4)):
        #start with the first value in the array and assume it is the smallest
        min = x
        # use j to sort through the remaining array, the unsorted arr
        for j in range (x+1, len(arr4)):
            # compair the current low with the next element in j
            if arr4[j] < arr4[min]:
                # if the element is lower than j is the new minimum
                min = j
                # swap the elements 
                arr4[x], arr4[min] = arr4[min], arr4[x]
    return arr4
print(sort(arr4))

# selection sort answer from platform

my_arr = [-64, 25, -12, 22, 11] 
for i in range(len(my_arr)): 
    min_idx = i 
    for j in range(i+1, len(my_arr)): 
        if my_arr[min_idx] > my_arr[j]: 
            min_idx = j
    temp = my_arr[i]
    my_arr[i] = my_arr[min_idx]
    my_arr[min_idx] = temp

print(my_arr)    



# insertion sort

arr5 = [8,7,6,5,4,3,2,1]
print (arr5)

def insert_sort(arr5):
    # iterate though the sorted list starting at index 1 and compair to index 0
    for x in range(1, len(arr5)):
        # compaire the current element (temp) to the previous element in the arr
        temp = arr5[x]
        # move elements of arr5 [0...x-1] that are greater than temp to one position ahead of their curent position 
        j = x-1
        while j >= 0 and temp < arr5[j]:
            arr5[j+1] = arr5[j]
            j-=1
        arr5[j+1] = temp
    return arr5
print(insert_sort(arr5))

# insertion sort answer from platform

my_arr = [9,3,78,12,76,0,-2]

for idx in range(1, len(my_arr)): 
    temp = my_arr[idx] 
    prev_idx = idx-1
    while prev_idx >= 0 and temp < my_arr[prev_idx]: 
        my_arr[prev_idx + 1] = my_arr[prev_idx] 
        prev_idx -= 1
    my_arr[prev_idx + 1] = temp 

print(my_arr)





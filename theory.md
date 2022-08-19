## Вывод кода
Bad: undefined

# Method 1 - Use let
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
         console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
         }, 3000)
    }

# Method 2 - pass argument to setTimeout
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function(i) {
         console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
         }, 3000, i)
    }


//IIFE FUNCTION.
//1.a.Print odd numbers in an array
let num1 = (function(arr)
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        console.log(arr[i])
    }
}
})([1,2,3,4,5,6,7,8,9])

//1.b.Convert all the strings to title caps in a string array
let titlecase = (function(statement)
{
    let a=statement[0].split(" ")
    let b=a.map(word=>word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    let c=b.join(" ")
    console.log(c)
})(["my name is billa"])

//1.c.**Sum of all numbers in an array**
let sum=0;
let num2 = (function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
    sum=sum+arr[i]
  }
  return sum;
})([1,2,3,4,5,6,7,8,9])
console.log(num2)


//1.d.Return all the prime numbers in an array

let count=0;
let c=[];
let num=(function(arr)
{
for(i=0;i<arr.length;i++)
{
  for(j=1;j<=arr[i];j++)
  {
    if(arr[i]%j==0)
    {
    count=count+1;
    
    }

    }
        if(count==2)
    {
      d=c.push(arr[i]);
    }
     count=0;
}
console.log(c)
})([1,2,3,4,5,6,7,8,9,10,11,12])




//1.e.Return all the palindromes in an array
let checkPalindrome = (function(arr) {
    let a=arr[0].split("")
    const len=a.length;
    for (let i = 0; i < len / 2; i++) {
        if (a[i] !== a[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
})(["madam"])
console.log(checkPalindrome)


//1.f.Return median of two sorted arrays of the same 
let n;
let s;
let a=(function name(arr1,arr2)
{
    if((arr1.length)%2!==0 && (arr2.length)%2!==0)
    {
      n=(arr1.length/2);
      s=Math.round(n)
      return s;
    }
    else
    {
        n=((arr1.length/2)+(arr1.length/2)+1)/2;
        return n;
    }
    
})([1,2,3,4,5],[6,7,8,9,10])
console.log(a)





//1.G. Remove duplicates from an array

let zen = (function removeDuplicates(arr) {
    return [...new Set(arr)];
})(["apple", "mango", "apple",
          "orange", "mango", "mango"])
console.log(zen)



//1.H.Rotate an array by k times
let rotate = (function num(array,k)
{
    for(var i=0;i<k;i++)
    {
        array.unshift(array.pop())
    }
    return array
})([1,2,3,4,5,6],4)
console.log(rotate)

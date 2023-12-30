//ARROW FUNCTION.
//2.a.Print odd numbers in an array
let num1 = (arr) =>
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        console.log(arr[i])
    }
}
}
var a= num1([1,2,3,4,5,6,7,8,9])



//2.b.Convert all the strings to title caps in a string array
let titlecase = (statement) =>
{
    let a=statement[0].split(" ")
    let b=a.map(word=>word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    let c=b.join(" ")
    return c;
}
let sentence=titlecase(["my name is billa"]);
console.log(sentence)




//2.c.**Sum of all numbers in an array**
let a;
let sum=0;
let num2 = (arr) =>
{
  for(var i=0;i<arr.length;i++)
  {
    sum=sum+arr[i]
  }
  return sum;
}
a=num2([1,2,3,4,5,6,7,8,9])
console.log(a)


//2.d.Return all the prime numbers in an array

let count=0;
let c=[];
let num= (arr) =>
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
}
let ans = num([1,2,3,4,5,6,7,8,9,10,11,12])
console.log(c)


//2.e.Return all the palindromes in an array
let checkPalindrome = (arr) => {
    let a=arr[0].split("")
    const len=a.length;
    for (let i = 0; i < len / 2; i++) {
        if (a[i] !== a[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let a=checkPalindrome(["hello"])
console.log(a)


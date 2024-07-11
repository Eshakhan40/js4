var arrmy=[[[]]]
var a=[0 ,1 ,2, 3]
var b=[1,0,1,2]
var c=[2,1,0,1]
document.write(a +"<br>")
document.write(b +"<br>")
document.write(c +"<br>")
for( var i=1; i<=10; i++){
    document.write( i +"<br>")
}
var tab=+prompt("enter the multiplication you want")
var num=+prompt("Enter the limit of the multiplication")
for( var i=1; i<=num; i++){
    document.write( `${tab}x${i}=${tab*i} <br>`)
}
var fruits=["Apple","Banana","Mango","Orange","Strawberry"]
for( var i=0; i<=1; i++){
document.write("Element at index 0 is:"+fruits[0] +"<br>")
document.write("Element at index 1 is:"+fruits[1] +"<br>")
document.write("Element at index 2 is:"+fruits[2] +"<br>")
document.write("Element at index 3 is:"+fruits[3] +"<br>")
document.write("Element at index 4 is:"+fruits[4] +"<br>")

}
var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.write("Counting :"+a+"<br>")
var b=[15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
document.write("Reverse counting :"+b+"<br>")
var c=[2,4,6,8,10,12,14,16,18,20]
document.write("Even Num:"+c+"br>")
var d=[1,3,5,7,9,11,13,15,17,19]
document.write("Odd num:"+d+"<br>")
var e=[`2k,4k,6k,8k,10k,12k,14k,16k,18k,20k`]
document.write("Series:" + e+"<br>")

var u=prompt("Welcome to our bakery,what to want ?")
var i=["cookies","apple pie","chips","patties","cake"]
if(i.includes(u)){
    alert(i +"Available")
   


}else{
    alert("Not Available")
}
var s=[24, 53, 78, 91, 12]
document.write("Array items:"+ s+"<br>")
document.write("The Largest num is" + Math.max(24,53,78,91,12)+ "<br>")
var s=[24, 53, 78, 91, 12]
document.write("Array items:"+ s+"<br>")
document.write("The Smallest num is" + Math.min(24,53,78,91,12)+ "<br>")
for( var i=1; i<=20; i++)
{
    document.write(`${5*i}`+"<br>")
}

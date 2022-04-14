/*
Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

>>> tshirtSorter('lms')
 sml

>>> tshirtSorter('smllms')
 ssmmll

 Write your solution below:
 */

 const sorter = (str) =>{
    let s = ''
    let m = ''
    let l = ''
     for(let i=0;i<str.length;i++){
       if(str[i]==="s"){
         s+=`s`
       } else if(str[i]==="m"){
         m+=`m`
       } else{
         l+=`l`
       }
     } return s+m+l
   }
  
   console.log(sorter("lms")) // sml
   console.log(sorter("smllms")) //ssmmll
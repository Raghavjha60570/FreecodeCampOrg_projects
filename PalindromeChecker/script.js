const textInput= document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDisplay=document.getElementById('result');
    
      function isPal(value){
         let str =value.toString(); 
         let left=0 ;
         let right=str.length-1;
         while(left<right){
            if(str[left]!==str[right]){
                return false;
            }
            left++;
            right--;
         }
         return true;
      }

checkBtn.addEventListener( 'click',function(){
  if(textInput.value.trim()===''){
    alert('Please Enter a value Before Submitting');
  }else {
               const value= textInput.value.trim();
               
               const pal= isPal(value);
               
            if (pal){
                resultDisplay.textContent = `"${value}" is a palindrome!`;
                resultDisplay.style.color = 'green';
            }else {
                resultDisplay.textContent = `"${value}" is  not a palindrome!`;
                resultDisplay.style.color = 'red';
            }
     }

    })
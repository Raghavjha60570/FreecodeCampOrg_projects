const textInput= document.getElementById('text-input');
const checkBtn=document.getElementById('check-btn');

checkBtn.addEventListener( 'click',function(){
  if(textInput.value.trim()===''){
    alert('Please Enter a value Before Submitting');
  }else {
                alert('Form submitted successfully!');
            }
})
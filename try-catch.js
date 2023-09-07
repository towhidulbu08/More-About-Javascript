function checkAge(){
    const ageField=document.getElementById('age');
    const ageText=ageField.value;
    const errorTag=document.getElementById('error')
   
    try{
      const age=parseInt(ageText);
      if(isNaN(age)){
      throw 'Please Enter a number'
      }
      else if(age<18){
        throw "Youth is not allowed"
      }
      else if(age>30){
        throw "Old dont come here"
      }
      errorTag.innerHTML='';

    }
    catch(error){
        console.log('Error:',error);
        errorTag.innerHTML='Error:' + error;
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(1111);
}
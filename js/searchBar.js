export const setSearchFocus =()=>{
    document.getElementById("search").focus();
};
export const showClearTextButton = () =>{
   const search = document.getElementById("search");
   const clearBtn = document.getElementById("clear");
   if( search.value.length){
      clear.classList.remove("none");
      clear.classList.add("flex");
   }
   else{
    
   }

   }

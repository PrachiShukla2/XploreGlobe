import { setSearchFocus} from"./searchBar.js";
import {getSearchTerm } from "./dataFunction.js";
document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState ==="complete"){
        initApp();
    }
});
const initApp =() =>{
    setSearchFocus();
    //set the focus
    // 3 listeners clear text
    const form = document.getElementById("searchBar");
    form.addEventListener("submit",submitTheSearch);
}
// procedural " workflow" function
const submitTheSearch =(event)=>{
    event.preventDefault();
    // delete search results
    // /processthe search
    processTheSearch();
    setSearchFocus();
};

const processTheSearch = async ()=>{
    // clear the stats line
    const searchTerm = getSearchTerm();
    if (searchTerm ==="") return;
    const resultArray = await retriveSearchResults(searchTerm);
}
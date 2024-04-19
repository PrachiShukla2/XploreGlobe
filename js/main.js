import { setSearchFocus} from"./searchBar.js";
import { deleteSearchResults,buildSearchResults, clearStatsLine, setStatLine} from"./searchResults.js";
import {getSearchTerm } from "./dataFunction.js";
document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState ==="complete"){
        initApp();
    }
});
const initApp =() =>{
    setSearchFocus();
    //set the focus
    //  3 listeners clear text
    const form = document.getElementById("searchBar");
    form.addEventListener("submit",submitTheSearch);
}
// procedural " workflow" function
const submitTheSearch =(event)=>{
    event.preventDefault();
    // delete search results
    deleteSearchResults();
    // /processthe search
    processTheSearch();
    setSearchFocus();
};

const processTheSearch = async ()=>{
    // clear the stats line
    clearStatsLine();
    const searchTerm = getSearchTerm();
    if (searchTerm ==="") return;
    const resultArray = await retriveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatLine(resultArray.length);

};
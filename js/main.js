import { clearSearchText, setSearchFocus ,showClearTextButton , clearPushListener} from"./searchBar.js";
import { deleteSearchResults,buildSearchResults, clearStatsLine, setStatsLine} from"./searchResults.js";
import {getSearchTerm  , retrieveSearchResults} from "./dataFunction.js";
document.addEventListener("readystatechange",(event) =>{
    if(event.target.readyState ==="complete"){
        initApp();
    }
});
const initApp =() =>{
    setSearchFocus();
    const  search = document.getElementById("search");
    search.addEventListener("input",showClearTextButton);
     const clear = document.getElementById("clear");
     clear.addEventListener("click",clearSearchText);
     clear.addEventListener("submit",submitTheSearch);

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
    const resultArray = await retrieveSearchResults(searchTerm);
    if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);

};
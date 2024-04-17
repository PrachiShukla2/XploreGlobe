export const buildSearchResults = (resultArray) =>{
    resultArray.foreach(result =>{
      const resultItem = createResultItem(result);
      const resultContents  = document.createElement("div");
      resultContents.classList.add("resultContents");
      if(resultItem.img){
        const resultImage = createResultImage(result);
        resultContents.append(resultImage);
      }
      const resultText = createResultText(result);
      resultContents.append(resultText);
      resultItem.append(resultContents);
      const searchResults = document.getElementById("searchResults");
      searchResults.append(resultItem);
    });
}
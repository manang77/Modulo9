import Axios from "axios";

const breakingBadCharactersApiUrl =
  "https://www.breakingbadapi.com/api/characters";
const breakingBadQuotesApiUrl = "https://www.breakingbadapi.com/api/quote";

function getCharacters() {
  return Axios.get(breakingBadCharactersApiUrl).then((response) => {
    return response.data;
  });
}

function getCharacterData(characterId) {
  var characterUrl = breakingBadCharactersApiUrl + "/" + characterId;

  return Axios.get(characterUrl).then((response) => {
    return response.data[0];
  });
}

function getCharacterQuotes(characterName) {
  var characterQuotesUrl =
    breakingBadQuotesApiUrl + "?author=" + characterName.replace(" ", "+");

  return Axios.get(characterQuotesUrl).then((response) => {
    return response.data;
  });
}

export { getCharacters, getCharacterData, getCharacterQuotes };

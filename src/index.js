import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((characters) => {
  document.getElementById("root").innerText = "";
  var characterList = [];
  for (let character of characters) {
    var characterListElement = Utils.createCharacterRow(character);
    characterListElement.onclick = function () {
      displayCharacterDetails(character.char_id);
    };
    characterList.push(characterListElement);
  }
  for (let characterInList of characterList) {
    document.getElementById("root").append(characterInList);
  }
});

var displayCharacterDetails = (characterId) => {
  DataBusiness.getCharacterData(characterId).then((character) => {
    var selectedCharacter = character;
    DataBusiness.getCharacterQuotes(selectedCharacter.name).then(
      (selectedCharacterQuotes) => {
        Utils.showCharacter(selectedCharacter, selectedCharacterQuotes);
      }
    );
  });
};

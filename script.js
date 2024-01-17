const textareaE1 = document.getElementById("textarea");
const totalcounterE1 = document.getElementById("total-counter");
const charatersEnteredE1 = document.getElementById("charaters-Entered");
const RemainingcounterE1 = document.getElementById("Remaining-counter");

textareaE1.addEventListener("input", updateCounter);

function updateCounter() {
    const text = textareaE1.value;
    const totalCharacters = countAlphabeticCharacters(text);
    const maxLength = textareaE1.getAttribute("maxlength");
    const remainingCharacters = maxLength - totalCharacters;

    totalcounterE1.innerText = totalCharacters;
    RemainingcounterE1.innerText = remainingCharacters;

    const lastEnteredCharacter = getLastEnteredCharacter(text);
    charatersEnteredE1.innerText = lastEnteredCharacter !== null ? lastEnteredCharacter : "";
}

function countAlphabeticCharacters(text) {
    const alphabeticCharacterArray = text.match(/[a-zA-Z]/g) || [];
    return alphabeticCharacterArray.length;
}

function getLastEnteredCharacter(text) {
    const lastCharacterIndex = text.length - 1;

    if (lastCharacterIndex >= 0) {
        const lastCharacter = text.charAt(lastCharacterIndex);
        return getCharacterName(lastCharacter);
    }

    return null;
}

function getCharacterName(character) {
    switch (character) {
        case '\n':
            return "Enter";
        case '\t':
            return "Tab";
        case '\b':
            return "Backspace";
        default:
            return character;
    }
}

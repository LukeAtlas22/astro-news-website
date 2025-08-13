/**
 * 
 * @param {*} string 
 * @returns An array from the string, splitted by comma
 */
export function splitStringByComma(string){
    return string.split(",")
    .map((link) => link.trim())
    .filter(Boolean);
}
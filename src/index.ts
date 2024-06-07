/**
 * Checks if the provided string is a valid phone number.
 *
 * @param {string} str - The phone number string to validate.
 * @return {boolean} - Returns true if the phone number is valid, otherwise false.
 */
function telephoneCheck(str: string): boolean {
  const regex: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  if (regex.test(str) && str.length >= 10) {
    console.log(`The number (${str}) you entered is valid`);
    return true;
  } else {
    console.error(`The number (${str}) you entered is invalid`);
    return false;
  }
}

export default telephoneCheck;

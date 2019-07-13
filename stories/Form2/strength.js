// https://github.com/ruffrey/strength/blob/master/index.js
var commonPasswords = [];

/**
 * Test the arbitrary strength of a password and output a score.
 *
 * @param string input - The password to test.
 * @returns number - The score from 0=terrible to 5.0=strong.
 */
function testStrength(input) {
  var score = 0;
  if (!input) {
    return score;
  }
  // Instantly fail common passwords.
  if (commonPasswords.indexOf(input) !== -1) {
    return score;
  }

  // Letters, numbers, mixed case
  var hasLetters = /[a-z]/i.test(input);
  var hasNumbers = /[0-9]/.test(input);
  if (hasLetters && hasNumbers) {
    score += 0.5;
  }

  var hasBothCases = /[a-z]/.test(input) && /[A-Z]/.test(input);
  if (hasBothCases) {
    score += 0.5;
  }

  // Length of password
  if (input.length > 20) {
    score += 1.5;
  } else if (input.length > 15) {
    score += 1.25;
  } else if (input.length > 11) {
    score += 1;
  } else if (input.length > 7) {
    score += 0.5;
  } else if (input.length > 3) {
    score += 0.25;
  }

  var hasSpecial = /[^a-z0-9]/i.test(input);
  if (hasSpecial) {
    score += 0.5;
  }

  // has more than just:   - _ + .
  var hasReallySpecial = /[^a-z0-9\-\_\+\.]/i.test(input);
  if (hasReallySpecial) {
    score += 1;
  }

  // Right here, lets just say we don't care about repitition
  // if the password does not have any letters. This is the
  // most points it can get.
  if (!hasLetters) {
    return score;
  }

  var doesNotRepeat = true;
  for (var i = 0; i < input.length; i++) {
    if (i == 0) {
      continue;
    }
    if (input[i] === input[i - 1]) {
      doesNotRepeat = false;
      break;
    }
  }
  if (doesNotRepeat) {
    score += 0.5;
  }

  // Two in a row should not repeat.
  // Only eligible for non-super-short passwords.
  var isNotPatterned = true;
  var last2 = "";
  var next2 = "";
  if (input.length > 7) {
    for (var i = 0; i < input.length; i++) {
      if (i < 1) {
        continue;
      }

      last2 = input.substring(i - 2, i);
      next2 = input.substring(i, i + 2);

      if (last2 === next2) {
        isNotPatterned = false;
        break;
      }
    }
    if (isNotPatterned) {
      score += 0.5;
    }
  }

  return score;
}

export default testStrength;

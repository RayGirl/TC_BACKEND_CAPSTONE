// This function checks that the given email is a string and contains "@"
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  if (!email.includes('@')) {
    return false;
  }

  return true;
}

// This function checks if the given input is a non-empty string
export function isNonEmptyString(str) {
  if (typeof str !== 'string') {
    return false;
  }

  if (str.trim() === '') {
    return false;
  }

  return true;
}

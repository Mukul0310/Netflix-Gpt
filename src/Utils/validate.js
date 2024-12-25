export const checkValidate = (email, password, fullName) => {
  if (fullName) {
    const validateFullName = /^(?!\s*$)[a-zA-Z]+( [a-zA-Z]+)*$/.test(fullName);
    if (!validateFullName) {
      return "Name not valid";
    }
  }
  const validateEmail =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const validatePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!validateEmail && !validatePassword) {
    return "Email & Password are not valid";
  }
  if (!validateEmail) {
    return "Email not valid";
  }
  if (!validatePassword) {
    return "Password not valid";
  }

  return null;
};

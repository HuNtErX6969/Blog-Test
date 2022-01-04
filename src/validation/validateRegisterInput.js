import validator from "validator";

const validateRegisterInput = (data) => {
  let errors = {};
  const { name, email, password, confirmpassword } = data;
  if (validator.isEmpty(name)) {
    errors.name = "Name field is required !";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Email field is required !";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password field is required !";
  }
  if(!validator.equals(password,confirmpassword)){
    errors.confirmpassword = "Passwords aren't matching"
  }
  if (validator.isEmpty(confirmpassword)) {
    errors.confirmpassword = "Confirm Password field is required !";
  }

  return {
      isInvalid: Object.keys(errors).length > 0,
      errors:errors
  };
};

export default validateRegisterInput;
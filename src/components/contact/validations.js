// validations.js
export const validateForm = (formData) => {
  let formIsValid = true;
  let errors = {};

  if (!formData.name_user || formData.name_user.length > 25) {
    formIsValid = false;
    errors.name = "Name is required and should be a maximum of 25 characters.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email_user || !emailPattern.test(formData.email_user)) {
    formIsValid = false;
    errors.email_user = "Please enter a valid email address.";
  }

  if (!formData.subject || formData.subject.length > 25) {
    formIsValid = false;
    errors.subject =
      "Subject is required and should be a maximum of 15 characters.";
  }

  if (!formData.message) {
    formIsValid = false;
    errors.message = "Message is required.";
  }

  return { formIsValid, errors };
};

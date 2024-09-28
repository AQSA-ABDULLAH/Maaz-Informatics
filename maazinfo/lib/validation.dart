import 'package:email_validator/email_validator.dart'; // Import for email validation

// Email validation
String? validateEmail(String? email) {
  if (email == null || email.isEmpty) {
    return 'Please enter your email';
  }
  if (!EmailValidator.validate(email)) {
    return 'Please enter a valid email address';
  }
  return null;
}

// Password validation
String? validatePassword(String? password) {
  if (password == null || password.isEmpty) {
    return 'Please enter your password';
  }
  if (password.length < 5) {
    return 'Password must be at least 5 characters long';
  }
  return null;
}

// Confirm password validation
String? validateConfirmPassword(String? password, String? confirmPassword) {
  if (confirmPassword == null || confirmPassword.isEmpty) {
    return 'Please confirm your password';
  }
  if (password != confirmPassword) {
    return 'Passwords do not match';
  }
  return null;

}

// Country validation
String? validateCountry(String? country) {
  if (country == null || country.isEmpty) {
    return 'Please enter your country';
  }
  return null;
}

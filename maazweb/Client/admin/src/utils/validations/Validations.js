export function password(password) {
  if (password === "") return true;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
}
export function email(email) {
  if (email === "") return true;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  return emailRegex.test(email);
}
export function category(category) {
  if (category === "") return true;

  const categoryRegex = /^[A-Za-z]+$/;

  return categoryRegex.test(category);
}

export function title(title){
  if (title === "") return true;

  const titleRegex = /^[A-Za-z'\s]+$/;

  return titleRegex.test(title);
}

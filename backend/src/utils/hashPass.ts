import bcrypt from "bcrypt";

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePassword(
  hashedPassword: string,
  password: string
) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

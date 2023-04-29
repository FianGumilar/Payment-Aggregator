import * as bcrypt from "bcrypt";

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(rawPassword, SALT);
}

export function hashedEmail(rawEmail: string) {
  const SALT = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(rawEmail, SALT);
}

export async function comparePassword(rawPassword: string, hash: string) {
  return bcrypt.compareSync(rawPassword, hash);
}

export async function compareEmail(email: string, rawEmail: string) {
  return bcrypt.compareSync(email, rawEmail);
}

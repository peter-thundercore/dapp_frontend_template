import { isAddress } from "./ethers";

export const noByte = "0x";
export const emptyAddress = "0x0000000000000000000000000000000000000000";
export const userDeniedError = 4001;

export const displayEllipsedAddress = (address: string | null | undefined ):string => {
  const account:string = address || ""
  if (!isAddress(account)) return "";
  return (
    account.slice(0, 6) +
    "..." +
    account.slice(account.length - 4, account.length)
  );
};

export function parseEnv(name: string, defaultValue: string): string {
  const env = process.env[name]
  if (!env) {
    return defaultValue
  }

  return env
}

export function parseEnvInt(name: string, defaultValue: number): number {
  const env = process.env[name]
  if (!env) {
    return defaultValue
  }

  return parseInt(env, 10)
}

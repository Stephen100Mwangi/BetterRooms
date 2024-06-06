export const hasProcessEnv = (name: string): boolean => name in process.env;

export const getRequiredProcessEnv = (name: string): string => {
  const envVar = process.env[name]?.trim();

  if (!envVar) {
    throw new Error(`env var: ${name} not found`);
  }

  return envVar;
};

export function getOptionalProcessEnv(name: string, defaultVar?: never): null;

export function getOptionalProcessEnv(name: string, defaultVar: string): string;

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getOptionalProcessEnv(name: string, defaultVar?: string): null | string {
  return hasProcessEnv(name) ? getRequiredProcessEnv(name) : defaultVar ?? null;
}

import * as dotenv from 'dotenv';
import { join } from 'path';
const env = process.env.TEST_ENV ?? 'dev';
dotenv.config({ path: join(__dirname, `.env.${env}`) });

const DEFAULT_HEADLESS = false;
const config = {
  USER: getEnvVar('USER'),
  PASSWORD: getEnvVar('PASSWORD'),
  ACTION_TIMEOUT: getEnvVarNumber('ACTION_TIMEOUT', 30000),
  NAVIGATION_TIMEOUT: getEnvVarNumber('NAVIGATION_TIMEOUT', 60000),
  TEST_TIMEOUT: getEnvVarNumber('TEST_TIMEOUT', 90000),
  EXPECT_TIMEOUT: getEnvVarNumber('EXPECT_TIMEOUT', 20000), 
  HEADLESS: getEnvVarBoolean('HEADLESS', DEFAULT_HEADLESS)
};

function getEnvVar(varName: string): string {
  return process.env[varName] ?? throwError(varName);
}

function getEnvVarNumber(varName: string, defaultValue: number): number {
  const value = process.env[varName];
  if (value === undefined) return defaultValue;
  const parsed = Number(value);
  if (Number.isNaN(parsed) || !Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`Invalid value for ${varName}: ${value}`);
  }
  return parsed;
}

function getEnvVarBoolean(varName: string, defaultValue: boolean): boolean {
  const value = process.env[varName];
  if (value === undefined) return defaultValue;
  return value === 'true';
}

function throwError(envVar: string): never {
  throw new Error(`❌ Missing required environment variable: ${envVar}`);
}

export default config; 

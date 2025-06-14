export const consoleLogTestStart = (testTitle: string): void => {
  if (typeof testTitle !== 'string' || !testTitle.trim()) {
    throw new Error('Test title must be a non-empty string');
  }
  console.log(`Starting test: ${testTitle}`);
}; 

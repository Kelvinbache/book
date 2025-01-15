class DriveError extends Error {
  constructor(message) {
    super(message);
  }

  drive(e) {
    if (e) {
      return { message: e }
    }
  }
}

const driveError = new DriveError();

export { driveError };

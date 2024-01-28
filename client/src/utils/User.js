/**
 * @typedef {Object} UserData
 * @property {string} name - The user's name.
 * @property {string} email - The user's email.
 * @property {string} picture - The user's picture.
 */

/**
 * Class representing a user.
 */
class User {
  /**
   * Create a user.
   * @param {string} token - The user's token.
   * @param {UserData} userData - The user's data.
   * @param {boolean} isClient - Indicates if the user is a client.
   * @param {boolean} isSuperUser - Indicates if the user is a superuser.
   * @param {boolean} isLawyer - Indicates if the user is a lawyer.
   */
  constructor(token, userData, isClient, isSuperUser, isLawyer) {
    this.token = token;
    this.userData = userData;
    this.isClient = isClient;
    this.isSuperUser = isSuperUser;
    this.isLawyer = isLawyer;
  }

  /**
   * Getter for the full user name.
   * @returns {string} The full user name.
   */
  get fullName() {
    return this.userData.name;
  }

  /**
   * Check if the user is authorized.
   * @returns {boolean} True if the user is authorized, otherwise false.
   */
  isAuthorized() {
    return this.isSuperUser || this.isLawyer;
  }

  /**
   * Convert the object to JSON.
   * @returns {string} The JSON representation of the object.
   */
  toJSON() {
    try {
      return JSON.stringify(this);
    } catch (error) {
      return JSON.stringify({});
    }
  }

  /**
   * Create a User instance from JSON.
   * @param {string} jsonString - The JSON string to deserialize.
   * @returns {User} The User instance.
   */
  static fromJSON(jsonString) {
    return new User(JSON.parse(jsonString));
  }
}

// Create an instance of the User class
// const user = new User(
//   "yourTokenHere",
//   {
//     name: "John Doe",
//     email: "john@example.com",
//     picture: "profile.jpg",
//   },
//   true,
//   false,
//   true
// );

export default User;

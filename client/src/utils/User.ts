// // Define the types for user data
// type UserData = {
//   name: string;
//   email: string;
//   picture: string;
// };

// // Define the main class
// class User {
//   token: string;
//   userData: UserData;
//   isClient: boolean;
//   isSuperUser: boolean;
//   isLawyer: boolean;

//   constructor(
//     token: string,
//     userData: UserData,
//     isClient: boolean,
//     isSuperUser: boolean,
//     isLawyer: boolean
//   ) {
//     this.token = token;
//     this.userData = userData;
//     this.isClient = isClient;
//     this.isSuperUser = isSuperUser;
//     this.isLawyer = isLawyer;
//   }

//   // Getter for full user name
//   get fullName(): string {
//     return this.userData.name;
//   }

//   // Method to check if the user is authorized
//   isAuthorized(): boolean {
//     return this.isSuperUser || this.isLawyer;
//   }

// // Method to convert the object to JSON
//   toJSON(): string {
//     try {
//       return JSON.stringify(this);
//     } catch (error) {
//       return JSON.stringify({});
//     }
//   }

//   // Static method to create a User instance from JSON
//   static fromJSON(jsonString: string): User {
//     const jsonObject = JSON.parse(jsonString);
//     return new User(
//       jsonObject.token,
//       jsonObject.userData,
//       jsonObject.isClient,
//       jsonObject.isSuperUser,
//       jsonObject.isLawyer
//     );
//   }
// }

// // Create an instance of the User class
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

// // Use the toJSON method for serialization
// const serializedUser = user.toJSON();
// console.log("Serialized User:", serializedUser);

// // Use the fromJSON method for deserialization
// const deserializedUser = User.fromJSON(serializedUser);
// console.log("Deserialized User:", deserializedUser);

// export default User ;
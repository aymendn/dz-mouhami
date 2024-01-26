import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import User from "./User.ts";

// const userJsonAtom = atomWithStorage("user", null);
// const userObjectAtom = atomWithStorage((get) => {
//   const userJson = get(userJsonAtom);
//   if (userJson) {
//     return User.fromJSON(userJson);
//   }
//   return null;
// });

// export { userJsonAtom, userObjectAtom };

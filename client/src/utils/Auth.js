import { atomWithStorage } from "jotai/utils";

// get initial user from local storage
const userJsonAtom = atomWithStorage(
  "user",
  JSON.parse(localStorage.getItem("user"))
);

export { userJsonAtom };

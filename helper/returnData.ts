import { hero, hero2 } from "./fakedata";

export const getData = (path: string) => {
  if (path === "/hero") {
    return hero;
  }
  if (path === "/hero2") {
    return hero2;
  }
};

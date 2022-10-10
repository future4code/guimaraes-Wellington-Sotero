import { validateCharacter } from "../src";

describe("empty name", ()=>{
    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
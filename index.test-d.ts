import { findMany } from ".";
import { expectError } from "tsd";

// Works.
// Original TypeScript error: `Type '"invalidField"' is not assignable to type 'UserFieldEnum'.`
(async () => {
  expectError(
    await findMany({
      distinct: ["id", "invalidField", "name"],
    })
  );
})();

// Fails with:
// index.test-d.ts:15:23
//  ✖  19:2   Expected an error, but found none.
//  ✖  21:23  Type "mail" is not assignable to type UserFieldEnum. Did you mean "email"?
(async () => {
  expectError(
    await findMany({
      distinct: ["id", "mail", "name"],
    })
  );
})();

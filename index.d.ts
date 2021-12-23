export type UserFieldEnum = "id" | "email" | "name";

export function findMany(args: { distinct: UserFieldEnum[] }): Promise<unknown>;

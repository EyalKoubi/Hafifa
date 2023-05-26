import * as checks from "../types_checks";
import { Users } from "../Models";

export async function isAdmin(req: any, res: any) {
  const body = req.body;
  if (!checks.userInputsSchema.validate(body))
    return res.status(400).json({ message: "Inappropriate input" });
  const user = await Users.findOne({
    user_name: body.user_name,
    password: body.password,
  });
  if (!user) return res.send("0");
  if (user.isAdmin) return res.send("1");
  return res.send("2");
}

export async function create(req: any, res: any) {
  const body = req.body;
  await Users.insertMany([body]);
  return res.send("The admin: " + body.full_name + " added successfully!");
}

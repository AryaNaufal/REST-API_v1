const prisma = require("../db");

const getAllUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
}

module.exports = {
  getAllUsers
}

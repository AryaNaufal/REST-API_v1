const express = require('express');
const prisma = require("../db");

const { getAllUsers } = require('./user.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.send(users);
})

router.post('/', async (req, res) => {
  const newUsersData = req.body;

  const user = await prisma.user.create({
    data: {
      name: newUsersData.name,
      alamat: newUsersData.alamat,
    }
  })

  res.send({
    data: user,
    meessage: "user has successfully added!"
  });
})

router.post('/auth', async (req, res) => {
  const newUsersData = req.body;

  const user = await prisma.user.create({
    data: {
      name: newUsersData.name,
      alamat: newUsersData.alamat,
    }
  })

  res.send({
    data: user,
    meessage: "user has successfully added!"
  });
})

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  await prisma.user.delete({
    where: {
      id: parseInt(userId),
    }
  })

  res.send({
    message: "User deleted!"
  })
})

router.put("/:id", async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;

  if (
    !(
      userData.name &&
      userData.alamat
    )) {
    return res.status(400).send("Data less completed");
  }

  const user = await prisma.user.update({
    where: {
      id: parseInt(userId),
    },
    data: {
      name: userData.name,
      alamat: userData.alamat,
    }
  })

  res.send({
    data: user,
    message: "user has successfully update!"
  })
}) 

module.exports = router;
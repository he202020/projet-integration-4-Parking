const { PrismaClient } = require("@prisma/client");
const { request } = require("express");

const prisma = new PrismaClient();
//const fetch = require("node-fetch"); // Pour effectuer la requête POST

//ajouter une reservation

/*const addReservation = async function (request, response) {
  try {
    await sqlConnection`INSERT INTO reservation (numberplateStr, parking_id, day, start_time, end_time) VALUES (${request.body.numberplateStr},${request.body.parking_id},${request.body.day},${request.body.start_time},${request.body.end_time} )`;

    response.status(201).send("Réservation réussie.");
  } catch (err) {
    response.status(400).send(err.message);
  }
};*/

exports.addReservation = async function addReservation(req, res) {
  const { numberplateStr, parking_id, day, start_time, end_time } = req.body;
  let plateID = 0;
  try {
    plateID = await prisma.numberplate.findUnique({
      where: {
        str: numberplateStr,
      },
      select: {
        id : true,
      },
    });
    console.log(plateID);
    
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }

  try {
    await prisma.reservation.create({
      data: {
        numberplate_id: plateID.id ,
        parking_id: parking_id,
        day: day,
        start_time: start_time,
        end_time: end_time,
        
      },
    });
    //res.json({ statusCode: 201 });
    res.status(201).json({ statusCode: 201 });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred' });
  }
};

//afficher toutes les reservations
exports.getReservation = async function (request, response) {
  try {
    const result = await sqlConnection`
            select * from reservation
        `;
    response.status(200).json(result);
  } catch (error) {
    response.status(400).send(error.message);
  }
};



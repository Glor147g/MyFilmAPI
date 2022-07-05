//here i have imported express and the router
const express = require("express");
const router = express.Router();

//import the contents of the json file
const filmsData = require("./filmsData.json")
//here i have imported 
//here i have created an array of films to return

// const films = [
//   "King Richard",
//   "Seven Pounds",
//   "Muhammed",
//   "I, Robot",
//   "Fresh Prince of Bel Air",
// ];

// const users = [
//   "King Richard",
//   "Mae Jemison",
//   "Muhammed Ali",
//   " Nerfetiti",
//   "The Fresh Prince of Bel Air",
// ];



// here is a command ln 7 / to show/ pass the array of devices or error msg-works
router.get("/home", async (req, res) => {
  // router.get("/home", async (req, res) => {
    //we added /home to distinguish from the other endpoints
  console.log('/home')
  try {
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve a device that exists
// router.get("/films/:name", (req, res) => {
router.get("/users/:name", (req, res) => {
   //we added /films/:name to distinguish from the api-docs endpoints
  const usersExists = users.includes(req.params.name);
  //key value pairs : (this is a key)
  if (usersExists) {
    res.json(`${req.params.name} exists!`);
  } else {
    res.json(
      `${req.params.name} sorry this user does not exist in your film service :(`
    );
  }
});
//eg a server makes a request to my server to add a new device
router.post("/User", async (req, res) => {
  console.log(req);
  // filmsData.push(req.body.name);
  res.json(`${req.body.name} has been added!`);
});

//edit a request, creates a record in the database
// router.put("/", async (req, res) => {
//   console.log(req);
//   films.push(req.body.name);
//   res.json(`${req.body.name} has been replaced!`);
// });
//Update devices details

// router.patch("/:name", async (req, res) => {
//   console.log(req);
//   films.patch(req.body.name);
//   res.json(`${req.body.name} has been updated!`);
// });

// Deleting a device

// router.delete("/:name", async (req, res) => {
//   console.log(req);
//   films.delete(req.body.name);
//   res.json(`${req.body.name} has been deleted!`);
// });
module.exports = router;
//express component that allows you set up eg Axios
//menu  in the sense that it allows you look at what the api can do
//has a list of different operation- allow you to fufil different things
//swaggerdocumentation
//The main issue has been that the get All route (/:name ) conflicts with the api-docs name
//we added an extra parameter and to distinguish from each other and this seemed to work!

//once working we were able to copy the json entries in the swagger json and edit them!
const express = require("express");

class UsersRouter {
  constructor(usersController){
    this.users = express.Router();

    this.usersController = usersController;

    this.users.post("/", (request, response) => {
      this.usersController.register(request, response);
    });
    
    this.users.get("/", (request, response) => {
      this.usersController.getAll(request, response);
    });
    
    this.users.get("/:id", (request, response) => {
      this.usersController.index(request, response);
    });
    
    this.users.post("/login", (request, response) => {
      this.usersController.login(request, response);
    });
    
    this.users.put("/:id", (request, response) => {
      this.usersController.update(request, response);
    });
    
    this.users.delete("/:id", (request, response) => {
      this.usersController.delete(request, response);
    });
  }

  getRoutes(){
    return this.users;
  }
}

module.exports = UsersRouter;
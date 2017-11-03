// POST - /api/auth/login - Sets the user information on the session.
// On success return a status of 200 and the user object.
// A user object should have the following properties:
// id - This is the UserId you are using for your database.
// username - This is the username associated with the UserId.
// On failure return a status of 500.

// POST - /api/auth/register - Registers a user to the database. Sets the user information on the session.
// On success return a status of 200 and the user object.
// A user object should have the following properties:
// id - This is the UserId you are using for your database.
// username - This is the username associated with the UserId.
// On failure return a status of 500.

// POST - /api/auth/logout - Destroys the session. Sends a status of 200.



module.exports = {
  login: function(req, res, next) {
    const { session } = req;
    const { user, pass } = req.body;

    session.username = user;
    session.password = pass;


    res.status(200).send(session);

  },
  register: function(req, res, next) {
    
  },
  logout: function(req, res, next) {
    
  }
}
// POST - /api/properties - Creates a new property. Returns all the properties associated with the logged in user.
// GET - /api/properties - Returns all properties associated with the logged in user.
// DELETE - /api/properties/:id - Deletes a property. Returns all the properties associated with the logged in user.
// GET - /api/properties/filter - Filters all properties by "desired rent". Returns all the filter properties associated with the logged in user.


module.exports = {
  getProperties: function(req, res, next) {
    res.status(200).send('Success!');
  }
}

const People = require('../models/People')

module.exports = {
  async store(request, response) {
    const { firstName, lastName } = request.body;
    if (firstName === "") {
      return response.status(401).json({ "message": "Esqueceu do nome seu tapado" });
    } else if (lastName === "") {
      return response.status(401).json({ "message": "Ta né nao tem sobrenome?" });
    } else {
      people = await People.create({ firstName, lastName });
      return response.status(200).json(people);
    }
  },

  async show(request, response) {
    const { firstName } = request.params;
    const people = await People.find({ firstName })
    if (people.length !== 0) {
      return response.status(200).json(people);
    }
    return response.status(404).json({ "message": "Ta vaza, nao tem nenhum registro com essa merda" });
  },

  async destroy(request, response) {
    const { id } = request.params;
    People.findByIdAndDelete(id, function (err) {
      if (err) return response.status(404).json({ "message": "Deu Merda" });
      return response.status(200).json({ "message": "Faleceu com Sucesso" });
    });
  },

  async index(request, response) {
    People.find({}, function (err, peoples) {
      let peopleList = {};

      peoples.forEach(function (people) {
        peopleList[people._id] = people;
      });
      
      return response.status(200).json(peopleList);
    });
    
  },
};
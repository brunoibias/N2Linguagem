
const EventRoom = require('../models/EventRoom')

module.exports = {
  async store(request, response) {
    const { name, capacity } = request.body;
    if (name === "") {
      return response.status(401).json({ "message": "Esqueceu do nome seu tapado" });
    } else if (capacity === "") {
      return response.status(401).json({ "message": "Ta né nao tem sobrenome?" });
    } else {
      eventRoom = await EventRoom.create({ name, capacity });
      return response.status(200).json(eventRoom);
    }
  },

  async show(request, response) {
    const { _id } = request.params;
    const eventRoom = await EventRoom.findById({ _id })
    if (eventRoom.length !== 0) {
      return response.status(200).json(eventRoom);
    }
    return response.status(404).json({ "message": "Ta vaza, nao tem nenhum registro com essa merda" });
  },

  async update(request, response) {
    const { _id } = request.params;
    const { name, capacity } = request.body;

    EventRoom.findOneAndUpdate({ _id }, { name, capacity }, { upsert: true }, function (err, eventRoom) {
      if (err) return response.status(404).json({ "message": "nao tem nada com essa merda, vaza" });
      return response.status(200).json(eventRoom);
    });

  },

};
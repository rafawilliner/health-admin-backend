const db = require("../models")
const BenefitType = db.benefitType
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    BenefitType.findAll({
      where: condition,
      attributes: ['id', 'name']
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        //logger.error('Error findAll benefitTypes', { exception: err.message });
        res.status(500).send({
          message:
            err.message || "Error occurred while retrieving benefitTypes."
        });
      });
  };
  
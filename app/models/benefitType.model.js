module.exports = (sequelize, Sequelize) => {
    const BenefitType = sequelize.define("benefitType", {
      name: { type: Sequelize.STRING, allowNull: false  }
    },
    {
      timestamps: true
    });
  
    return BenefitType;
  };
process.env.NODE_ENV = "test"
require('dotenv').config()
const request = require("supertest")
const app = require("../index")
const db = require("../models")
const BenefitType = db.benefitType
const Op = db.Sequelize.Op

let token = ''

beforeAll(async () => {
    // seed with some data    
    let benefitType = []
    benefitType.push({ id: 1, name: "Dental" })
    benefitType.push({ id: 2, name: "Surgery" })
    await BenefitType.bulkCreate(benefitType)    
})

afterAll(async () => {
    // destroy test data
    await BenefitType.destroy({ where: { id: { [Op.in]: [1, 2] } } })
})

describe("GET /benefitType/", () => {
    test("It responds with 200 OK and returns a benefitType list", async () => {
        const response = await request(app).get("/api/benefitType/")
        expect(response.statusCode).toBe(200) 
        expect(response.body.length).toBe(2)
        expect(response.body[0]).toHaveProperty("id")
        expect(response.body[0]).toHaveProperty("name")
        expect(response.body[0].name).toBe("Dental")
        expect(response.body[1].name).toBe("Surgery")
    })    
})
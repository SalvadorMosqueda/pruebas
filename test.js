const assert = require ('assert')
require('dotenv').config();
require('./mongoConnection')
const Alumno = require('./alumno')




describe('Alumno Class Functions', function() {
    before(async function() {
        await Alumno.create({name: 'salvador', lastName: 'mosqueda lopez'})
        console.log('a')
    })

    it('it must to return a complete name', async function() {
        let alumno = await Alumno.findOne();

        let completeName = function() {
            return `${alumno.name} ${alumno.lastName}`
        }
        assert.strictEqual(`${alumno.name} ${alumno.lastName}`, completeName(`${alumno.name}`, `${alumno.lastName}`))

    })
})
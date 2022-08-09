const assert = require ('assert')
require('dotenv').config();
require('./mongoConnection')
const Categories = require('./Models/categories')
const Sucursal = require('./Models/sucursales')
const Usuarios = require('./Models/usuarios')
const Ventas = require('./Models/registroVentas')
const Libros = require('./Models/libros');



console.log('Pruebas para permisos de Administrador ')

//test para crud de categorias
describe('Categories Create Class Functions', function() {
    before(async function() {
        await Categories.create({name:'Cuentos'})
        
    })

    it('it must to return a name', async function() {
        let categories = await Categories.findOne();
        let Nombrecategoria = function() {
            return categories.name
        }
        assert.strictEqual(`${categories.name}`, Nombrecategoria())
    })
})
describe('Categories Update  Class Functions', function() {
    before(async function() {
        let categories = await Categories.findOne({name:'Cuentos'});
        categories.name = 'Literatura'
        await categories.save()
        
    })

    it('it must to return a complete name', async function() {
        let categoriesAct = await Categories.findOne({name:'Literatura'});
        assert.strictEqual(`${categoriesAct.name}`, 'Literatura')

    })
})
describe('Categories Detele  Class Functions', function() {
    before(async function() {
        let categories = await Categories.findOne({name:'Literatura'});
        await categories.deleteOne()
        
    })

    it('it must to return null', async function() {
        let categoriesAct = await Categories.findOne({name:'Literatura'});
        console.log("consol"+categoriesAct)
        assert.strictEqual(`${categoriesAct}`, 'null')

    })
})

//test para crud de los libros 
describe('Sucursales Create Class Functions', function() {
    before(async function() {
        await Sucursal.create({name:'Villa del sol'})
    })

    it('it must to return a name', async function() {
        let sucursales = await Sucursal.findOne();
        let Nombrecategoria = function() {
            return sucursales.name
        }
        assert.strictEqual(`${sucursales.name}`, Nombrecategoria())
    })
})


describe('sucursales Update  Class Functions', function() {
    before(async function() {
        let sucursales = await Sucursal.findOne({name:'Villa del sol'});
        sucursales.name = 'villa fontanas'
        await sucursales.save()
        
    })

    it('it must to return a complete name', async function() {
        let SucursalesAct = await Sucursal.findOne({name:'villa fontanas'});
        assert.strictEqual(`${SucursalesAct.name}`, 'villa fontanas')

    })
})

describe('Sucursales Detele  Class Functions', function() {
    before(async function() {
        let sucursales = await Sucursal.findOne({name:'villa fontanas'});
        await sucursales.deleteOne()
        
    })

    it('it must to return null', async function() {
        let sucursalesAct = await Sucursal.findOne({name:' '});
        assert.strictEqual(`${sucursalesAct}`, 'null')

    })
 })

//test para crud de usuarios
describe('Usuarios Create Class Functions', function() {
    before(async function() {
        await Usuarios.create({nombre:'Juan',password:'12345',email:'juan@gmail.com',tipo:'admin'})
        
    })

    it('it must to return a email', async function() {
        let getUser = await Usuarios.findOne({email:'juan@gmail.com'});
        assert.equal(`${getUser.email}`,'juan@gmail.com')
    })
})


describe('Usuarios Update username  Class Functions', function() {
    before(async function() {
        let usuario = await Usuarios.findOne({email:'juan@gmail.com'});
        usuario.nombre = 'ramon'
        await usuario.save()
        
    })

    it('it must to return a complete name', async function() {
        let usuarioAct = await Usuarios.findOne({email:'juan@gmail.com'});
        assert.strictEqual(`${usuarioAct.nombre}`, 'ramon')

    })
})
describe('Usuarios Update Email  Class Functions', function() {
    before(async function() {
        let usuario = await Usuarios.findOne({email:'juan@gmail.com'});
        usuario.email = 'ramon@gmail.com'
        await usuario.save()
        
    })

    it('it must to return a email', async function() {
        let usuarioAct = await Usuarios.findOne({email:'ramon@gmail.com'});
        assert.strictEqual(`${usuarioAct.nombre}`, 'ramon')

    })
})
describe('Usuarios Update tipo  Class Functions', function() {
    before(async function() {
        let usuario = await Usuarios.findOne({email:'ramon@gmail.com'});
        usuario.tipo = 'cliente'
        await usuario.save()
        
    })

    it('it must to return a email', async function() {
        let usuarioAct = await Usuarios.findOne({email:'ramon@gmail.com'});
        assert.strictEqual(`${usuarioAct.tipo}`, 'cliente')

    })
})


describe('Usuarios Detele  Class Functions', function() {
    before(async function() {
        let usuarios = await Usuarios.findOne({email:'ramon@gmail.com'});
        await usuarios.deleteOne()
        
    })

    it('it must to return null', async function() {
        let usuariosAct = await Usuarios.findOne({email:'ramon@gmail.com'});
        assert.strictEqual(`${usuariosAct}`, 'null')

    })
 })
        //crud libros
describe('Libros  Create Class Functions', function() {
    before(async function() {
        await Libros.create({title:'el principito',categoria:'62f1a7295ddfeed6726dcf22',price:400,cantidad:2,codigo:12345,sucursal:'62f1ac2ffcad48a31a5bd690'
    })
    })

    it('it must to return Book', async function() {
        let Libro = await Sucursal.findOne();
        let LibroInfo = function() {
            return `${Libro.title,Libro.categoria,Libro.price,Libro.cantidad,Libro.codigo,Libro.sucursal}`
        }
        assert.strictEqual(`${Libro.title,Libro.categoria,Libro.price,Libro.cantidad,Libro.codigo,Libro.sucursal}`, LibroInfo())
    })
})
describe('Libros Update tipo  Class Functions', function() {
    before(async function() {
        let libro = await Libros.findOne({title:'el principito'});
        console.log('la cantidad actualmente era '+libro.cantidad)
        libro.cantidad = 1
        await libro.save()
        
    })

    it('it must to return la cantidad 1', async function() {
        let libroAct = await Libros.findOne({email:'el principito'});
        assert.strictEqual(`${libroAct.cantidad}`, '1')
        console.log('la cantidad actualizada es '+libroAct.cantidad)
        

    })
})
describe('Libros Update price tipo  Class Functions', function() {
    before(async function() {
        let libro = await Libros.findOne({title:'el principito'});
        console.log('el precio actualmente era '+libro.price)
        libro.price = 300
        await libro.save()
        
    })

    it('it must to return la cantidad 1', async function() {
        let libroAct = await Libros.findOne({email:'el principito'});
        assert.strictEqual(`${libroAct.price}`, '300')
        console.log('el prrecio actualizado es '+libroAct.price)
        

    })
})
describe('Libros Update title tipo  Class Functions', function() {
    before(async function() {
        let libro = await Libros.findOne({title:'el principito'});
        console.log('el el titulo actualmente es '+ libro.title)
        libro.title = 'el principe'
        await libro.save()
        
    })

    it('it must to return la cantidad 1', async function() {
        let libroAct = await Libros.findOne({email:'el principe'});
        assert.strictEqual(`${libroAct.title}`, 'el principe')
        console.log('el titulo actualizado es '+libroAct.title)
        

    })
})

describe('libros Detele  Class Functions', function() {
    before(async function() {
        let libro = await Libros.findOne({email:'el principe'});
        await libro.deleteOne()
        
    })

    it('it must to return null', async function() {
        let libroAct = await Libros.findOne({email:'el principe'});
        assert.strictEqual(`${libroAct}`, 'null')

    })
 })

//test para crud de ventas
describe('Ventas Create Class Functions', function() {
    before(async function() {
        await Ventas.create({codigo:'62f1b5e836769c514b9d913f',ingresos:600,cantidad:2,sucursal:'62f1ac2ffcad48a31a5bd690'})
        
    })

    it('it must to return a email', async function() {
        let venta = await Ventas.findOne();

       let Info = function() {
            return `${venta.codigo,venta.ingresos, venta.cantidad,venta.sucursal}`
        }
        assert.strictEqual(`${venta.codigo,venta.ingresos, venta.cantidad,venta.sucursal}`, Info())
    })
})

describe('Libros Update title tipo  Class Functions', function() {
    before(async function() {
        let venta = await Ventas.findOne({codigo:'62f1b5e836769c514b9d913f'});
        console.log('el ingreso es '+ venta.ingresos)
        venta.ingresos = 700
        await venta.save()
        
    })

    it('it must to return la cantidad 700', async function() {
        let ventaAct = await Ventas.findOne({codigo:'62f1b5e836769c514b9d913f'});
        assert.strictEqual(`${ventaAct.ingresos}`, '700')
        console.log('el ingreso atualizado es '+ventaAct.ingresos)
        

    })
})
describe('venta Detele  Class Functions', function() {
    before(async function() {
        let venta = await Ventas.findOne({codigo:'62f1b5e836769c514b9d913f'});
        await venta.deleteOne()
        
    })

    it('it must to return null', async function() {
        let ventaAct = await Ventas.findOne({codigo:'62f1b5e836769c514b9d913f'});
        assert.strictEqual(`${ventaAct}`, 'null')

    })
 })


//test para filtrar libros por su nombre  funcion para el cliente 

describe('Libros  Create Class Functions', function() {
    before(async function() {
        await Libros.create({title:'el huevon',categoria:'62f1a7295ddfeed6726dcf22',price:100,cantidad:5,codigo:1345,sucursal:'62f1ac2ffcad48a31a5bd690'
    })
    })

    it('it must to return Book', async function() {
        let Libro = await Libros.findOne({title:'el huevon'});
        let LibroInfo = function() {
            return `${Libro.title}`
        }
        assert.strictEqual(`${Libro.title}`, LibroInfo())
        let sucursalDelLibro = await Sucursal.findOne({sucursal:'62f1ac2ffcad48a31a5bd690'});
        console.log(' se encontro el libro y esta en la sucursal '+sucursalDelLibro.name)
    })
})
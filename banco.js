import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbAtiv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso')
}).catch(erro => {
    console.log('Erro: ' +erro)
})

const Clientes = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})




Clientes.sync({ force: true })

Clientes.create(
    {
        nome: 'Lucas Albuquerque',
        endereco: 'Rua Denis',
        bairro: 'Denisland',
        cep: '12345-678',
        telefone: '(11) 1234-5678',
        celular: '(11) 91234-5678'
    },
    {
        nome: 'Denis Alado',
        endereco: 'Rua Albuquerque',
        bairro: 'Goiaba',
        cep: '87654-321',
        telefone: '(11) 8765-4321',
        celular: '(11) 98765-4321'
    },
    {
        nome: 'João Henrique',
        endereco: 'Rua das Goiabeiras',
        bairro: 'Goiaba',
        cep: '54321-787',
        telefone: '(11) 5464-3121',
        celular: '(11) 95464-3121'
    },
)
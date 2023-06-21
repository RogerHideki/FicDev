const express = require('express')
const app = express()
const database = require('./db/db')
const Tarefas = require('./model/tarefas')
const Usuarios = require('./model/usuarios')

app.use(express.json())

app.get('/tarefas', (req, res) => {
    Tarefas.findAll()
        .then((tarefas) => {
            if (tarefas.length > 0) {
                res.json(tarefas)
            } else {
                res.json({ msg: 'Nenhuma tarefa encontrada.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params
    Tarefas.findAll({
        where: { id: parseInt(id) },
    })
        .then((tarefa) => {
            if (tarefa.length > 0) {
                res.json(tarefa)
            } else {
                res.json({ msg: 'tarefa não encontrada.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/tarefas', (req, res) => {
    const { titulo, descricao, data_de_vencimento, status, id_usuario } = req.body
    if (titulo && status && id_usuario) {
        let novatarefa = {
            titulo: titulo,
            descricao: descricao,
            data_de_vencimento: data_de_vencimento,
            status: status,
            id_usuario: id_usuario
        }
        Tarefas.create(novatarefa)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    } else {
        res.json({ msg: 'Houve um erro. Título, status ou id_usuario não podem ser nulos.' })
    }
})

app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Tarefas.update(alteracao, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0] === 1) {
                res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                res.json({ status: result[0], msg: 'Não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params
    Tarefas.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'Tarefa excluida com sucesso.' })
            } else {
                res.json({ msg: 'Tarefa não encontrada.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/usuarios', (req, res) => {
    Usuarios.findAll()
        .then((usuarios) => {
            if (usuarios.length > 0) {
                res.json(usuarios)
            } else {
                res.json({ msg: 'Nenhum usuário encontrado.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    Usuarios.findAll({
        where: { id: parseInt(id) },
    })
        .then((usuario) => {
            if (usuario.length > 0) {
                res.json(usuario)
            } else {
                res.json({ msg: 'Usuário não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body
    if (nome && email) {
        let novousuario = {
            nome: nome,
            email: email
        }
        Usuarios.create(novousuario)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Usuarios.update(alteracao, {
        where: {
            id: parseInt(id),
        },
    })
        .then((result) => {
            if (result[0] === 1) {
                res.json({ status: result[0], msg: 'Dados alterados com sucesso.' })
            } else {
                res.json({ status: result[0], msg: 'Não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params
    Usuarios.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'Usuário excluído com sucesso.' })
            } else {
                res.json({ msg: 'Usuário não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

    ; (async () => {
        try {
            await database.sync({ alter: true })
            console.log('Banco de dados conectado e modelos sincronizados.')

            app.listen(3000, () => {
                console.log('Servidor iniciado na porta 3000.')
            })
        } catch (error) {
            console.error('Erro ao conectar-se ao banco de dados:', error)
        }
    })()
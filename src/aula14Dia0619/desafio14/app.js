const express = require('express')
const app = express()
const database = require('./db/db')
const Produtos = require('./model/produtos')
const Funcionarios = require('./model/funcionarios')
const Vendas = require('./model/vendas')
const VendasProdutos = require('./model/vendasProdutos')

app.use(express.json())

app.get('/produtos', (req, res) => {
    Produtos.findAll()
        .then((produtos) => {
            if (produtos.length > 0) {
                res.json(produtos)
            } else {
                res.json({ msg: 'Nenhum produto encontrado.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    Produtos.findAll({
        where: { id: parseInt(id) },
    })
        .then((produto) => {
            if (produto.length > 0) {
                res.json(produto)
            } else {
                res.json({ msg: 'produto não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/produtos', (req, res) => {
    const { descricao, preco, marca, data_de_vencimento, tipo } = req.body
    if (descricao && preco && marca && data_de_vencimento && tipo) {
        let novoproduto = {
            descricao: descricao,
            preco: preco,
            marca: marca,
            data_de_vencimento: data_de_vencimento,
            tipo: tipo
        }
        Produtos.create(novoproduto)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

app.put('/produtos/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Produtos.update(alteracao, {
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

app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params
    Produtos.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'Produto excluído com sucesso.' })
            } else {
                res.json({ msg: 'Produto não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/funcionarios', (req, res) => {
    Funcionarios.findAll()
        .then((funcionarios) => {
            if (funcionarios.length > 0) {
                res.json(funcionarios)
            } else {
                res.json({ msg: 'Nenhum funcionário encontrado.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/funcionarios/:id', (req, res) => {
    const { id } = req.params
    Funcionarios.findAll({
        where: { id: parseInt(id) },
    })
        .then((funcionario) => {
            if (funcionario.length > 0) {
                res.json(funcionario)
            } else {
                res.json({ msg: 'funcionario não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/funcionarios', (req, res) => {
    const { nome, data_de_nascimento, sexo, escolaridade } = req.body
    if (nome && data_de_nascimento && sexo && escolaridade) {
        let novofuncionario = {
            nome: nome,
            data_de_nascimento: data_de_nascimento,
            sexo: sexo,
            escolaridade: escolaridade
        }
        Funcionarios.create(novofuncionario)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

app.put('/funcionarios/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Funcionarios.update(alteracao, {
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

app.delete('/funcionarios/:id', (req, res) => {
    const { id } = req.params
    Funcionarios.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'Funcionário excluído com sucesso.' })
            } else {
                res.json({ msg: 'Funcionário não encontrado.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/vendas', (req, res) => {
    Vendas.findAll()
        .then((vendas) => {
            if (vendas.length > 0) {
                res.json(vendas)
            } else {
                res.json({ msg: 'Nenhuma venda encontrada.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/vendas/:id', (req, res) => {
    const { id } = req.params
    Vendas.findAll({
        where: { id: parseInt(id) },
    })
        .then((venda) => {
            if (venda.length > 0) {
                res.json(venda)
            } else {
                res.json({ msg: 'venda não encontrada.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/vendas', (req, res) => {
    const { data, status, id_funcionario } = req.body
    if (data && status && id_funcionario) {
        let novavenda = {
            data: data,
            status: status,
            id_funcionario: id_funcionario
        }
        Vendas.create(novavenda)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

app.put('/vendas/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    Vendas.update(alteracao, {
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

app.delete('/vendas/:id', (req, res) => {
    const { id } = req.params
    Vendas.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'Venda excluída com sucesso.' })
            } else {
                res.json({ msg: 'Venda não encontrada.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/vendas_produtos', (req, res) => {
    VendasProdutos.findAll()
        .then((vendasProdutos) => {
            if (vendasProdutos.length > 0) {
                res.json(vendasProdutos)
            } else {
                res.json({ msg: 'Nenhuma vendaProduto encontrada.' })
            }
        })
        .catch((err) => {
            res.json({ erro: 'Houve um erro.' })
        })
})

app.get('/vendas_produtos/:id', (req, res) => {
    const { id } = req.params
    VendasProdutos.findAll({
        where: { id: parseInt(id) },
    })
        .then((venda_produto) => {
            if (venda_produto.length > 0) {
                res.json(venda_produto)
            } else {
                res.json({ msg: 'vendaProduto não encontrada.' })
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

app.post('/vendas_produtos', (req, res) => {
    const { id_venda, id_produto } = req.body
    if (id_venda && id_produto) {
        let novavendaproduto = {
            id_venda: id_venda,
            id_produto: id_produto
        }
        VendasProdutos.create(novavendaproduto)
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
})

app.put('/vendas_produtos/:id', (req, res) => {
    const { id } = req.params
    const alteracao = req.body
    VendasProdutos.update(alteracao, {
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

app.delete('/vendas_produtos/:id', (req, res) => {
    const { id } = req.params
    VendasProdutos.destroy({
        where: { id: parseInt(id) },
    })
        .then((result) => {
            if (result) {
                res.json({ msg: 'VendaProduto excluída com sucesso.' })
            } else {
                res.json({ msg: 'VendaProduto não encontrada.' })
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
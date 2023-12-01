import { Router } from 'express'
import { Request, Response } from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send('Testando!')
})
//criando a rota de produtos
router.get('/produtos', produtoController.produto)
router.get('/cadastro', produtoController.cadastrar)
router.post('/cadastrar', produtoController.finalizarCadastro)
router.get('/editar/:id', produtoController.editar)
router.post('/editar/:id', produtoController.editarProduto)
router.get('/excluir/:id', produtoController.excluir)


export default router
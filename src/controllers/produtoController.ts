import { Request, Response } from "express";
import { Produto } from "../models/Produto";

export const produto = async (req:Request, res:Response) =>{

    let products = await Produto.findAll()
    res.render("pages/produto",{
        products
    })
}

export const cadastrar = (req:Request, res:Response) =>{
    res.render("pages/cadastrar")
}

export const finalizarCadastro = async (req:Request, res:Response) =>{

    await Produto.create({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.redirect('/produtos')
}

export const editar = async (req:Request, res:Response) =>{
    let {id} = req.params

    let produto = await Produto.findByPk(id)

    res.render("pages/editar", {produto, id})
}

export const editarProduto = async (req:Request, res:Response) =>{
    let {id} = req.params
    let {nome, preco} = req.body

    await Produto.update({
        nome,
        preco
    },{
        where:{
            id:id
        } 
    })

    res.redirect('/produtos')
}



export const excluir = async (req:Request, res:Response) =>{

    let {id} = req.params

    await Produto.destroy({
        where: {
          id: id
        }
      })

    res.redirect('/produtos')
}


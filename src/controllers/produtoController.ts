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
    res.redirect('pages/cadastrar')
}




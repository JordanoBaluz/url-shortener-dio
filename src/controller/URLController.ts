import express, { Request, response, Response } from 'express'
import shortId from 'shortid';
import { config } from '../config/Constants';
import { URLModel } from '../database/model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        //ver se a url ja nao existe
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if (url) {
            res.json(url)
            return
        }
        //criar o hash para a URL
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        const newURL = await URLModel.create({ hash, shortURL, originURL })
        // salvar a url no banco
        // retornar a url que a gente salvou
        res.json({ newURL })
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        //pegar hash da url
        const { hash } = req.params
        //encontrar a url original pelo hash
        const url = await URLModel.findOne({ hash })

        if (url) {
            res.redirect(url.originURL)
            return
        }

        res.status(400).json({ error: 'URL not found' })
    }

}
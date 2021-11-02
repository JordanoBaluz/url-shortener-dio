//import { prop, Typegoose } from '@hasezoey/typegoose'
import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
    @prop({ required: true })
    public hash: string;

    @prop({ required: true })
    public originURL: string

    @prop({ required: true })
    public shortURL: string
}

export const URLModel = getModelForClass(URL)
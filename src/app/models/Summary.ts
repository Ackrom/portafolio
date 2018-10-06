import { TimeStamp } from "./interfaces/TimeStamp.interface";

export class Summary implements TimeStamp{
    title:string;
    content:string;
    createdAt:Date;
    updatedAt:Date;
}
import { TimeStamp } from "./interfaces/TimeStamp.interface";

export class ToolOrTecnology implements TimeStamp{
    name:string;
    description:string;
    experience:string;
    createdAt:Date;
    updatedAt:Date;
}
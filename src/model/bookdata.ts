export class bookdata{
    ID:number;
    Title:string;
    PublishDate:Date;
    PageCount:number;
    Description:string;
    Excerpt:string
    
}

export class bookResponse
 {
    book: Array<bookdata>;
 }

export class Books
{
 constructor(book_id:string,book_name:string,author:string, price:number,language:string,
    publication_date:string,
    image:string,
    genre:string,
    description:string,
    quantity:number) 
    {
        this.book_id=book_id;
        this.book_name=book_name;
        this.author=author;
        this.price=price;
        this.language=language;
        this.publication_date=publication_date;
        this.image=image;
        this.genre=genre;
        this.quantity=quantity;
        this.description=description;  
    }
book_id:string;
book_name:string;
author:string;
price:number;
language:string;
publication_date:string;
image:string;
genre:string;
description:string;
quantity:number;

get BookId()
{
    return this.book_id;
}
set BookId(book_id:string)
{
    this.book_id=book_id;
}

get BookName()
{
    return this.book_name;
}
set BookName(book_name:string)
{
    this.book_name=book_name;
}


get Author()
{
    return this.author;
}
set Author(author:string)
{
    this.author=author;
}

get Price()
{
    return this.price;
}
set Price(price:number)
{
    this.price=price;
}

get Language()
{
    return this.language;
}
set Language(language:string)
{
    this.language=language;
}

get PDate()
{
    return this.publication_date;
}
set PDate(publication_date:string)
{
    this.publication_date=publication_date;
}

get Image()
{
    return this.image;
}
set Image(image:string)
{
    this.image=image;
}

get Genre()
{
    return this.genre;
}
set Genre(genre:string)
{
    this.genre=genre;
}


get Quantity()
{
    return this.quantity;
}
set Quantity(quantity:number)
{
    this.quantity=quantity;
}

get Description()
{
    return this.description;
}
set Description(description:string)
{
    this.description=description;
}


}
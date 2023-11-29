    function Author(name,birthYear,nationality)
    {
        this.name = name;
        this.birthYear = birthYear;
        this.nationality = nationality;
    }

    function Book(title,author,genre,price)
    {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }

    Book.prototype.getBookInfo = function() 
    {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author.name}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
        console.log("-------------------------");
    };

    var author1 = new Author("Amzad Hussain",1999,"Indian");
    var author2 = new Author("Vicky",2002,"American");
    var author3 = new Author("Amir Hussain",1979,"Australian");
    var author4 = new Author("faiz Ali",1984,"Indian");
    var author5 = new Author("Imran Ali",1994,"Russian");


    var book1 = new Book("The Dark Night",author1,"Horror",120);
    var book2 = new Book("The Mind Set",author2,"Magical",179);
    var book3 = new Book("Festival",author3,"Happiness",149);
    var book4 = new Book("My Life",author4,"Boring",110);
    var book5 = new Book("Poor Man",author5,"Struggle",160);

    book1.getBookInfo();
    book2.getBookInfo();
    book3.getBookInfo();
    book4.getBookInfo();
    book5.getBookInfo();

    console.log(book1,book2,book3,book4,book5);
    

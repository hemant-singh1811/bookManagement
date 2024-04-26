# bookManagement

---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.
MongoDB should install in your system. install guide : https://www.mongodb.com/docs/manual/administration/install-community/

## Install

    $ git clone https://github.com/hemant-singh1811/bookManagement
    $ cd bookManagement
    $ npm install 

    install the mongodb server



## Configure app

    default id & password & PORT are given in .env file

Running the project

    start the mongodb server
    $ node server.js



## documentation

    To access the documentation go to http://localhost:3000/api-docs



API end points : 

1. /login : to get logged in and get the userToken.
2. /books (post) : to insert a book and return unique id of book.
3. /books (get) : to get the all books.
4. /getFilteredBooks : to get the Filtered books by author or publication year.
5. /books/:id (get) : to get the info of specific books by id
6. /books/:id (put) : to do update of book info by book id
7. /books/:id (delete) : to delete the given book by id

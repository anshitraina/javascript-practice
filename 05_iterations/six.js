// const coding = ["js", "ruby", "python", "cpp", "java"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);
// for each didn't return any value 


//maps
const myNums= [1,2,3,4,5,6,7,8,9,10]
// const newnums = myNums.filter( (num) => {
//     return num >4})
// console.log(newnums);



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums); 

const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationYear: 1925
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationYear: 1937
    }
  ];
  
  let userBooks = books.filter ((bk)=>bk.genre==='Fiction')
  userBooks = books.filter ((bk) => { 
    return bk.publicationYear>=1930 && bk.genre === "Fiction"
  })
  
  console.log(userBooks);



  
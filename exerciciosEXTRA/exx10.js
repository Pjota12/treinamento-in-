const booksByCategory = [
    {
    category: "Riqueza",
    books: [
    {
    title: "Os segredos da mente milionária",
    author: "T. Harv Eker",
    },
    {
    title: "O homem mais rico da Babilônia",
    author: "George S. Clason",
    },
    {
    title: "Pai rico, pai pobre",
    author: "Robert T. Kiyosaki e Sharon L. Lechter",
    },
    ],
    },
    {
    category: "Inteligência Emocional",
    books: [
    {
    title: "Você é Insubstituível",
    author: "Augusto Cury",
    },
    {
    title: "Ansiedade – Como enfrentar o mal do século",
    author: "Augusto Cury",
    
    },
    {
    title: "Os 7 hábitos das pessoas altamente eficazes",
    author: "Stephen R. Covey"
    }
    ]
    }
    ];
const numeroDeCategorias = booksByCategory.length;
console.log("Número de categorias: " +numeroDeCategorias);
    
booksByCategory.forEach(categoryObj => {
    const numeroDeLivros = categoryObj.books.length;
    console.log("Categoria: " + categoryObj.category);
    console.log("Número de livros: " + numeroDeLivros);
    });
//------------------------------------------------------------------------
var lista_autores = []
booksByCategory.forEach(categoryObj => {
    categoryObj.books.forEach(book => {
        lista_autores.push(book.author)
    })
})
console.log(lista_autores.length)
//-------------------------------------------------------------------------
var livros_de_augusto = []
booksByCategory.forEach(categoryObj =>{
    categoryObj.books.forEach(book => {
        if(book.author.includes("Augusto Cury")){
            livros_de_augusto.push(book.title)
        }
    })
})
console.log(livros_de_augusto)
//-------------------------------------------------------------------------
function mostrarLivros(autor){
    var lista_autor = []
    booksByCategory.forEach(categoryObj =>{
        categoryObj.books.forEach(book => {
            if(book.author.includes(autor)){
                lista_autor.push(book.title)
            }
        })
    })
    return lista_autor
}
var autor = prompt('digite o nome de um autor')
var lista_autor = mostrarLivros(autor)
console.log(lista_autor)


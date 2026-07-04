import { BookOpen, Bookmark, Tag } from "lucide-react";

export function Libraryview() {
  const books = [
    { id: 1, title: "Cien años de soledad", author: "G. García Márquez", genre: "Ficción", price: 22000 },
    { id: 2, title: "Sapiens", author: "Yuval Noah Harari", genre: "Ensayo", price: 18500 },
    { id: 3, title: "El nombre del viento", author: "Patrick Rothfuss", genre: "Fantasía", price: 25000 },
    { id: 4, title: "Dune", author: "Frank Herbert", genre: "Ciencia Ficción", price: 28000 },
    { id: 5, title: "Cocina Fácil", author: "Karlos Arguiñano", genre: "Gastronomía", price: 15000 },
  ];

  return (
    <div className="p-6 bg-blue-950/10 border border-blue-500/20 rounded-3xl h-full">
      <div className="flex items-center justify-between mb-6">
         <h2 className="text-2xl font-bold text-blue-400 flex items-center gap-3">
            <BookOpen className="size-7" />
            Módulo Librería - Catálogo
        </h2>
        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">+ Nuevo Libro</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {books.map(book => (
          <div key={book.id} className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition hover:border-blue-400">
            <div className="h-40 bg-blue-900 flex items-center justify-center p-4">
                <BookOpen className="size-16 text-blue-300 opacity-50" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded-full self-start mb-2">
                <Tag className="size-3" />
                {book.genre}
              </span>
              <h4 className="font-bold text-foreground leading-tight flex-1">{book.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
              
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-2">
                 <span className="text-lg font-bold text-blue-600">${book.price.toLocaleString()}</span>
                 <button className="p-2 bg-secondary rounded-lg text-foreground hover:bg-blue-600 hover:text-white">
                    <Bookmark className="size-4"/>
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

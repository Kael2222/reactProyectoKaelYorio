/*
export const discos = [
    {
        id:"1",
        img: "https://www.efeeme.com/wp-content/uploads/smashing-pumpkins-adore-10-11-14.jpg",
        title: "Smashing Pumpkins - Adore",
        precio: 5000,
        stock: 10,
        categoria:"Internacional"
     },
     {
        id:"2",
        img: "https://www.nacionrock.com/wp-content/uploads/the-smiths-meat-is-murder.jpg",
        title: "The Smiths - Meat is murder ",
        precio: 6000,
        stock: 8,
        categoria:"Internacional"
     },
     {
        id:"3",
        img: "https://i.pinimg.com/originals/f0/46/c2/f046c24f85c223ec73c0d3f11dc283d2.jpg",
        title: "The Drums - Portamento",
        precio: 8000,
        stock: 5,
        categoria:"Internacional"
     },
     {
        id:"4",
        img: "https://i.pinimg.com/originals/56/61/93/56619379ff90d704ed1e8bb38834099b.jpg",
        title: "The Velvet Underground and Nico",
        precio: 7000,
        stock: 10,
        categoria:"Internacional"
     },
     {
      id:"5",
      img: "https://i.pinimg.com/originals/e0/dd/c2/e0ddc22d898419659fa82013d65b58b5.jpg",
      title: "Babasonicos - Jessico",
      precio: 4500,
      stock: 6,
      categoria:"Nacional"
   },
   {
      id:"6",
      img: "https://i.pinimg.com/originals/33/ff/92/33ff92acb79c1d62260b6a96b8fdf859.jpg",
      title: "Sui Generis - Vida",
      precio: 5000,
      stock: 10,
      categoria:"Nacional"
   },
   {
      id:"7",
      img: "https://i.pinimg.com/originals/16/a0/28/16a0282e513de928c304a2dced07643e.jpg",
      title: "Luis Alberto Spinetta - Para los arboles",
      precio: 6000,
      stock: 4,
      categoria:"Nacional"
   },
   {
      id:"8",
      img: "https://i.pinimg.com/originals/7b/72/74/7b7274c22fdcf4cbecd794b639182405.jpg",
      title: "Virus - Superficies de placer",
      precio: 5500,
      stock: 7,
      categoria:"Nacional"
   }
];

export const getData = (nombreCategoria) => {
   return new Promise((res) => {
       const discosFiltrados = discos.filter((disco)=> disco.categoria === nombreCategoria); 
       const valor = nombreCategoria ? discosFiltrados : discos;
       setTimeout(() => {
           res(valor);
       }, 2000)
  });
}  ; 


*/
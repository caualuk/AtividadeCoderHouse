export const mockData = [
  {
    id: 1,
    title: "Whey",
    description: "Detalhes do whey",
    price: 10.0,
    pictureUrl: "https://product-data.raiadrogasil.io/images/3446808.webp",
    stock: 5,
  },
  {
    id: 2,
    title: "Creatina",
    description: "Detalhes da Creatina",
    price: 15.0,
    pictureUrl: "https://cdn.awsli.com.br/800x800/395/395149/produto/263510026/creatina-carbo-fuel-oztrzfhv0f.jpg",
    stock: 3,
  },
  {
    id: 3,
    title: "Pré-treino",
    description: "Detalhes do Pré-Treino",
    price: 20.0,
    pictureUrl: "https://cdn.awsli.com.br/600x700/2356/2356489/produto/249728422/huger-bubblegum-160g-fvbpbsff48.png",
    stock: 10,
  },
];

export const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 2000);
  });
};

export default mockData;
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max= 10000) {
    return parseInt(Math.random() * (max - min)) + min
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numeroAleatorio(), nome: 'Caneta', preco: 5.60 },
        { id: numeroAleatorio(), nome: 'Caderno', preco: 15.50 },
        { id: numeroAleatorio(), nome: 'Borracha', preco: 2.40 },
        { id: numeroAleatorio(), nome: 'Tesoura', preco: 3.30 }
    ])
}

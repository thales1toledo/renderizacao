export async function getStaticProps() {
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()
    return {
        props: {
            produtos
        }
    }
}

export default function Estatico4(props: any) {

    console.log('[cliente] renderizando componente..')

    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                <li key={produto.id}>
                    {produto.id} - {produto.nome} tem preço de R${produto.preco}
                </li>
            )
        })

    }

    return (
        <div>
            <h1>Estatico #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}
export function getStaticProps() {
    return {
        revalidate: 7, //segundos
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props: any) {

    return (
        <div>
            <h1>Estatico #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}
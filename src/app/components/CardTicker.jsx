
export default function CardTicker({ cardTicker }) {
    return (
        <div className=" flex bg-cyan-500 h-14 dark:bg-neutral-800 items-center p-2 justify-between ">
            
                <p>{cardTicker.bolsa}</p>
                <p>{cardTicker.codigo}</p>
                <p>{cardTicker.empresa}</p>
                <p>{cardTicker.valor}</p>
                <p>{cardTicker.variacao}</p>
           
        </div>
    )
}
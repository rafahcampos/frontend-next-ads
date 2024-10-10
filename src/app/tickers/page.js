import Footer from "../components/Footer"
import Header from "../components/Header"
import Image from "next/image"
import Link from "next/link"
import CardTicker from "../components/CardTicker"



export default function Tickers(tickers) {

  const cardTicker = [
    {
        bolsa: "NASDAQ",
        codigo: "AAPL",
        empresa: "Apple Inc",
        valor: 25080,
        variacao: 0.35,
        nAcoes: 40
    },
    {
        bolsa: "NASDAQ",
        codigo: "MSFT",
        empresa: "Microssoft Corp",
        valor: 51090,
        variacao: -1.5,
        nAcoes: 40
    },
    {
        bolsa: "NASDAQ",
        codigo: "META",
        empresa: "Meta Plataform Inc.",
        valor: 43262,
        variacao: 2.3,
        nAcoes: 5
    }
  ]

  return (
    <>
      <Header isLogged = {false} user={{}}/>
      <main className="p-0.5">
        <h1 className="text-3xl">Sobre o React</h1>
    <CardTicker cardTicker={cardTicker[0]} />


        <Link href="/tickers"> </Link>
      </main>

      <Footer/>
    </>
  )
};



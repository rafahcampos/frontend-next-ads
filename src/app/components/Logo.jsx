import { MdOutlineAutoGraph as LogoHome } from "react-icons/md";

export default function Logo() {
    return (
        <>
            <div style={styles.container}>
                <LogoHome className="text-orange-700 text-3xl" ></LogoHome>
                <h1><span style={styles.if}>IFFinance</span></h1>
            </div>
        </>
    )


}

const styles = {
    container: {
        display:"flex",
        color: "white",
        gap: 14,
        fontSize: 28,
        justifyContent: 'center',
        alignItens: 'center'
    },
    if: {
        color: '#454356'
    }
}
'use client'
import styles from "./styles.module.css";
import axios from "axios";
import React from "react";

export default function SobreMim() {

    var enderecoInicial = {
        bairro: '',
        cep: '',
        localidade: '',
        logradouro: '',
        uf: ''
    }

    const [newCep, setNewCep] = React.useState("");

    const handleOnClick = (cep: string) => {
        setNewCep(cep);
        console.log(newCep);
        setEndereco(endereco);
        console.log(endereco);
    }

    const [endereco, setEndereco] = React.useState(enderecoInicial);

    React.useEffect(() => {
        async function fetchData() {
            if(newCep == "") {
                console.log("Erro ao retornar dados da API de CEP");
            } else {
                const { data } = await axios.get(`/${newCep}/json`, {
                    baseURL:
                        `https://viacep.com.br/ws`
                });
                setEndereco(data); 
            }
        }
        fetchData();
    }, [newCep]);

    return (
        <>

            <div className={styles.sobremim}>
                <h1 className={styles.header}>Sobre mim</h1>
                <h2 className={styles.header2}>Meu nome é Erica Okamura, tenho 37 anos e nasci em São Paulo, Brasil.</h2>
                <div className={styles.divbutton}>
                    <button className={styles.buttonEndereco} onClick={() => handleOnClick("05055010")}>
                        Clique aqui para saber meu endereço
                    </button>
                </div>
                <div style={{display: endereco == enderecoInicial ? "none" : "block", textAlign: "center"}}>
                    <div className={styles.campo}>
                        <h3 className={styles.field}>CEP:</h3>
                        <h4 className={styles.item}>{endereco.cep}</h4>
                    </div>
                    <div className={styles.campo}>
                        <h3 className={styles.field}>Logradouro:</h3>
                        <h4 className={styles.item}>{endereco.logradouro}</h4>
                    </div>
                    <div className={styles.campo}>
                        <h3 className={styles.field}>Bairro:</h3>
                        <h4 className={styles.item}>{endereco.bairro}</h4>
                    </div>
                    <div className={styles.campo}>
                        <h3 className={styles.field}>Localidade:</h3>
                        <h4 className={styles.item}>{endereco.localidade}</h4>
                    </div>
                    <div className={styles.campo}>
                        <h3 className={styles.field}>UF:</h3>
                        <h4 className={styles.item}>{endereco.uf}</h4>
                    </div>
                </div>
            </div>
        </>
    )

}



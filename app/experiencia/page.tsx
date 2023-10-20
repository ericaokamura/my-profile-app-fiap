import styles from "./styles.module.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { Menu } from "../menu";

export default function Experiencia() {

    return (
        <>
            <Menu/>
            <div className={styles.experiencia}>
                <h1 className={styles.header}>Minhas experiências profissionais</h1>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color= "#0F2CA0" gutterBottom>
                            Consultor de Sistemas Pleno
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            BRQ Digital Solutions
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Outubro 2020 - Atual
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <p>Trabalho com as tecnologias Java 11, Spring, Apache Camel, Kafka, JUnit, Mockito para o cliente Santander como Desenvolvedor Java</p> 
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color= "#0F2CA0" gutterBottom>
                            Software Developer
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Tata Consultancy Services
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Agosto 2018 - Outubro 2020
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <p>Trabalhei com as tecnologias Java 8+, Spring Framework, JUnit, Mockito, Angular 2+ para diversos clientes</p> 
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color= "#0F2CA0" gutterBottom>
                            Application Developer
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            eBaoTech Corporation
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Novembro 2017 - Junho 2018
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <p>Trabalhei com as tecnologias Java 6, Struts 2, JPA, Oracle SQL para um cliente do ramo de seguros</p> 
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color= "#0F2CA0" gutterBottom>
                            Java Developer
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            UL - Transaction Security
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Junho 2017 - Setembro 2017
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            <p>Trabalhei com as tecnologias Java 8, HTML, CSS, JavaScript para o cliente Visa</p> 
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
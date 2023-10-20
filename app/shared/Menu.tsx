'use client'
import * as React from 'react';
import styles from "./styles.module.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation';

export default function Menu() {
    
    const { push } = useRouter();
    
    return (
        <header className={styles.header}>
            <h1 className={styles.header1}>
                MEU PORTFÓLIO
            </h1>
            <div className={styles.lista}>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Sobre mim
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => push("/sobre-mim")} size="small"><p className={styles.paragraph}>Saiba mais sobre mim...</p></Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Formação Acadêmica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => push("/formacao")} size="small"><p className={styles.paragraph}>Saiba mais sobre minha formação acadêmica...</p></Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Experiência Profissional
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => push("/experiencia")} size="small"><p className={styles.paragraph}>Saiba mais sobre minhas experiências profissionais...</p></Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 200, marginTop: "10px", marginBottom: "30px", marginRight: "30px", backgroundColor: "#F2A3AE", border: "3px solid #DB3F43" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hobbies
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => push("/hobbies")} size="small"><p className={styles.paragraph}>Saiba mais sobre meus hobbies...</p></Button>
                    </CardActions>
                </Card>
            </div>
        </header>
    )

}

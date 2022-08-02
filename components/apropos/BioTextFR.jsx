import { Container, Typography } from "@material-ui/core";

const BioTextFR = () => {
    return (<Container maxWidth="md">
        <Typography variant="body1" align="justify" gutterBottom>
            Après vingt ans d'expérience professionnelle dans le secteur du tourisme, j'ai eu envie d'un nouveau challenge et j'ai décidé de réintégrer le secteur informatique, où j'ai commencé ma carrière en tant que administrateur de réseau. Je me suis inscrit au CNED pour préparer un BTS SIO option Solutions Logicielles et Applications Métiers, diplôme que j'ai obtenu début juillet 2022.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            Les deux années de formation m'ont permis de me familiariser avec la programmation orientée objet (C#, Java, PHP), la modélisation d'applications et de bases de données (UML, Merise/2) et la gestion de base de données SQL (MySQL, PostgreSQL) et NoSQL (MongoDB, Neo4j). Parallèlement aux cours, j'ai appris du JavaScript, React et Node.js.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            Pendant les deux stages en milieu professionnel j'ai pu mettre en pratique mes acquis : création d'un site web vitrine en Next.js pour mon stage de première année, puis développement d'une application Microsoft Teams en Node.js pendant le stage de deuxième année.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            Passionné par les technologies du web et du cloud, je suis actuellement à la recherche de mon premier poste en tant que développeur web.
        </Typography>
    </Container>
    )
}

export default BioTextFR;
import { Container, Typography } from "@material-ui/core";

const BioTextGB = () => {
    return (<Container maxWidth="md">
        <Typography variant="body1" align="justify" gutterBottom>
            After twenty years of work experience in the tourism industry, I was looking for a new challenge and decided to return to IT, where I started my career as a system administrator. I enrolled at the French National Distance Learning Centre (CNED) and obtainied a BTS SIO SLAM (a 2-year technical degree in programming) in July 2022.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            These two years of training have allowed me to get acquainted with OOP (C#, Java, PHP), databases (MySQL, PostgreSQL, MongoDB, Neo4j) and application and database modelling (UML, Merise/2). Aside from the official curriculum I also took a few courses on Udemy, on JavaScript, React and Node.js.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            I've done two internship during which I was able to put into practice what I'd learned. For the first-year internship I created a showcase website in Next.js, the second year I developped a Microsoft Teams application in Node.js.
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            Fascinated by the various web and cloud technologies, currently I'm looking for my first position as a web developer.
        </Typography>
    </Container>
    )
}

export default BioTextGB;
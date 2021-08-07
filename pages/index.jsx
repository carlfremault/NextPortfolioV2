import { Typography } from "@material-ui/core";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Typography variant="h1" color="primary">
        Hello
      </Typography>
      <Typography variant="h2" color="secondary">
        World
      </Typography>
      <Typography variant="h5">
        {[...new Array(20)]
          .map(
            () =>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolorum laborum asperiores enim voluptates hic dolor similique totam voluptas quam, culpa nulla. Dolores asperiores obcaecati assumenda nisi corrupti adipisci perferendis."
          )
          .join("\n")}
      </Typography>
    </>
  );
}

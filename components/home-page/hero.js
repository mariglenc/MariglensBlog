import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/glen.jpeg"
          width={300}
          height={300}
          alt="An image showing Glen"
        />
      </div>
      <h1>Greetings! I'm Glen</h1>
      <p>
        Exploring web development, networking intricacies, and VoIP
        technologies.
      </p>
      <p>
        Navigating ever-shifting tech landscapes, sharing discoveries, and
        embracing possibilities.
      </p>
    </section>
  );
}

export default Hero;

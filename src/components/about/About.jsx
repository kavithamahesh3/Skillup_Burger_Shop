// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

const About = () => {
    return(
        <section className="about">
            <main>
                <h1>About US</h1>
                <article>
                    <h4>Burger Shop</h4>
                    <p>
                        Welcome to Burger Shop. The place for most tasty burgers 
                        in the world.
                    </p>
                    <p>
                        Explore the various types of food and burgers. Click below
                        to see the menu!
                    </p>
                    <Link to="/">
                        <RiFindReplaceLine /> 
                    </Link>
                </article>
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Nelson</h3>
                        </div>
                        <p>
                            Hi, I'm Nelson, the founder of Burger Shop.
                            Affliated to good taste.
                        </p>
                    </article>
                </div>
            </main>

        </section>
    );
};

export default About;
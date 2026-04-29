import HTML from '../../assets/html.png';
import JavaScrtipt from '../../assets/javascript.webp';
import CSS from '../../assets/CSS.png';
import React from '../../assets/react.png';
import SQL from '../../assets/SQL.png';
import Supabase from '../../assets/supabase.png';
import Node from '../../assets/Node.png';
import { Link } from 'react-router';
import Postgresql from '../../assets/Postgresql.png';

const About = () => {
  return (
    <section className="content-section">
      <div className="content-wrapper">
        <h1 className="paragraph-space">This is me!</h1>
        <p className="paragraph-space">
          I am a self-taught front-end developer, I am really passionate about
          tech. I enjoy programming in my free time and develop interesting
          thing that can help people make their life easier. When I am not
          programming you can find me reading a good such as{' '}
          <Link
            className="external-link"
            to="https://ww3.lectulandia.co/book/juego-de-tronos-ed-ilustrada/"
          >
            Game of Thrones
          </Link>
          , playing with my little boy or watching TV with my lovely wife.
        </p>

        <div className="skills-wrapper">
          <h2 className="paragraph-space">Some of my skills 💪</h2>
          <div className="skills">
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={HTML} />
                <h5>HTML</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={CSS} />
                <h5>CSS</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={JavaScrtipt} />
                <h5>JavaScript</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={React} />
                <h5>React</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={SQL} />
                <h5>SQL</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={Supabase} />
                <h5>Supabase</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={Node} />
                <h5>Node</h5>
              </div>
            </article>
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={Postgresql} />
                <h5>Postgresql</h5>
              </div>
            </article>
          </div>
        </div>
        <h1 className="paragraph-space">FYI</h1>
        <p className="paragraph-space">
          Programming is not only what I do, I can speak fluently English too.
          Currently I am working as a Over the Phone Interpreter (OPI) and Video
          Remote Interpreter (VRI) for a company in Lima. I worked as a
          freelancer for different companies as programmer for companies in Lima
          and for a regional fruit exporter in the north of the country (Peru).
        </p>
        <h1 className="paragraph-space">Wanna be in contact?</h1>
        <p className="paragraph-space">
          If you wanna be in contact with me, please, do not hesistate in
          contact me at: carloshmayo@gmail.com
        </p>
      </div>
    </section>
  );
};
export default About;

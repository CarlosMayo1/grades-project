import reactImg from '../../assets/react.png';
import reactRouterDom from '../../assets/react-router.svg';
import reactHookForm from '../../assets/react-hook-form.png';
import { Link } from 'react-router';

const Home = () => {
  return (
    <section className="content-section">
      <div className="content-wrapper">
        <h1 className="paragraph-space">What is this project about?</h1>
        <p className="paragraph-space">
          The main idea behind this project is to practice not just technology
          but some programmer skills that are essential as a front-end
          developer. I would like to show what I have learned from this basic
          project, what are the techonlogies used and what issued I have faced
          and solved.
        </p>
        <div className="skills-wrapper">
          <h2 className="paragraph-space">Some front-end skills</h2>
          <div className="skills">
            <article className="skill">
              <div className="skill-header">
                <img className="skill-img" src={reactImg} />
                <h5>React</h5>
              </div>
              <p>
                Principal framework used the whole project, it was essential to
                manipulate the state.
              </p>
            </article>
            <article>
              <div className="skill-header">
                <img className="skill-img" src={reactRouterDom} />
                <h5>React Router Dom</h5>
              </div>
              <p>
                Mainly used for navigation of the page, it is really useful for
                Single Page Application (SPA).
              </p>
            </article>
            <article>
              <div className="skill-header">
                <img className="skill-img" src={reactHookForm} />
                <h5>React Hook Form</h5>
              </div>
              <p>
                It was used form form validation on the client side, set up max
                and min amounts of characters and display errors.{' '}
              </p>
            </article>
          </div>
        </div>
        <p className="paragraph-space">
          This project also includes Web Responsiveness to make it accessible to
          multiple devices. In order to generate PPT reports this project works
          with different libraries that make it possible such as:{' '}
          <Link
            className="external-link"
            to="https://www.npmjs.com/package/pizzip"
            target="_blank"
          >
            pizzip
          </Link>
          ,{' '}
          <Link
            className="external-link"
            to="https://www.npmjs.com/package/docxtemplater"
            target="_blank"
          >
            docxtemplater
          </Link>
          ,{' '}
          <Link
            className="external-link"
            to="https://www.npmjs.com/package/file-saver"
            target="_blank"
          >
            file-saver
          </Link>
          . For the icons, it integrates a free but powerful library called{' '}
          <Link
            className="external-link"
            to="https://tabler.io/icons"
            target="_blank"
          >
            @tabler/icons-react
          </Link>
          .
        </p>
        <h1 className="paragraph-space">A gift for teachers 🎁</h1>
        <p className="paragraph-space">
          I came up with this project after seeing my wife updating a PPT file
          for each student, basically she had to add the name, date, level and
          grades for between 20 - 60 students, a nightmare right? I noticed that
          this repetitive work can be done more efficiently by using a form so
          she only needs to worry about putting the grades and the PPT document
          is downloaded with all the information added.
        </p>
        <p className="paragraph-space">
          As a husband of a teacher and as a formed teacher I really know how
          much time we can spend on doing grades and forms! Time is a valuable
          thing so I encourage you to use it to finish you job quicker. I hope
          you enjoy it as much as I did.
        </p>
        <p className="paragraph-space">
          If you have any feedback or an interesting idea that can improve this
          simple project, please do not hesistate to contact me at:
          carloshmayo@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Home;

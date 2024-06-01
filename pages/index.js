import Header from "./Header";
import Education from "./education";
import Qualifications from "./qualifications";
import Resume from "./resume";
import Skills from "./skills";
import SocialLinks from "./sociallinks";

const Home = () => {
  return (
    <>
       <>
      <Header />
      <main className="container mx-auto mt-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <h1>
           My name is balwant kiraula
        </h1>
        <h2>
            i am from  Uttarakhand  and i'm post Graduate from Uttarakhand technical University with the degree of Masters's in Computer application
        </h2>
          <p className="text-lg text-gray-700 mb-8">I am a front-end developer specializing in building exceptional digital experiences.</p>
        </div>
        <section className="bg-white rounded-lg shadow-lg p-6">
          <Resume />
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <Qualifications />
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <Education />
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <Skills />
        </section>
        <section className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <SocialLinks />
        </section>
      </main>
    </>
    </>
  );
}

export default Home;

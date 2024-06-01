import Header from "./Header";
const Contact = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto mt-4">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="mt-4">Feel free to reach out to me via email at     -   <a href="https://mail.google.com/"> balwantkiraula123@gmail.com</a>.</p>
        <div>
    <a href="https://www.linkedin.com/in/balwant-kiraula/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H5zm2 2h10v12H7V5zm3 5h1.5v.5H10V10zm0 1.75h1.5v.5H10V11.75zm0 .75h1.5v.5H10v-.5zm0 1.75h1.5v.5H10v-.5zm-1.25-2.5a.25.25 0 11-.002-.498A.25.25 0 018.75 12zm-1.5-1.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"/>
            </svg>
         linkedin </a>
    </div>
     
      </main>
    </>
  );
}

export default Contact;

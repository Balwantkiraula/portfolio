import Header from "./Header";

const Projects = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="mt-4">Here are some of the projects I have worked on:</p>
        <ol className="mt-4 list-disc list-inside">
          <div> 1 - E-Commerce App
            </div>
            <div>
 An Ecommerce application using React.js for front end.
Context API for storing data and Firebase for authentiction.
React Router for page navigation , GitHub for version control, Firebase
for authentication and deployment
<div>
<a href="https://github.com/Balwantkiraula/ecom-website">https://github.com/Balwantkiraula/ecom-website</a>
</div>
</div>
<div>

</div>
         <div>
         2  - Expense Tracker
         </div>
         <div>
Developed an expense tracker app in which user can add, delete and
update expense
Premium feature are also introduced to get dark mode and Download
expenses
Utilize React.js libraray for creating this website, Redux for state
management, GitHub for version control , FireBase for storing data
and authentication
         </div>
         <div>
          <a href="https://github.com/Balwantkiraula/ExpenseTrackerReact">https://github.com/Balwantkiraula/ExpenseTrackerReact</a>
         </div>
         <div>
         3  -  Mail Box Client
         </div>
         <div>
Developed a mailbox client website in which user can receive and
send mail to another register user
User can view total unread messages
Utilize React.js library for creating this application, Redux for state
management, GitHub for version control, FireBase for storing data
</div>
<div><a href="https://github.com/Balwantkiraula/MailBoxClient">https://github.com/Balwantkiraula/MailBoxClient</a>

         </div>
        </ol>
      </main>
    </>
  );
}

export default Projects;

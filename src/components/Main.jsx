import './main.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TheJitu from '../pages/TheJitu';
import Fullstack from '../pages/Fullstack';
import Training from '../pages/Training';
import Application from '../pages/Application';
import Notfound from '../pages/Notfound';

function Main() {
  const blogs = [
    {
      title: 'Above the cloud',
      content: 'Rsync stands for . It is a Linux-based tool that can be used to sync files between remote and/or local servers.',
      to: '/theJitu',
    },
    {
      title: 'Argo ',
      content: 'Software developers at The Jitu are well equipped and have good skills in full-stack development',
      to: '/fullstack',
    },
    {
      title: 'Kube',
      content: 'Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation (CNCF).',
      to: '/training',
    },
    {
      title: 'CORS',
      content: 'Allow CORS: Access-Control-Allow-Origin lets you easily perform cross-domain Ajax requests in web applications.',
      to: '/application',
    },
  ];

  return (
    <div className="main">
      <div className="main-content">
        {blogs.map((blog, index) => {
          return (
            <div className="blog" key={index}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <Link style={{ textDecoration: 'none' }}to={blog.to}> More</Link>
            </div>
          );
        })}
      </div>
      <div className="aside">
        {blogs.map((blog, index) => {
          return (
            <div className="blog-aside" key={index}>
              <h3>{blog.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/theJitu" element={<TheJitu />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/training" element={<Training />} />
        <Route path="/application" element={<Application />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;

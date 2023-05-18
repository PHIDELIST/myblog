import './main.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ssl from '../pages/Ssl';
import Argo from '../pages/Argo';
import Rsync from '../pages/Rsync';
import Nginx from '../pages/Nginx';
import Notfound from '../pages/Notfound';

function Main() {
  const blogs = [
    {
      title: 'Above the cloud',
      content: 'Rsync stands for . It is a Linux-based tool that can be used to sync files between remote and/or local servers.',
      to: '/ssl',
    },
    {
      title: 'Argo ',
      content: 'In accordance with the yearly support KEP, the Kubernetes Community will support active patch release series for a period of roughly fourteen',
      to: '/argo',
    },
    {
      title: 'Rsync',
      content: 'Rsync is an essential tool when it comes to file-level operations. It is a flexible tool that will keep your directories in syncF.',
      to: '/rsync',
    },
    {
      title: 'Nginx',
      content: 'Allow CORS: Access-Control-Allow-Origin lets you easily perform cross-domain Ajax requests in web applications.',
      to: '/nginx',
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
        <Route path="/ssl" element={<Ssl />} />
        <Route path="/argo" element={<Argo />} />
        <Route path="/rsync" element={<Rsync />} />
        <Route path="/nginx" element={<Nginx />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;

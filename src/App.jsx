import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Repos from './components/Repos';
import Pagination from './components/Pagination';
import users from "../components/users";

function App() {
  const [count, setCount] = useState(0)
  const [portfolio, setportfolio] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1)
  const [dynamicRoute, setDynamicRoute] = useState(false);

  function chooseRepo() {
    setDynamicRoute(true);
    
  }

  useEffect(() => {
    fetch("https://api.github.com/users/somtypromes/repos")
    .then((res) => res.json())
    .then((data) => {
      setportfolio(data);
      setTotalPages(math.ceil(data.length / USER_PER_PAGE));
      setLoading(false);
    });
  }, []
  );
  
  const handleClick = (btn) => {
    if (btn === "next") {
      setpage(page +1);
      return;
    }
    setpage(page -1);
  };

  function pagination() {
    const pages = [...Array(totalPages).keys()].map((num) => num + 1);
    const previousPage = (event) => {
      event.preventDefault();
      setpage(page - 1);
    };
    const nextPage = (event) => {
      event.preventDefault();
      setpage(page + 1);
    }
    
  }


  return (
    <>
      <div>
        <h2 alt="repository-list">Github Repository</h2>
        <users
        users={portfolio}
        page={page}
        chooseRepo={chooseRepo}
        dynamicRoute={dynamicRoute}
        ></users>
        <Pagination
        totalPages={totalPages}
        setpage={setpage}
        page={page}
        ></Pagination>

      </div>
    </>
  )
}
export default App

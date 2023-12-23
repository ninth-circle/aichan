import './App.css';

function Navbar() {
  return (
      <div className="banner">
        <h1 className="aichan">ai<span className="rose-text">CHAN</span></h1>
        <a href="https://github.com/Ninth-Circle/aichan" target="_blank">
          <button className="banner-button">Website Code</button>
        </a>
      </div>
  );
}

const boards = [
  "Anime", "Manga", "Science", "Fiction", "History", "Computers", "Maths", "Science", "Physics", "Chemistry", "Biology", "Archeology", "Books", "Linguistics", "Music", "Videos", "Philosophy", "Psychology", "Chess", "Volleyball", "Arts" 
]

function BoardContainer() {
  const boardButtons = boards.map(board => <button className="board-button">{board}</button>);
  return (<div className="board-container">{boardButtons}</div>);
}

function App() {
  return (
    <div className="body">
      <Navbar/>
      <div className="board-header"><h2>Boards</h2></div>
      <BoardContainer/>
    </div>
  );
}

export default App;

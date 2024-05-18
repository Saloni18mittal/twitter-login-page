import './App.css';

function App() {
  return (
    <div className="App">
     <div className='logo-box' >
      <img src="./logo.jpg" alt="logo" className='logo'/>
     <h2> Sign in to twitter</h2>
     <button>
      <img src="google.jpg" alt="logo" />
      Sign in with Google
     </button>
     <button>
      <img src="apple.jpg" alt="logo" />
      Sign in with Google
     </button>
     <hr></hr>
     <span>Or</span>
     <form>
      <input type ="text" placeholder='Phone Email or username '/>
      <button> Next</button>
     </form>
     <button>forget password</button>
     <p> Don't have an account<a>Sign up</a></p>
     </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string
}
interface IThemeProps {
  [key: string]: {color: string; background: string}
}
const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://meixiang474.github.io/images/avatar.png')
  const dogresult = data as IShowResult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Hello message="hello world 2"/>
          <LikeButton/>
          <button onClick={() => setShow(!show)}> toggle show MouseTracker</button>
          {
            show && <MouseTracker/>
          }
          {
            loading ? <p>读取中</p> : <img src={dogresult && dogresult.message}/>
          }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;

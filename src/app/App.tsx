
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import Navbar from '../widgets/Navbar'
import {Modal} from "../shared/ui/Modal/Modal";
import { useState } from "react";
import LoginModal from "../features/AuthByUserName/ui/LoginModal/LoginModal";
import Button, { ButtonThemes } from "../shared/ui/Button/Button";



function App() {
  const { theme } = useTheme( );
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <div className={classNames("app", {}, [theme])}>
      <Navbar/>
        <Button primary={true} themes={ ButtonThemes.SOLID} onClick={() => setIsModalOpen(true)}>OPEN </Button>
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className=""/>
        <div className="main_container">
         
          <Button secondary={true} themes={ ButtonThemes.CLEAR} >
            Clear
          </Button>
          <Button secondary={true} themes={ ButtonThemes.OUTLINE} >
            Outline
          </Button>
          <Button secondary={true} themes={ ButtonThemes.SOLID} >
            Filled
          </Button>
          
          <Button primary={true} themes={ ButtonThemes.CLEAR} >
            Clear
          </Button>
          <Button primary={true} themes={ ButtonThemes.OUTLINE} >
            Outline
          </Button>
          <Button primary={true} themes={ ButtonThemes.SOLID} >
            Filled
          </Button>
        </div>


        
        
        <AppRouter/>
       
      </div>
    </>
  );
}

export default App;

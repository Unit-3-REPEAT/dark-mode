import  useLocalStorage  from './useLocalStorage'
import { useEffect } from 'react';


//create a function
const useDarkMode = () => {

    //'Dark mode' is the key and false is initial state
    const [darkMode, setDarkMode] = useLocalStorage('Dark mode', false);

    useEffect(() => {
        darkMode ? window.document.body.classList.add('dark-mode')
        :
        window.document.body.classList.remove('dark-mode')
    }, [darkMode]) 



    const setDark = () => {
        !darkMode ? setDarkMode(true) : setDarkMode(false)
    }

    return [darkMode, setDark]

}

export default useDarkMode;
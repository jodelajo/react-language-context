import React, { createContext, useState}  from 'react';


export const LanguageContext = createContext({})

function LanguageContextProvider({ children }) {
    const [language, toggleLanguage] = useState('nl');


    function getlanguageDutch (){
        toggleLanguage('nl')
    }

    function getlanguageSpanish (){
        toggleLanguage('es')
    }

    const data = {
        activeLanguage: language,
        getNlFunction: getlanguageDutch,
        getESFunction: getlanguageSpanish,
    }



    return (
        <LanguageContext.Provider value={data}>
            { children }
        </LanguageContext.Provider>
    )
}
export default LanguageContextProvider;

import { useState } from 'react';
import './App.css'
import './index.css'
import { Trans } from 'react-i18next';
import i18n from './utils/i18n';

import { useTranslation } from 'react-i18next';

function App() {
  const {t} = useTranslation();
  const [value,setValue]=useState('');
  function handleChange(e:React.ChangeEvent<HTMLSelectElement>){
    setValue(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
   <header className="flex-container px-7"> 
     <div>
    <p><Trans i18nKey="welcomeuser">
        Welcome <i>user</i>! <b>to the website</b>
    </Trans></p></div> 
    <div className=''><select className="select" value={value} onChange={handleChange}>
    <option value="en" >English</option>
    <option value="fr" >Français</option>
    <option value="el" >Ελληνικά </option>
   </select></div>
  
</header>
<div className="overflow-x-auto flex-1 md:flex md:justify-center md:items-center  2xl:px-40 xl:px-20 lg:px-10 md:px-10 sm:text-xs 
                   rounded-box border border-base-content/5 bg-base-100">
            
    {/* flex-1 md:flex md:justify-center md:items-center 
                   overflow-x-auto
                   2xl:px-40 xl:px-20 lg:px-10 md:px-10 sm:text-xs 
                   rounded-box border border-base-content/5 bg-base-100 */}
    <table className="table scrollable-table position-fixed">
      <thead>
        <tr>
          <th className="">{t('idofbook')}</th>
          <th className="">{t('bookname')}</th>
          <th className="">{t('author')}</th>
          <th className="">{t('year')}</th>
          <th className="">{t('awards')}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th  className="">{t('id1')}</th>
          <th className="">{t('book1')}</th>
          <th  className="">{t('author1')}</th>
          <th  className="">{t('year1')}</th>
          <th  className="">{t('awards1')}</th>
        </tr>
          <tr>
          <th  className="">{t('id2')}</th>
          <th  className="">{t('book2')}</th>
          <th  className="">{t('author2')}</th>
          <th  className="">{t('year2')}</th>
          <th  className="">{t('awards2')}</th>
        </tr>
          <tr>
          <th  className="">{t('id3')}</th>
          <th  className="">{t('book3')}</th>
          <th  className="">{t('author3')}</th>
          <th  className="">{t('year3')}</th>
          <th  className="">{t('awards3')}</th>
        </tr>
      </tbody>
    </table>
   </div>
   
   <footer className="flex-container px-7">
    {/* <div><p>{t('WelcomeMessage',{count:3})}</p></div> */}
    <div>
    <p>{t('footercontent')}</p></div>
     <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
   </footer>
   </>
  
  )
}

export default App

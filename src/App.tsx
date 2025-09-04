
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
   <header className="flex-container bg-sky-500/10"> 
    <div><p>{t('WelcomeMessage',{count:3})}</p></div>
    <div><select value={value} onChange={handleChange}>
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="el">Ελληνικά </option>
   </select></div>
    {/* <div>
    <p><Trans i18nKey="welcomeuser">
        Welcome <i>user</i>! <b>to the website</b>
    </Trans></p></div> */}
</header>

   <div className="content">
    <table className="table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">{t('bookname')}</th>
          <th className="border px-4 py-2">Author</th>
          <th className="border px-4 py-2">Published Year</th>
          <th className="border px-4 py-2">Awards</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th  className="border px-4 py-2">1</th>
          <th className="border px-4 py-2">Harry Potter</th>
          <th  className="border px-4 py-2">J.K.Rowling</th>
          <th  className="border px-4 py-2">1997</th>
          <th  className="border px-4 py-2">something</th>
        </tr>
          <tr>
          <th  className="border px-4 py-2">1</th>
          <th  className="border px-4 py-2">Harry Potter</th>
          <th  className="border px-4 py-2">J.K.Rowling</th>
          <th  className="border px-4 py-2">1997</th>
          <th  className="border px-4 py-2">something</th>
        </tr>
          <tr>
          <th  className="border px-4 py-2">1</th>
          <th  className="border px-4 py-2">Harry Potter</th>
          <th  className="border px-4 py-2">J.K.Rowling</th>
          <th  className="border px-4 py-2">1997</th>
          <th  className="border px-4 py-2">something</th>
        </tr>
      </tbody>
    </table>
   </div>
   <footer className="flex-container">
    <div><p>{t('WelcomeMessage',{count:3})}</p></div>
    <div><select value={value} onChange={handleChange}>
    <option value="en">English</option>
    <option value="fr">Français</option>
    <option value="el">Ελληνικά </option>
   </select></div>
    <div>
    <p><Trans i18nKey="welcomeuser">
        Welcome <i>user</i>! <b>to the website</b>
    </Trans></p></div>
   </footer>
   </>
  
  )
}

export default App

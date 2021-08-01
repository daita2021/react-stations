// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1>Dog app</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src='https://images.dog.ceo/breeds/pointer-german/n02100236_2392.jpg' />
    </div>
  )
}

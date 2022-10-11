import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x=2;
  return (
    <div>
        <h1 className={headerStyles.title}>
        {/* <h1 className="title"> */}
            <span>WebDev</span> News
        </h1>
        {/* STYLE JSX */}
        {/* <style jsx>
            {
                `
                .title{
                    color:${x<5?'red':'black'};
                }
                `
            }

        </style> */}
          <p className={headerStyles.description}>Keep up to date with the dev news.</p>
      
    </div>
  )
}

export default Header

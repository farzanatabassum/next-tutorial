import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x=2;
  return (
    <div>
        {/* <h1 className={headerStyles.title}> */}
        <h1 className="title">
            <span>WebDev</span> News
        </h1>
        <style jsx>
            {
                `
                .title{
                    color:${x<5?'red':'black'};
                }
                `
            }

        </style>

      
    </div>
  )
}

export default Header

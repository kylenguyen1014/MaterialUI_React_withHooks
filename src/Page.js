import React from 'react'
import './Page.css';

function Page({children}) {
    return (
        <section classNames='page'>
            {children}
        </section>
    )
}

export default Page;

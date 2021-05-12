import React from 'react'

export default function Post() {
   return (
      <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
         <h1>Javascript and ReactJS</h1>
         <h4>Quentin Ackermann - 24/12/2029</h4> 
         <p>
            The main idea in React is to use components. You can create functions and classes called components (function-component and class-component).  
            I had a hard time understanding what exactly is a component when I started using react, but actually it is anything, really. It's a way of splitting your application to loosely couple the logic.  
            Let's say you are building ... a blog!
         </p>
      </div>
   );
}

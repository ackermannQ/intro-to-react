import React from 'react'

export default function Post() {
   let today = new Date();
   const dd = today.getDate();
   const mm = today.getMonth() + 1;
   const yyyy = today.getFullYear();

   const date = mm + '/' + dd + '/' + yyyy;

   return (
      <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
         <h1>Javascript and ReactJS</h1>
         <h4>Quentin Ackermann - {date}</h4> 
         <p>
            The main idea in React is to use components. You can create functions and classes called components (function-component and class-component).  
            I had a hard time understanding what exactly is a component when I started using react, but actually it is anything, really. It's a way of splitting your application to loosely couple the logic.  
            Let's say you are building ... a blog!
         </p>
      </div>
   );
}

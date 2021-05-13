import React from 'react'

interface PostProps {
   author: string;
   content: string;
   title: string;
}

export default function Post(props: PostProps) {
   let today = new Date();
   const dd = today.getDate();
   const mm = today.getMonth() + 1;
   const yyyy = today.getFullYear();

   const date = mm + '/' + dd + '/' + yyyy;

   return (
      <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
         <h1>{props.title}</h1>
         <h4>{props.author} - {date}</h4> 
         <p>
            {props.content}
         </p>
      </div>
   );
}

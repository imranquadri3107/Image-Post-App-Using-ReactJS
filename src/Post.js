import React from 'react';

const Post = (data, Index) => 
<div key={Index} className='imgPost'>
  <h2>{data.titleValue}</h2>
  <img src={data.imageValue} alt="New Pic;"/>    
</div>;

export default Post

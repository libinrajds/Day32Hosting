// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//        <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">    
//           <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
//             Blog app
//           </Typography>
         
//         <Link to={"/blog"}> < Button sx={{ color: 'white' }}>Blog</Button></Link>
//         <Link to={"/addblog"}> < Button sx={{ color: 'white' }}>ADD Blog</Button></Link>
//         <Link to={"/"}> < Button sx={{ color: 'white' }} onClick={()=>{
//           sessionStorage.removeItem('logintoken');
//         }}>Logout</Button></Link>
        
//       </AppBar>
//     </Box> 
//     </div>
//   )
// }

// export default Navbar


import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#8c5e17' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <Button color="inherit" href="/blog">Blog</Button>
        <Button color="inherit" href="/add-blog">Add Blog</Button>
        <Button color="inherit" href="/logout">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
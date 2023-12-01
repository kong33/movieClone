import React from 'react' 
import { Link } from 'react-router-dom'

export const Header = () =>{
    return(
        <div style ={{ backgroundColor: '#0B3861', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', padding: '20px', margin:'0'}}>

            <Link to ='/'>
            <img style={{ width: "154px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고" />
        </Link>
        <div >
            <Link to='/movie' style={{textDecoration: 'none' , color: 'white', padding: '20px'}}>
                영화
            </Link>
            <Link to='/TVprogram' style={{textDecoration: 'none' , color: 'white', padding: '20px'}}>
               tv프로그램
            </Link>
            <Link to='/celebrity' style={{textDecoration: 'none' , color: 'white', padding: '20px'}}>
                등장인물
            </Link>
            <Link to ='/login' style ={{textDecoration: 'none', color: 'black', borderRadius: '10%', backgroundColor:'white', padding: '15px' }}>
                로그인
            </Link>
            <Link to='/weather' style ={{textDecoration: 'none', color: 'black', borderRadius: '10%', backgroundColor:'white', padding: '15px', margin: '20px' }}>
            날씨
            </Link>
        </div>
        </div>

    )
    
}
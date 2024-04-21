import React from "react"
import s from './Pagination.module.css'

export const Pagination = ({pageIndex,handleFirstPage,disable1,disable2,handlePageClick,handleLastPage,currentPage,focusState}) =>{

    return( 
       <div className={s.pagin}> 
            <button  onClick={handleFirstPage} className={(disable1) ? s.disabled :s.paginBtn1} >First</button>            
            {/* {[...Array(5)].map((el, index) =>           
            <button onClick={()=>handlePageClick(index+1)} className={s.paginBtn} >{index+1} </button>)
            } */}
             <button onClick={()=>handlePageClick(pageIndex-2)} className={(disable1) ? s.paginDisable :s.paginBtn} >{pageIndex-2} </button>
             <button onClick={()=>handlePageClick(pageIndex-1)} className={s.paginBtn} >{pageIndex-1} </button>
             <button onClick={()=>handlePageClick(pageIndex)} className={s.paginBtn} >{pageIndex}</button>
             <button onClick={()=>handlePageClick(pageIndex+1)} className={s.paginBtn} >{pageIndex+1} </button>
             <button onClick={()=>handlePageClick(pageIndex+2)} className={(disable2) ? s.paginDisable :s.paginBtn} >{pageIndex+2}</button>
       
             <button onClick={()=>handleLastPage(currentPage)} className={(disable2) ? s.disabled :s.paginBtn1} >Last</button>            
        </div>
        );
    };

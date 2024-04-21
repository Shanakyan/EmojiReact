import s from './Main.module.css'
import {Card} from '../Card/Card'
import {data} from  '../../data/data'
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { SelectOption } from '../SelectOption/SelectOption';
// import { Input } from '../Input/Input';
export const Main = () =>{
    const [emoji, setEmoji] = useState('');

    const [currentPage, setCurrentPage]=useState(1)
    const [filteredEmoji, setFilteredEmoji]=useState([]);
    const [emojiPerPage, setemojiPerPage] = useState(12);
    const [disable1, setDisable1]=useState(false)
    const [disable2, setDisable2]=useState(false)
    const [pageIndex, setPageIndex]=useState(3);
    const [focusState, setFocusState]=useState(false)

    let lastEmoji= currentPage * emojiPerPage;
    let firstEmoji = lastEmoji - emojiPerPage;
    let  currentEmojies = filteredEmoji.slice(firstEmoji, lastEmoji);            
   
    useEffect(()=>{
                const filteredEmoji=data.filter(value=>value.title.toLowerCase().includes(emoji)|| value.keywords.toLowerCase().includes(emoji) );
                setFilteredEmoji(filteredEmoji);
                setCurrentPage(1)
                setPageIndex(3)
                setFocusState(false) 
                  
                
            },[emoji,emojiPerPage]);
    
    const handleLastPage = ()=>{    
        setCurrentPage(Math.ceil(filteredEmoji.length/emojiPerPage))        
        setDisable2(true)
        setDisable1(false)
        setPageIndex(Math.ceil(filteredEmoji.length/emojiPerPage)-2)
        setFocusState(false)
    }
   
    const handleFirstPage = (e) => { 
        setCurrentPage(1)    
        setDisable1(true)
        setDisable2(false) 
        setPageIndex(3)
                      
    }
    const handlePageClick = (pageNumber) => {
        setFocusState(false)
        setCurrentPage(pageNumber)
        setDisable1(false) 
        setDisable2(false)
             
        if(pageNumber>=Math.ceil(filteredEmoji.length/emojiPerPage-2))
        {
        setPageIndex(Math.ceil(filteredEmoji.length/emojiPerPage-2))

        // setCurrentPage(pageNumber)        
        }
        else if(pageNumber>=3)
        {           
        setCurrentPage(pageNumber) 
        setPageIndex(pageNumber)
        setFocusState(true)
        }
      
        // setFocusState(true)
        // console.log(currentEmojies);           
}

    return(      
        <main className={s.main}>  
        <div className="container">
            <div className={s.input}>  
            <input onChange={(e)=>setEmoji(e.target.value.toLowerCase())} type="text" className={s.mainInput} placeholder="Placeholder"/>           
            </div>
            <div className={s.paginationWrapper}>
            <Pagination 
                totalPage={filteredEmoji.length}
                emojiPerPage={emojiPerPage}
                handleLastPage={handleLastPage}
                handleFirstPage={handleFirstPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                disable1={disable1}         
                disable2={disable2}
                pageIndex={pageIndex} 
                focusState={focusState}      
            />
            <SelectOption value={emojiPerPage} onChange={(e)=>setemojiPerPage(e.target.value)}/>
            </div>
           
            <div className={s.cards}>
            {/* {data
            .filter((value=>value.title.toLowerCase().includes(emoji)|| value.keywords.toLowerCase().includes(emoji) ))
            .map((el) => (<Card title={el.title} symbol={el.symbol} keywords={el.keywords} />))}                   */}

            {currentEmojies.map((el, index) =>
                (<Card key={index} title={el.title} symbol={el.symbol}  keywords={el.keywords} />)) 
                                   
            }                                  
            </div>
            {console.log(currentEmojies)} 
            <div className={s.paginationWrapper}>
            <Pagination 
                totalPage={filteredEmoji.length}
                emojiPerPage={emojiPerPage}
                handleLastPage={handleLastPage}
                handleFirstPage={handleFirstPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                disable1={disable1}         
                disable2={disable2}
                pageIndex={pageIndex}       
            />
            <SelectOption value={emojiPerPage} onChange={(e)=>setemojiPerPage(e.target.value)}/>
            </div>
               
        </div>
    </main>
    )

};
import s from './Card.module.css'
export const Card = ({title, symbol,keywords})=>{
    function remuveDublicate(obj){
        let arr = obj.split(' ');
        let newarr = [];
         for(let i = 0; i<arr.length; i++){    
                      if(!newarr.includes(arr[i])){
                   newarr.push(arr[i])
               }      
         }
         return newarr.join(' '); 
       }

    return(
        <div className={s.card}>
        
        <div className={s.cardTitle}>{symbol}</div>
        <h2 className={s.cardSubtitle}>{title}</h2>
        <p className={s.cardContent}>{remuveDublicate(keywords)}</p>
    </div>
    );

};
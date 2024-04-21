import s from './Footer.module.css'
export const  Footer = () =>{
    return (
        <footer className={s.footer}>
        <div classNAme="container">
            <hr className={s.line}/>
            <p className={s.footerContent}>2022 © Made with love by me</p>
        </div>
    </footer>

    )
}
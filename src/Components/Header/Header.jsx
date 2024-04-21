import s from './Header.module.css'
export const Header = () => {
    return(
        <div>
            <header className={s.header}>
                <div className="container">
                    <h1 className={s.headerTitle}>Emoji Finder</h1>
                    <p className={s.headerContent}>Find emoji by keywords</p>
                </div>
            </header>
            
      </div>
    );
}
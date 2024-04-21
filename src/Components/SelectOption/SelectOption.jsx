import s from './SelectOption.module.css'

export const SelectOption = ({value, onChange}) => {

    return <div className={s.wrap}>
        <p className={s.selectName}>Per Page</p>
        <select onChange={onChange} value={value}  className={s.selectOption } >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
        </select>

    </div>
    }
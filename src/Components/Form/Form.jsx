import { useState } from 'react';
import styles from './Form.module.css';

function Form({ onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        };
    };
    
    const handleSubmit = event => {
        event.preventDefault();

        const options = { name, number };
        onSubmit(options);
        reset();
    };

    const reset = () => {
            setName('');
            setNumber('');
    };

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}>
            <label className={styles.label}>Name
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleInputChange} value={name}
                    required
                />
            </label>
            <label className={styles.label}>Number
                <input
                    className={styles.input}
                    onChange={handleInputChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            <button
                className={styles.btn}
                type="submit">
                Add contact
            </button>
        </form>
        );
    };        


export default Form;
import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component{
    state = {
        name: '',
        number: '',
    }

    handleInputChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({ [name]: value });    
    }
    
    reset = () => {
        this.setState({name: '', number: ''})
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state);

        this.reset();
    }

    
    render() {
        const { name, number } = this.state;

        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}>
                <label className={styles.label}>Name
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        onChange={this.handleInputChange} value={name}
                        required
                    />
                </label>
                <label className={styles.label}>Number
                    <input
                        className={styles.input}
                        onChange={this.handleInputChange}
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
    }
}

export default Form;
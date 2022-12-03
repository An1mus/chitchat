import React from 'react';
import styles from './Inputs.module.scss';

const Inputs: React.FC = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    return <form className={styles.inputs}>
        <input type="text"/>
        <button onClick={handleSubmit}>send</button>
    </form>;
}

export default Inputs;
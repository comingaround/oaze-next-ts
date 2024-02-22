'use client'
import { useState, FormEvent } from 'react';
import styles from './emailForm.module.css';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailForm}>
      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Įveskite savo el. pašto adresą"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">PRENUMERUOTI</button>
    </form>
  );
};

export default EmailForm;

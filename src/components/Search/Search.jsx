import React, { useState } from 'react';
import styles from './search.module.css';

const Search = ({ id, className, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Передача текста поискового запроса обратно в родительский компонент
        onSearch(value);
    };

    return (
        <div id={id} className={`${styles.search} ${className}`}>
            <input
                type="text"
                className={styles.input}
                placeholder="Поиск..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.6628 17 13.1902 16.4202 14.3911 15.4518L19.7197 20.7803C20.0126 21.0732 20.4874 21.0732 20.7803 20.7803C21.0732 20.4874 21.0732 20.0126 20.7803 19.7197L15.4518 14.3911C16.4202 13.1902 17 11.6628 17 10C17 6.13401 13.866 3 10 3Z"
                    fill="#13559F"
                />
            </svg>
        </div>
    );
};

export default Search;

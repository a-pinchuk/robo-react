import React, { useState } from 'react';

const JobForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ title, description, name, link, year });
    setTitle('');
    setDescription('');
    setName('');
    setLink('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '25px' }}>
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={event => setYear(event.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Link"
        value={link}
        onChange={event => setLink(event.target.value)}
      />
      <button type="submit">Add new workplace</button>
    </form>
  );
};

export default JobForm;

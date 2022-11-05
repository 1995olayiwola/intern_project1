import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextarea.css';

function RichTextarea({
  name,
  label,
  id,
  placeholder,
  handleChange,
  value,
  error,
  helperText,
}) {
  return (
    <div className={error ? 'error' : ''}>
      <label
        style={{
          fontSize: '18px',
          fontWeight: 'bold',
          display: 'block',
          marginBottom: '15px',
        }}
      >
        {label}
      </label>
      <ReactQuill
        value={value}
        onChange={(e) => {
          handleChange(name, e);
        }}
        theme='snow'
        placeholder={placeholder}
        className='rulebox'
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['image', 'link', 'video'],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
          ],
        }}
      />
      {error && <div className='helper-text'>{helperText}</div>}
    </div>
  );
}

export default RichTextarea;
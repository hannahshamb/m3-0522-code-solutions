import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordian';

const topics = [
  { id: 1, topic: 'HyperText Markup Language', content: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.' },
  { id: 2, topic: 'Cascading Style Sheets', content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
  { id: 3, topic: 'JavaScript', content: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Accordion topics={topics} />);

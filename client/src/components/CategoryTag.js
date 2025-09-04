import React from 'react';
import './CategoryTag.css'; // Import the stylesheet
import { Link } from "react-router-dom";


const CategoryTag = ({ category }) => {
  return (
    <Link to={`/category/${category}`} className="category-tag">
      {category}
    </Link>
  );
};

export default CategoryTag;
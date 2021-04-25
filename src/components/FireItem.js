import "./App.css";
import firebase from "./firebase";
import db from "./funkc/servisni";
import React, { useState, useEffect } from "react";

function FireItem({ match }) {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = db.collection("polja").where("id", "==", match.params.id);
    console.log(response);
    const data = await response.get();
    data.docs.forEach((item) => {
      setBlogs([...blogs, item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="App">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="blog-container">
              <h4>{blog.Ime}</h4>
              <p>{blog.Prezime}</p>
            </div>
          );
        })}
    </div>
  );
}

export default FireItem;

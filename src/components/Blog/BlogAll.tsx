import React, { useEffect } from "react";
import "./BlogAll.scss";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { getAllBlog } from "../../redux-store/blog-admin-reducer";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const BlogAll = () => {
  const dispatch = useAppDispatch();
  const allBlog = useAppSelector((state) => state.blogAdminReducer.data);
  const wait = useAppSelector((state) => state.errorReducer.tableWait);

  const blogs = () => {
    return allBlog.map((el, index) => {
      return (
        <Link
          to={`/blog/${el._id}`}
          state={{ id: el._id }}
          className={"divBlog"}
          key={index}
        >
          <div className={"pelena"}></div>
          <img src={el.img} alt="Блог" className={"imgBlog"} />
          <span className={"spanBlog"}>{el.title}</span>
        </Link>
      );
    });
  };
  const result = blogs();
  useEffect(() => {
    dispatch(getAllBlog());
  }, [dispatch]);
  return (
    <div className={"glavDivBlog"}>
      {wait ? (
        <div
          style={{
            position: "fixed",
            top: "30%",
            textAlign: "center",
            width: "100%",
            height: "100vh !important",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <React.Fragment>
          <span className={"spanGlavBlog"}>Блог</span>
          <div className={"divBlogs"}>{result}</div>
        </React.Fragment>
      )}
    </div>
  );
};

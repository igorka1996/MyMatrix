import React, { useEffect } from "react";
import "./Blog.scss";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { getBlog } from "../../redux-store/blog-reducer";
import { CircularProgress } from "@mui/material";

export const Blog = () => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const blog = useAppSelector((state) => state.blogReducer.data);
  const wait = useAppSelector((state) => state.errorReducer.tableWait);
  useEffect(() => {
    dispatch(getBlog({ id: state.id }));
  }, []);

  return (
    <div>
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
            <img className={"imgBlogOnce"} src={blog?.img} alt="Блог" />
            <span className={"titleBlog"}>{blog?.title}</span>
            <p className={"textBlog"}>
              {blog?.text.split("\n").map((paragraph: string, idx: number) => (
                <React.Fragment key={idx}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

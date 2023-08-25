import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/store";
import { avatarWaitAC } from "../../redux-store/error-wait-reducer";
import imageCompression from "browser-image-compression";
import { HandleError } from "../../utils/errors";
import { Button, CircularProgress, TextareaAutosize } from "@mui/material";
import "./BlogAdmin.scss";
import TextField from "@mui/material/TextField";
import {
  deleteBlog,
  getAllBlog,
  newBlog,
  updateBlogImg,
  updateBlogText,
  updateBlogTitle,
} from "../../redux-store/blog-admin-reducer";

export const BlogAdmin = () => {
  const dispatch = useAppDispatch();
  const tableWait = useAppSelector((state) => state.errorReducer.tableWait);
  const allBlog = useAppSelector((state) => state.blogAdminReducer.data);
  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [newText, setNewText] = useState<string>("");
  const avatarWait = useAppSelector((state) => state.errorReducer.avatarWait);
  const [num, setNum] = useState<number | null>(null);
  const [changeTitle, setChangeTitle] = useState<number | null>(null);
  const [changeText, setChangeText] = useState<number | null>(null);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  const onclickUpdateTitle = (id: string, title: string) => {
    dispatch(updateBlogTitle({ title, id }));
    setTitle("");
    setChangeTitle(null);
  };

  const onclickUpdateText = (id: string, text: string) => {
    dispatch(updateBlogText({ text, id }));
    setText("");
    setChangeText(null);
  };
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };
  const onChangeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewText(e.currentTarget.value);
  };
  const handleFileUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    num: number | null
  ) => {
    setNum(num);
    dispatch(avatarWaitAC({ avatarWait: true }));
    let file = event.target.files?.[0];
    if (!file) return;
    try {
      const compressedImage = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.readAsDataURL(compressedImage);
      reader.onload = () => {
        const base64Image = reader.result?.toString().split(",")[1];
        if (base64Image) {
          setImg(`data:image/jpeg;base64,${base64Image}`);
        }
      };
      dispatch(avatarWaitAC({ avatarWait: false }));
      event.target.value = "";
    } catch (error) {
      HandleError(error, dispatch);
    }
  };

  const handleFileUpdate = async (
    event: ChangeEvent<HTMLInputElement>,
    num: number,
    id: string
  ) => {
    setNum(num);
    dispatch(avatarWaitAC({ avatarWait: true }));
    let file = event.target.files?.[0];
    if (!file) return;
    try {
      const compressedImage = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.readAsDataURL(compressedImage);
      reader.onload = () => {
        const base64Image = reader.result?.toString().split(",")[1];
        if (base64Image) {
          dispatch(
            updateBlogImg({ img: `data:image/jpeg;base64,${base64Image}`, id })
          );
        }
      };
      event.target.value = "";
    } catch (error) {
      HandleError(error, dispatch);
    }
  };

  const onClickHandler = () => {
    dispatch(newBlog({ img, title, text: newText }));
    setNewText("");
    setTitle("");
    setImg("");
  };

  const onDoubleClickChangeTitle = (title: string, index: number) => {
    setChangeTitle(index);
    setTitle(title);
  };

  const onDoubleClickChangeText = (text: string, index: number) => {
    setChangeText(index);
    setText(text);
  };

  const blog = () => {
    return allBlog.map((el, index) => {
      return (
        <div className={"divDescBlog"}>
          <div className="deleteButton">
            <span
              onClick={() => dispatch(deleteBlog({ id: el._id }))}
              className={"deleteSpan"}
            ></span>
          </div>
          <div className={"divAvatarBlog"}>
            {avatarWait && num === index ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              <img
                className={"avatarImgBlog"}
                src={
                  el.img
                    ? el.img
                    : "https://cdn.culture.ru/images/dc39cf48-3bef-521f-92a1-14ad0b340bc9"
                }
                width={400}
                alt="Блог"
              />
            )}
            {avatarWait ? (
              ""
            ) : (
              <input
                className={"avatarInput"}
                onChange={(e) => handleFileUpdate(e, index, el._id)}
                accept="image/jpeg,image/png,image/gif"
                type="file"
              />
            )}
          </div>
          {changeTitle === index ? (
            <React.Fragment>
              <input
                autoFocus
                style={{ width: "100%", height: "auto" }}
                value={title.split("\n").join("\n")}
                onChange={onChangeTitle}
              ></input>
              <Button
                onClick={() => onclickUpdateTitle(el._id, title)}
                style={{ marginBottom: 10 }}
                variant={"contained"}
              >
                Изменить
              </Button>
              <Button
                onClick={() => setChangeTitle(null)}
                variant={"contained"}
              >
                Отмена
              </Button>
            </React.Fragment>
          ) : (
            <span
              className={"spanDesc"}
              onDoubleClick={(e) => onDoubleClickChangeTitle(el.title, index)}
            >
              Заголовок: {el?.title}
            </span>
          )}
          {changeText === index ? (
            <React.Fragment>
              <textarea
                cols={30}
                rows={10}
                autoFocus
                style={{ width: "100%", height: "auto" }}
                value={text.split("\n").join("\n")}
                onChange={onChangeText}
              ></textarea>
              <Button
                onClick={() => onclickUpdateText(el._id, text)}
                style={{ marginBottom: 10 }}
                variant={"contained"}
              >
                Изменить
              </Button>
              <Button onClick={() => setChangeText(null)} variant={"contained"}>
                Отмена
              </Button>
            </React.Fragment>
          ) : (
            <p
              className="descriptionAdmin"
              onDoubleClick={(e) => onDoubleClickChangeText(el.text, index)}
            >
              Описание:
              {el?.text.split("\n").map((paragraph: string, idx: number) => (
                <React.Fragment key={idx}>
                  {paragraph}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      );
    });
  };
  const blogFull = blog();

  useEffect(() => {
    dispatch(getAllBlog());
  }, []);

  return (
    <div>
      {tableWait ? (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100vh",
            top: "40%",
            textAlign: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        blogFull
      )}
      <div className={"divNewProgram"}>
        <div className={"divAvatarBlog"}>
          {avatarWait && num === null ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            <img
              className={"avatarImgBlog"}
              src={
                img
                  ? img
                  : "https://cdn.culture.ru/images/dc39cf48-3bef-521f-92a1-14ad0b340bc9"
              }
              width={400}
              alt="Блог"
            />
          )}
          {avatarWait ? (
            ""
          ) : (
            <input
              className={"avatarInput"}
              onChange={(e) => handleFileUpload(e, null)}
              accept="image/jpeg,image/png,image/gif"
              type="file"
            />
          )}
        </div>
        <span className={"spanProgram"}>Заголовок</span>
        <TextField
          className={"inputProgram"}
          value={title}
          onChange={onChangeTitle}
          type={"text"}
        ></TextField>
        <div className={"divProgram"}>
          <span className={"spanProgram"}>Описание</span>
          <TextareaAutosize
            style={{ width: "100% !important", height: "auto" }}
            cols={150}
            value={newText}
            onChange={onChangeNewText}
          ></TextareaAutosize>
        </div>
        <Button onClick={onClickHandler} variant={"contained"}>
          Создать
        </Button>
      </div>
    </div>
  );
};

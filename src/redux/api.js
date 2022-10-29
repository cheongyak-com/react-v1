import axios from "axios";

export const getFilter= async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/dummyList.json`;
  return await axios.get(url);
}

export const getArticle = async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/dummyList.json`;
  return await axios.get(url);
}

export const getContent = async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/dummyList.json`;
  return await axios.get(url);
}
import axios from "axios";

export const getFilter= async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/dummyList.json`;
  return await axios.get(url);
}

export const getArticle = async (option)=>{
  const params = {
    state: option.state,
    area: option.area,
    type: option.type
  }
  const url = `http://kongnas.com:8190/api/houses`;
  return await axios.get(url, {params});
}

export const getContent = async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/dummyList.json`;
  return await axios.get(url);
}
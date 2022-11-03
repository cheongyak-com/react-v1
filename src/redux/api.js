import axios from "axios";

export const getFilter= async ()=>{
  const url = `${process.env.PUBLIC_URL}/db/filter.json`;
  return await axios.get(url);
}

export const getArticle = async (option)=>{
  const params = {
    state: option.state,
    area: option.area,
    type: option.type
  }
  const url = `https://cheongyak.com/api/houses`;
  return await axios.get(url, {params});
}

export const getContent = async (option)=>{
  const url = `https://cheongyak.com/api/houses/${option.id}`;
  return await axios.get(url);
}
import axios from "axios";

const URL = "http://localhost:3001/posts"

//все посты
const getPosts = () => {
    return axios.get(URL);
};
//один пост
const getPost = (id) => {
    return axios.get(`${URL}/${id}`)
}
export default {
    getPosts: getPosts,
    getPost: getPost
};

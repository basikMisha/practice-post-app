import axios from "axios";

export default class PostService {
   static async getAll(limit = 10, page = 1) {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
         });
         return response;
    }






    //get posts by id function

    static async getById(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        return response;
   }

   //get comments for post function

   static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
   }

}
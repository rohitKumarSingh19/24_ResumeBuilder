// export const BASE_URL="http://localhost:8000";
 export const BASE_URL='https://two4-resumebuilder-backend-1.onrender.com/'
//utils/apiPath.js
export const API_PATHS={
    AUTH:{
        REGISTER:"/api/auth/register",//SIGNUP
        LOGIN:"/api/auth/login",//  Authenticate user & return JWT token
        GET_PROFILE:"/api/auth/profile",//Get logged-in user details
    },
    RESUME:{
        CREATE:"/api/resume",//POST-Create new resume
        GET_ALL:"/api/resume",//GET - Get all resumes of logged-in user
        GET_BY_ID:(id)=>`/api/resume/${id}`,//GET - Get a specific resume
        UPDATE:(id)=>`/api/resume/${id}`,//PUT-Update a resume
        // DELETE:(id)=>`/api/resume/${id}/upload-images`,//PUT-Upload Thumbnail and Resume profile image
        DELETE: (id) => `/api/resume/${id}`,
        UPLOAD_IMAGES:(id)=>`/api/resume/${id}/upload-images`
    },
    IMAGE:{
        UPLOAD_IMAGE:"/api/auth/upload-image"
    }
}
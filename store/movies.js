import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: "posts",
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        postsRequested: (posts, action) => {
            posts.loading = true;
        },

        postsReceived: (posts, action) => {
            posts.list= action.payload
            posts.loading = false;
        },

        postsRequestFailed: (posts, action) => {
            posts.loading = false;
        },
    },
});
export default slice.reducer;

const { postsRequested, postsReceived, postsRequestFailed } = slice.actions;

export const loadMovies = () => (dispatch) => {
    console.log("Load movie api call")
    return dispatch(
        apiCallBegan({
            url:"/movies?limit=6",
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};


export const searchMovies = (name) => (dispatch) => {
    var urlstring = "/movies?search=" + name + "&searchBy=title&limit=6";
    console.log(urlstring)
    return dispatch(
        apiCallBegan({
            url:urlstring,
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};

export const filterbygenres = (genretype, sortby)  => {
    
    var urlstring = "/movies?filter=" + genretype + "&limit=6&sortOrder=desc&sortBy=";
    switch (sortby){
        case "Release Date":
            urlstring = urlstring + "releasedate";
            break;
        case "Ratings":
            urlstring = urlstring + "ratings";
            break;
        default:
            urlstring = urlstring + "releasedate";
    }
    console.log(urlstring)
    return (      
        apiCallBegan({           
            url:urlstring,
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};

export const getMoviebyId = (id) => (dispatch) => {
    var urlstring = "/movies/" + id;
    console.log(urlstring)
    return dispatch(
        apiCallBegan({
            url:urlstring,
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
        })
    );
};


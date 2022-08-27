export default function ValidateBlog(blogValues){

    let blogError = {};

    if(!blogValues.title){
        blogError.title = "Title can't be Empty"
    }
    if(!blogValues.hashtags){
        blogError.hashtags = "Hashtags can't be Empty"
    }
    if(!blogValues.body){
        blogError.body = "Body can't be Empty"
    }
    if(!blogValues.image){
        blogError.image = "Please add an Image to your Blog"
    }

    return blogError;

}

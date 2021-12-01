import * as _ from 'lodash';
import { PostType } from 'src/app/types/post.type';
/**
 * Mapping PostsType
 */
export class PostsType {
    posts: PostType[];
    /*
     * @param init inizializer of class
     */
    constructor(init?: Partial<PostsType>) {
        this.posts = null;
        // Additional fields for form
        // Pre-Parsing data
        if (init) {
            Object.assign(this, init);
        }
    }

     /**
     * Map an ObjectForm, and return a new PostsType with the new values from the Form
     * @param original original values
     * @param item new values
     * @returns {PostsType}
     */
    static mapFrom(original: PostsType, item: any): PostsType {
        const cloneObject = _.clone(original);
        Object.assign(cloneObject, item);
        return new PostsType(cloneObject);
    }
    /**
     * Map a PostsType, and return a new PostsType with the new values that have been updated in the DB
     * @param original original values
     * @param item new values
     * @returns {PostsType}
     */
    public static mapResult(original: PostsType, item: Partial<PostsType>):PostsType {
        const cloneObject = _.clone(original);
        Object.assign(cloneObject, item);
        return new PostsType(cloneObject);
    }

}

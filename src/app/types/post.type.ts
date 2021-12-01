import * as _ from 'lodash';

/**
 * Mapping PostType
 */
export class PostType {
    id: number;
    userId: number;
    title: string;
    body: string;
    
    /*
     * @param init inizializer of class
     */
    constructor(init?: Partial<PostType>) {
        this.id = null;
        this.userId = null;
        this.title = null;
        this.body = null;
         // Additional fields for form
        // Pre-Parsing data
        if (init) {
            Object.assign(this, init);
        }
    }

     /**
     * Map an ObjectForm, and return a new PostType with the new values from the Form
     * @param original original values
     * @param item new values
     * @returns {PostType}
     */
    static mapFrom(original: PostType, item: any): PostType {
        const cloneObject = _.clone(original);

        cloneObject.id = item.id;
        cloneObject.userId = item.userId;
        cloneObject.title = item.title;
        cloneObject.body = item.body;

        return new PostType(cloneObject);
    }

    /**
     * Map a PostType, and return a new PostType with the new values that have been updated in the DB
     * @param original original values
     * @param item new values
     * @returns {PostType}
     */
    public static mapResult(original: PostType, item: Partial<PostType>):PostType {
        const cloneObject = _.clone(original);
        Object.assign(cloneObject, item);
        return new PostType(cloneObject);
    }

}




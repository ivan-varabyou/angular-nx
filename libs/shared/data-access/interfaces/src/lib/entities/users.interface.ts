/**
 * User interface
 *
 * @description
 *
 * provides an entity interface user
 * */

export interface IUser {
    /**
     * user ID
     * */
    id: number;
    /**
     * User creation date
     * */
    created: string;
    /** User update date */
    updated: string;
    /** User email */
    email: string;
    /** User phone (optional) */
    phone?: string;
    /** User password */
    password: string;
    /** User username
     * @depription
     *
     * Used as default username
     */
    username: string;
    /** User nickname (optional)
     * @description
     *
     *if present used as public
     */
    nickname?: string;
}

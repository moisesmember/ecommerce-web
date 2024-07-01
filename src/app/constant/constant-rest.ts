import { environment } from "src/environments/environment";

export const APP_URL_DEV = environment.APP_URL;
export const APP_URL = APP_URL_DEV;

export const CONSTANT_URL = {
    BASE_URL: APP_URL + '',
    BASE_URL_AUTH: APP_URL + 'auth/token',

    FEATURE: 'features/',
    CATEGORY: 'categories/',
    PRODUCT: 'products/',
    PROFILE: 'profiles/',
    USER: 'users/',
    SALE: 'sales/',
    USER_PROFILE: 'user_profiles/',
    PROFILE_FEATURE: 'profile_features/'
}
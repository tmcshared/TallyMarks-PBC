import { XML_REQUEST } from "./xmlRequest";

export const ACCOUNT_REQUEST = {
  LOGIN: data => {
    return XML_REQUEST.WRAPPER(`<UserLogin xmlns="http://tempuri.org/">
                  <userName>${data.userName}</userName>
                  <userPassword>${data.userPassword}</userPassword>
              </UserLogin>`);
  }
};

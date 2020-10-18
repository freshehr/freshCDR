import {CDRConfig} from "./CDRService";

export enum CDRProduct {
    Better,
    Ethercis,
    Dips,
    EhrBase,
    Code24,
    Cabolabs,
    Ocean,
    Ehrscape = 7,
}

export enum APIType {
    openEHR,
    Ehrscape,
    Dips,
    Code24,
    Cabolabs,
    Ocean,
}


const CDRConfigs : CDRConfig[] =[
    {
        name: 'ehrbase',
        type: CDRProduct.EhrBase,
        url: 'http://localhost:8080/ehrbase/rest/openehr/v1',
        username: 'SuperSecretPassword',
        password: '$2a$10$7RUqg',
        basicToken: 'Basic ZWhyYmFzZS11c2VyOlN1cGVyU2VjcmV0UGFzc3dvcmQ=',
        apiType: APIType.openEHR
    }
];

export default CDRConfigs;


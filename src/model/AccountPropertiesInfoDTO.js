/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import AccountPropertiesDTO from './AccountPropertiesDTO';
import AccountPropertiesMetaDTO from './AccountPropertiesMetaDTO';





/**
* The AccountPropertiesInfoDTO model module.
* @module model/AccountPropertiesInfoDTO
* @version 1.0.11
*/
export default class AccountPropertiesInfoDTO {
    /**
    * Constructs a new <code>AccountPropertiesInfoDTO</code>.
    * @alias module:model/AccountPropertiesInfoDTO
    * @class
    * @param meta {module:model/AccountPropertiesMetaDTO} 
    * @param accountProperties {module:model/AccountPropertiesDTO} 
    */

    constructor(meta, accountProperties) {
        

        
        

        this['meta'] = meta;this['accountProperties'] = accountProperties;

        
    }

    /**
    * Constructs a <code>AccountPropertiesInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountPropertiesInfoDTO} obj Optional instance to populate.
    * @return {module:model/AccountPropertiesInfoDTO} The populated <code>AccountPropertiesInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountPropertiesInfoDTO();

            
            
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = AccountPropertiesMetaDTO.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('accountProperties')) {
                obj['accountProperties'] = AccountPropertiesDTO.constructFromObject(data['accountProperties']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AccountPropertiesMetaDTO} meta
    */
    meta = undefined;
    /**
    * @member {module:model/AccountPropertiesDTO} accountProperties
    */
    accountProperties = undefined;








}


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
import AccountPropertyDTO from './AccountPropertyDTO';





/**
* The AccountPropertiesDTO model module.
* @module model/AccountPropertiesDTO
* @version 1.0.11
*/
export default class AccountPropertiesDTO {
    /**
    * Constructs a new <code>AccountPropertiesDTO</code>.
    * @alias module:model/AccountPropertiesDTO
    * @class
    * @param address {String} 
    * @param properties {Array.<module:model/AccountPropertyDTO>} 
    */

    constructor(address, properties) {
        

        
        

        this['address'] = address;this['properties'] = properties;

        
    }

    /**
    * Constructs a <code>AccountPropertiesDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AccountPropertiesDTO} obj Optional instance to populate.
    * @return {module:model/AccountPropertiesDTO} The populated <code>AccountPropertiesDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountPropertiesDTO();

            
            
            

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [AccountPropertyDTO]);
            }
        }
        return obj;
    }

    /**
    * @member {String} address
    */
    address = undefined;
    /**
    * @member {Array.<module:model/AccountPropertyDTO>} properties
    */
    properties = undefined;








}



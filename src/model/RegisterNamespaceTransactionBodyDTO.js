/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import NamespaceTypeEnum from './NamespaceTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The RegisterNamespaceTransactionBodyDTO model module.
* @module model/RegisterNamespaceTransactionBodyDTO
* @version 0.7.15
*/
export default class RegisterNamespaceTransactionBodyDTO {
    /**
    * Constructs a new <code>RegisterNamespaceTransactionBodyDTO</code>.
    * @alias module:model/RegisterNamespaceTransactionBodyDTO
    * @class
    * @param namespaceType {module:model/NamespaceTypeEnum} 
    * @param duration {module:model/UInt64DTO} 
    * @param namespaceId {module:model/UInt64DTO} 
    * @param name {String} The unique namespace name.
    * @param parentId {module:model/UInt64DTO} 
    */

    constructor(namespaceType, duration, namespaceId, name, parentId) {
        



        this['namespaceType'] = namespaceType;this['duration'] = duration;this['namespaceId'] = namespaceId;this['name'] = name;this['parentId'] = parentId;

        
    }

    /**
    * Constructs a <code>RegisterNamespaceTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RegisterNamespaceTransactionBodyDTO} obj Optional instance to populate.
    * @return {module:model/RegisterNamespaceTransactionBodyDTO} The populated <code>RegisterNamespaceTransactionBodyDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterNamespaceTransactionBodyDTO();

            
            
            

            if (data.hasOwnProperty('namespaceType')) {
                obj['namespaceType'] = NamespaceTypeEnum.constructFromObject(data['namespaceType']);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = UInt64DTO.constructFromObject(data['duration']);
            }
            if (data.hasOwnProperty('namespaceId')) {
                obj['namespaceId'] = UInt64DTO.constructFromObject(data['namespaceId']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = UInt64DTO.constructFromObject(data['parentId']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/NamespaceTypeEnum} namespaceType
    */
    namespaceType = undefined;
    /**
    * @member {module:model/UInt64DTO} duration
    */
    duration = undefined;
    /**
    * @member {module:model/UInt64DTO} namespaceId
    */
    namespaceId = undefined;
    /**
    * The unique namespace name.
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {module:model/UInt64DTO} parentId
    */
    parentId = undefined;








}



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





/**
* The NamespaceIds model module.
* @module model/NamespaceIds
* @version 0.7.15
*/
export default class NamespaceIds {
    /**
    * Constructs a new <code>NamespaceIds</code>.
    * @alias module:model/NamespaceIds
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NamespaceIds</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceIds} obj Optional instance to populate.
    * @return {module:model/NamespaceIds} The populated <code>NamespaceIds</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NamespaceIds();

            
            
            

            if (data.hasOwnProperty('namespaceIds')) {
                obj['namespaceIds'] = ApiClient.convertToType(data['namespaceIds'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The array of namespace identifiers.
    * @member {Array.<String>} namespaceIds
    */
    namespaceIds = undefined;








}



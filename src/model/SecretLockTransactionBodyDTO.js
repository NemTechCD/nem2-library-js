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
import HashAlgorithmEnum from './HashAlgorithmEnum';
import UInt64DTO from './UInt64DTO';





/**
* The SecretLockTransactionBodyDTO model module.
* @module model/SecretLockTransactionBodyDTO
* @version 0.7.15
*/
export default class SecretLockTransactionBodyDTO {
    /**
    * Constructs a new <code>SecretLockTransactionBodyDTO</code>.
    * @alias module:model/SecretLockTransactionBodyDTO
    * @class
    * @param duration {module:model/UInt64DTO} 
    * @param mosaicId {module:model/UInt64DTO} 
    * @param amount {module:model/UInt64DTO} 
    * @param hashAlgorithm {module:model/HashAlgorithmEnum} 
    * @param secret {String} The proof hashed.
    * @param recipient {String} The address in hexadecimal that will receive the funds once the transaction is unlocked.
    */

    constructor(duration, mosaicId, amount, hashAlgorithm, secret, recipient) {
        



        this['duration'] = duration;this['mosaicId'] = mosaicId;this['amount'] = amount;this['hashAlgorithm'] = hashAlgorithm;this['secret'] = secret;this['recipient'] = recipient;

        
    }

    /**
    * Constructs a <code>SecretLockTransactionBodyDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecretLockTransactionBodyDTO} obj Optional instance to populate.
    * @return {module:model/SecretLockTransactionBodyDTO} The populated <code>SecretLockTransactionBodyDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretLockTransactionBodyDTO();

            
            
            

            if (data.hasOwnProperty('duration')) {
                obj['duration'] = UInt64DTO.constructFromObject(data['duration']);
            }
            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = UInt64DTO.constructFromObject(data['mosaicId']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = UInt64DTO.constructFromObject(data['amount']);
            }
            if (data.hasOwnProperty('hashAlgorithm')) {
                obj['hashAlgorithm'] = HashAlgorithmEnum.constructFromObject(data['hashAlgorithm']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('recipient')) {
                obj['recipient'] = ApiClient.convertToType(data['recipient'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} duration
    */
    duration = undefined;
    /**
    * @member {module:model/UInt64DTO} mosaicId
    */
    mosaicId = undefined;
    /**
    * @member {module:model/UInt64DTO} amount
    */
    amount = undefined;
    /**
    * @member {module:model/HashAlgorithmEnum} hashAlgorithm
    */
    hashAlgorithm = undefined;
    /**
    * The proof hashed.
    * @member {String} secret
    */
    secret = undefined;
    /**
    * The address in hexadecimal that will receive the funds once the transaction is unlocked.
    * @member {String} recipient
    */
    recipient = undefined;








}



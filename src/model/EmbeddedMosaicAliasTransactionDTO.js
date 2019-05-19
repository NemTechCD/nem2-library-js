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
import AliasActionEnum from './AliasActionEnum';
import EmbeddedTransactionDTO from './EmbeddedTransactionDTO';
import EntityTypeEnum from './EntityTypeEnum';
import MosaicAliasTransactionBodyDTO from './MosaicAliasTransactionBodyDTO';
import NetworkTypeEnum from './NetworkTypeEnum';
import UInt64DTO from './UInt64DTO';





/**
* The EmbeddedMosaicAliasTransactionDTO model module.
* @module model/EmbeddedMosaicAliasTransactionDTO
* @version 0.7.15
*/
export default class EmbeddedMosaicAliasTransactionDTO {
    /**
    * Constructs a new <code>EmbeddedMosaicAliasTransactionDTO</code>.
    * @alias module:model/EmbeddedMosaicAliasTransactionDTO
    * @class
    * @implements module:model/EmbeddedTransactionDTO
    * @implements module:model/MosaicAliasTransactionBodyDTO
    * @param signer {String} The public key of the entity signer formatted as hexadecimal.
    * @param version {module:model/NetworkTypeEnum} 
    * @param type {module:model/EntityTypeEnum} 
    * @param maxFee {module:model/UInt64DTO} 
    * @param deadline {module:model/UInt64DTO} 
    * @param aliasAction {module:model/AliasActionEnum} 
    * @param namespaceId {module:model/UInt64DTO} 
    * @param mosaicId {module:model/UInt64DTO} 
    */

    constructor(signer, version, type, maxFee, deadline, aliasAction, namespaceId, mosaicId) {
        



        

        
    }

    /**
    * Constructs a <code>EmbeddedMosaicAliasTransactionDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EmbeddedMosaicAliasTransactionDTO} obj Optional instance to populate.
    * @return {module:model/EmbeddedMosaicAliasTransactionDTO} The populated <code>EmbeddedMosaicAliasTransactionDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddedMosaicAliasTransactionDTO();

            
            
            EmbeddedTransactionDTO.constructFromObject(data, obj);MosaicAliasTransactionBodyDTO.constructFromObject(data, obj);

        }
        return obj;
    }



    // Implement EmbeddedTransactionDTO interface:
    /**
    * The public key of the entity signer formatted as hexadecimal.
    * @member {String} signer
    */
    signer = undefined;
/**
    * @member {module:model/NetworkTypeEnum} version
    */
    version = undefined;
/**
    * @member {module:model/EntityTypeEnum} type
    */
    type = undefined;
/**
    * @member {module:model/UInt64DTO} max_fee
    */
    max_fee = undefined;
/**
    * @member {module:model/UInt64DTO} deadline
    */
    deadline = undefined;

    // Implement MosaicAliasTransactionBodyDTO interface:
    /**
    * @member {module:model/AliasActionEnum} aliasAction
    */
    aliasAction = undefined;
/**
    * @member {module:model/UInt64DTO} namespaceId
    */
    namespaceId = undefined;
/**
    * @member {module:model/UInt64DTO} mosaicId
    */
    mosaicId = undefined;







}



/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
import RolesTypeEnum from './RolesTypeEnum';





/**
* The NodeInfoDTO model module.
* @module model/NodeInfoDTO
* @version 0.7.15
*/
export default class NodeInfoDTO {
    /**
    * Constructs a new <code>NodeInfoDTO</code>.
    * @alias module:model/NodeInfoDTO
    * @class
    * @param publicKey {String} The public key used to identify the node.
    * @param port {Number} The port used for the communication.
    * @param networkIdentifier {Number} 
    * @param version {Number} The version of the application.
    * @param roles {module:model/RolesTypeEnum} 
    * @param host {String} The IP address of the endpoint.
    * @param friendlyName {String} The name of the node.
    */

    constructor(publicKey, port, networkIdentifier, version, roles, host, friendlyName) {
        

        
        

        this['publicKey'] = publicKey;this['port'] = port;this['networkIdentifier'] = networkIdentifier;this['version'] = version;this['roles'] = roles;this['host'] = host;this['friendlyName'] = friendlyName;

        
    }

    /**
    * Constructs a <code>NodeInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NodeInfoDTO} obj Optional instance to populate.
    * @return {module:model/NodeInfoDTO} The populated <code>NodeInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeInfoDTO();

            
            
            

            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('networkIdentifier')) {
                obj['networkIdentifier'] = ApiClient.convertToType(data['networkIdentifier'], 'Number');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = RolesTypeEnum.constructFromObject(data['roles']);
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('friendlyName')) {
                obj['friendlyName'] = ApiClient.convertToType(data['friendlyName'], 'String');
            }
        }
        return obj;
    }

    /**
    * The public key used to identify the node.
    * @member {String} publicKey
    */
    publicKey = undefined;
    /**
    * The port used for the communication.
    * @member {Number} port
    */
    port = undefined;
    /**
    * @member {Number} networkIdentifier
    */
    networkIdentifier = undefined;
    /**
    * The version of the application.
    * @member {Number} version
    */
    version = undefined;
    /**
    * @member {module:model/RolesTypeEnum} roles
    */
    roles = undefined;
    /**
    * The IP address of the endpoint.
    * @member {String} host
    */
    host = undefined;
    /**
    * The name of the node.
    * @member {String} friendlyName
    */
    friendlyName = undefined;








}



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
 * OpenAPI spec version: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import MosaicIds from '../model/MosaicIds';
import MosaicInfoDTO from '../model/MosaicInfoDTO';
import MosaicNameDTO from '../model/MosaicNameDTO';

/**
* MosaicRoutes service.
* @module api/MosaicRoutesApi
* @version 1.0.11
*/
export default class MosaicRoutesApi {

    /**
    * Constructs a new MosaicRoutesApi. 
    * @alias module:api/MosaicRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get mosaic information
     * Gets the mosaic definition for a given mosaicId.
     * @param {String} mosaicId The mosaic identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MosaicInfoDTO} and HTTP response
     */
    getMosaicWithHttpInfo(mosaicId) {
      let postBody = null;

      // verify the required parameter 'mosaicId' is set
      if (mosaicId === undefined || mosaicId === null) {
        throw new Error("Missing the required parameter 'mosaicId' when calling getMosaic");
      }


      let pathParams = {
        'mosaicId': mosaicId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MosaicInfoDTO;

      return this.apiClient.callApi(
        '/mosaic/{mosaicId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get mosaic information
     * Gets the mosaic definition for a given mosaicId.
     * @param {String} mosaicId The mosaic identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MosaicInfoDTO}
     */
    getMosaic(mosaicId) {
      return this.getMosaicWithHttpInfo(mosaicId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get mosaics information for an array of mosaics
     * Gets an array of mosaic definition.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MosaicInfoDTO>} and HTTP response
     */
    getMosaicsWithHttpInfo(mosaicIds) {
      let postBody = mosaicIds;

      // verify the required parameter 'mosaicIds' is set
      if (mosaicIds === undefined || mosaicIds === null) {
        throw new Error("Missing the required parameter 'mosaicIds' when calling getMosaics");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MosaicInfoDTO];

      return this.apiClient.callApi(
        '/mosaic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get mosaics information for an array of mosaics
     * Gets an array of mosaic definition.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MosaicInfoDTO>}
     */
    getMosaics(mosaicIds) {
      return this.getMosaicsWithHttpInfo(mosaicIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get readable names for a set of mosaics
     * Returns friendly names for mosaics.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MosaicNameDTO>} and HTTP response
     */
    getMosaicsNameWithHttpInfo(mosaicIds) {
      let postBody = mosaicIds;

      // verify the required parameter 'mosaicIds' is set
      if (mosaicIds === undefined || mosaicIds === null) {
        throw new Error("Missing the required parameter 'mosaicIds' when calling getMosaicsName");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MosaicNameDTO];

      return this.apiClient.callApi(
        '/mosaic/names', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get readable names for a set of mosaics
     * Returns friendly names for mosaics.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MosaicNameDTO>}
     */
    getMosaicsName(mosaicIds) {
      return this.getMosaicsNameWithHttpInfo(mosaicIds)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

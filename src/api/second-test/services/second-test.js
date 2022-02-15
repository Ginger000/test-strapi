'use strict';

/**
 * second-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::second-test.second-test');

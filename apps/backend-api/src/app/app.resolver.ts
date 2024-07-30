/**
 * This file contains the resolver map for custom scalar types used in the
 * GraphQL schema. It includes the `Date` and `JSON` scalar types.
 */

import GraphQLJSON from 'graphql-type-json'
import { GraphQLScalarType, Kind } from 'graphql'

/**
 * The resolver map for custom scalar types.
 * @property {GraphQLScalarType} Date - The `Date` scalar type.
 * @property {GraphQLJSON} JSON - The `JSON` scalar type.
 */
export const resolverMap = {
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		/**
		 * Serializes a `Date` value to a string in ISO 8601 format.
		 * @param {Date} value - The `Date` value to serialize.
		 * @returns {string} - The serialized value.
		 */
		serialize(value: Date) {
			return value.toISOString() // Value send to the client
		},
		/**
		 * Parses a string value to a `Date` object.
		 * @param {string} value - The string value to parse.
		 * @returns {Date} - The parsed `Date` object.
		 */
		parseValue(value: string) {
			return new Date(value) // Value from the client
		},
		/**
		 * Parses a GraphQL language literal value to a `Date` object.
		 * @param {any} ast - The GraphQL language literal value to parse.
		 * @returns {Date|null} - The parsed `Date` object, or `null` if the value
		 *   is not a string.
		 */
		parseLiteral(ast) {
			if (ast.kind === Kind.STRING) {
				return new Date(ast.value) // ast value is always in string format
			}
			return null
		}
	}),
	JSON: GraphQLJSON
}
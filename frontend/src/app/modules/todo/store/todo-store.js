import { reflectKeys } from "@/app/shared/services";

const initialState = {};

const namespacedPrefix = "[TODO]";

/**
 * Mutation types
 */
// const mutationTypes = reflectKeys([], namespacedPrefix);

// const {} = mutationTypes;

/**
 * Users data mutations
 */
const mutations = {};

export const actionsTypes = reflectKeys([], namespacedPrefix);

const actions = {};

export default {
  mutations,
  actions,
  state: initialState,
};
